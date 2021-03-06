//=============================================================================
//=== Copyright (C) 2001-2011 Food and Agriculture Organization of the
//=== United Nations (FAO-UN), United Nations World Food Programme (WFP)
//=== and United Nations Environment Programme (UNEP)
//===
//===	This program is free software; you can redistribute it and/or modify
//===	it under the terms of the GNU General Public License as published by
//===	the Free Software Foundation; either version 2 of the License, or (at
//===	your option) any later version.
//===
//===	This program is distributed in the hope that it will be useful, but
//===	WITHOUT ANY WARRANTY; without even the implied warranty of
//===	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
//===	General Public License for more details.
//===
//===	You should have received a copy of the GNU General Public License
//===	along with this program; if not, write to the Free Software
//===	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301, USA
//===
//===	Contact: Jeroen Ticheler - FAO - Viale delle Terme di Caracalla 2,
//===	Rome - Italy. email: geonetwork@osgeo.org
//==============================================================================

package org.fao.geonet.kernel.harvest.harvester.z3950Config;

import jeeves.constants.Jeeves;
import jeeves.exceptions.OperationAbortedEx;
import jeeves.interfaces.Logger;
import jeeves.resources.dbms.Dbms;
import jeeves.server.context.ServiceContext;
import jeeves.utils.Xml;
import jeeves.utils.XmlRequest;
import org.fao.geonet.GeonetContext;
import org.fao.geonet.constants.Edit;
import org.fao.geonet.constants.Geonet;
import org.fao.geonet.kernel.DataManager;
import org.fao.geonet.kernel.harvest.harvester.RecordInfo;
import org.fao.geonet.kernel.setting.SettingManager;
import org.fao.geonet.lib.Lib;
import org.jdom.Element;

import java.util.HashSet;
import java.util.Set;

//=============================================================================

class Harvester
{
	//--------------------------------------------------------------------------
	//---
	//--- Constructor
	//---
	//--------------------------------------------------------------------------

	public Harvester(Logger log, ServiceContext context, Dbms dbms, Z3950ConfigParams params)
	{
		this.log    = log;
		this.context= context;
		this.dbms   = dbms;
		this.params = params;
		GeonetContext  gc = (GeonetContext) context.getHandlerContext(Geonet.CONTEXT_NAME);
		this.sm     = gc.getSettingManager();
		this.dm     = gc.getDataManager();
	}

	//--------------------------------------------------------------------------
	//---
	//--- API methods
	//---
	//--------------------------------------------------------------------------

	public Z3950ConfigResult harvest() throws Exception
	{

		XmlRequest req = new XmlRequest(params.host, new Integer(params.port));

		Lib.net.setupProxy(context, req);

		//--- perform all searches

		Set<RecordInfo> records = new HashSet<RecordInfo>();

		for(Search s : params.getSearches())
			records.addAll(search(req, s));

		if (params.isSearchEmpty())
			records.addAll(search(req, Search.createEmptySearch()));

		log.info("Total records processed in all searches :"+ records.size());

		//--- config local node

		Z3950Config  configer = new Z3950Config(log, context, req, params);
		Z3950ConfigResult result  = configer.config(records);

		return result;
	}

	//---------------------------------------------------------------------------

	private Set<RecordInfo> search(XmlRequest request, Search s) throws OperationAbortedEx
	{
		Set<RecordInfo> records = new HashSet<RecordInfo>();

		for (Object o : doSearch(request, s).getChildren("metadata"))
		{
			Element md   = (Element) o;
			Element info = md.getChild("info", Edit.NAMESPACE);

			if (info == null)
				log.warning("Missing 'geonet:info' element in 'metadata' element");
			else
			{
				String uuid       = info.getChildText("uuid");
				String schema     = info.getChildText("schema");
				String changeDate = info.getChildText("changeDate");
				String source     = info.getChildText("source");

				records.add(new RecordInfo(uuid, changeDate, schema, source));
			}
		}

		log.info("Records added to result list : "+ records.size());

		return records;
	}

	//---------------------------------------------------------------------------

	private Element doSearch(XmlRequest request, Search s) throws OperationAbortedEx
	{
		request.setAddress(context.getBaseUrl() +"/"+ Jeeves.Prefix.SERVICE +"/en/" + Geonet.Service.XML_SEARCH);

		try
		{
			log.info("Searching on : "+ params.name);
			Element response = request.execute(s.createRequest());
            if(log.isDebugEnabled()) log.debug("Search results:\n"+ Xml.getString(response));

			return response;
		}
		catch(Exception e)
		{
			log.warning("Raised exception when searching : "+ e);
			throw new OperationAbortedEx("Raised exception when searching", e);
		}
	}

	//---------------------------------------------------------------------------
	//---
	//--- Variables
	//---
	//---------------------------------------------------------------------------

	private Logger         log;
	private Dbms           dbms;
	private Z3950ConfigParams   params;
  private ServiceContext context;
	private SettingManager sm;
	private DataManager dm;
}

//=============================================================================



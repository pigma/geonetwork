Ext.ns("ExtGeoNet.test");

ExtGeoNet.test.SampleData = {
    dataString: '<?xml version="1.0" encoding="UTF-8"?> <che:CHE_MD_Metadata xmlns:che="http://www.geocat.ch/2008/che" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:srv="http://www.isotc211.org/2005/srv" xmlns:gml="http://www.opengis.net/gml" xmlns:geonet="http://www.fao.org/geonetwork" gco:isoType="gmd:MD_Metadata">   <gmd:fileIdentifier xmlns:comp="http://www.geocat.ch/2003/05/gateway/GM03Comprehensive" xmlns:xalan="http://xml.apache.org/xalan">     <gco:CharacterString>       4657febf-15ef-4acd-a46d-1a7ef04ec4ee       <geonet:element ref="3" />     </gco:CharacterString>     <geonet:element ref="2" />   </gmd:fileIdentifier>   <gmd:language xmlns:comp="http://www.geocat.ch/2003/05/gateway/GM03Comprehensive" xmlns:xalan="http://xml.apache.org/xalan">     <gco:CharacterString>       deu       <geonet:element ref="5" />     </gco:CharacterString>     <geonet:element ref="4" />   </gmd:language>   <gmd:locale>     <gmd:PT_Locale id="EN">       <gmd:languageCode>         <gmd:LanguageCode codeList="" codeListValue="eng">           <geonet:element ref="9" />         </gmd:LanguageCode>         <geonet:element ref="8" />       </gmd:languageCode>       <gmd:characterEncoding>         <gmd:MD_CharacterSetCode codeList="" codeListValue="utf8">           <geonet:element ref="11" />         </gmd:MD_CharacterSetCode>         <geonet:element ref="10" />       </gmd:characterEncoding>       <geonet:element ref="7" />     </gmd:PT_Locale>     <geonet:element ref="6" />   </gmd:locale>   <gmd:locale>     <gmd:PT_Locale id="FR">       <gmd:languageCode>         <gmd:LanguageCode codeList="" codeListValue="fra">           <geonet:element ref="15" />         </gmd:LanguageCode>         <geonet:element ref="14" />       </gmd:languageCode>       <gmd:characterEncoding>         <gmd:MD_CharacterSetCode codeList="" codeListValue="utf8">           <geonet:element ref="17" />         </gmd:MD_CharacterSetCode>         <geonet:element ref="16" />       </gmd:characterEncoding>       <geonet:element ref="13" />     </gmd:PT_Locale>     <geonet:element ref="12" />   </gmd:locale>   <gmd:identificationInfo>     <che:CHE_MD_DataIdentification gco:isoType="gmd:MD_DataIdentification">       <gmd:citation>         <gmd:CI_Citation>           <gmd:title xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="gmd:PT_FreeText_PropertyType">             <gco:CharacterString>JE_EI DEU<geonet:element ref="23" /></gco:CharacterString>             <gmd:PT_FreeText>               <gmd:textGroup>                 <gmd:LocalisedCharacterString locale="#EN">JE_EI ENG<geonet:element ref="26" /></gmd:LocalisedCharacterString><geonet:element ref="25" /></gmd:textGroup>               <gmd:textGroup>                 <gmd:LocalisedCharacterString locale="#FR">JE_EI FRA<geonet:element ref="28" /></gmd:LocalisedCharacterString>                 <geonet:element ref="27" />               </gmd:textGroup>               <geonet:element ref="24" />             </gmd:PT_FreeText>             <geonet:element ref="22" />           </gmd:title>           <gmd:date>             <gmd:CI_Date>               <gmd:date>                 <gco:Date>                   <geonet:element ref="32" />                 </gco:Date>                 <geonet:element ref="31" />               </gmd:date>               <gmd:dateType>                 <gmd:CI_DateTypeCode codeList="http://www.isotc211.org/2005/resources/codeList.xml#CI_DateTypeCode" codeListValue="">                   <geonet:element ref="34" />                 </gmd:CI_DateTypeCode>                 <geonet:element ref="33" />               </gmd:dateType>               <geonet:element ref="30" />             </gmd:CI_Date>             <geonet:element ref="29" />           </gmd:date>           <geonet:element ref="21" />         </gmd:CI_Citation>         <geonet:element ref="20" />       </gmd:citation>       <gmd:abstract>         <gco:CharacterString>           JE_EI abstract           <geonet:element ref="36" />         </gco:CharacterString>         <geonet:element ref="35" />       </gmd:abstract>       <gmd:language gco:nilReason="missing">         <gco:CharacterString>           <geonet:element ref="38" />         </gco:CharacterString>         <geonet:element ref="37" />       </gmd:language>       <geonet:element ref="19" />     <gmd:descriptiveKeywords>             <gmd:MD_Keywords>               <gmd:keyword gco:nilReason="missing">                 <gco:CharacterString />               </gmd:keyword>               <gmd:type>                 <gmd:MD_KeywordTypeCode codeListValue="theme" codeList="http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode" />               </gmd:type>             </gmd:MD_Keywords>           </gmd:descriptiveKeywords>           <gmd:descriptiveKeywords>             <gmd:MD_Keywords>               <gmd:keyword>                 <gco:CharacterString>World</gco:CharacterString>               </gmd:keyword>               <gmd:type>                 <gmd:MD_KeywordTypeCode codeListValue="place" codeList="http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode" />               </gmd:type>             </gmd:MD_Keywords>           </gmd:descriptiveKeywords>           <gmd:descriptiveKeywords>             <gmd:MD_Keywords>               <gmd:keyword>                 <gco:CharacterString>Africa</gco:CharacterString>               </gmd:keyword>               <gmd:type>                 <gmd:MD_KeywordTypeCode codeList="http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode" codeListValue="place" />               </gmd:type>               <gmd:thesaurusName>                 <gmd:CI_Citation>                   <gmd:title>                     <gco:CharacterString>external.place.regions</gco:CharacterString>                   </gmd:title>                   <gmd:date gco:nilReason="unknown" />                 </gmd:CI_Citation>               </gmd:thesaurusName>             </gmd:MD_Keywords>           </gmd:descriptiveKeywords>    </che:CHE_MD_DataIdentification>     <geonet:element ref="18" />   </gmd:identificationInfo>   <geonet:info>     <id>       72       <geonet:element ref="40" />     </id>     <schema>       iso19139.che       <geonet:element ref="41" />     </schema>     <createDate>       2010-06-01T16:35:26       <geonet:element ref="42" />     </createDate>     <changeDate>       2010-06-07T11:04:12       <geonet:element ref="43" />     </changeDate>     <isTemplate>       n       <geonet:element ref="44" />     </isTemplate>     <title>       <geonet:element ref="45" />     </title>     <source>       07a837ef-9b2e-456f-a900-222ff9a31ad5       <geonet:element ref="46" />     </source>     <uuid>       4657febf-15ef-4acd-a46d-1a7ef04ec4ee       <geonet:element ref="47" />     </uuid>     <isHarvested>       n       <geonet:element ref="48" />     </isHarvested>     <popularity>       9       <geonet:element ref="49" />     </popularity>     <rating>       0       <geonet:element ref="50" />     </rating>     <groupowner>       14       <geonet:element ref="51" />     </groupowner>     <groupName>       Geneve       <geonet:element ref="52" />     </groupName>     <groupLabel>       Canton of Geneva (SITG)       <geonet:element ref="53" />     </groupLabel>     <groupLogoUuid>       aad8ef78-b5e9-482f-b2bf-73ae038471e4       <geonet:element ref="54" />     </groupLogoUuid>     <groupWebsite>       http://www.sitg.ch       <geonet:element ref="55" />     </groupWebsite>     <view>       false       <geonet:element ref="56" />     </view>     <notify>       false       <geonet:element ref="57" />     </notify>     <download>       false       <geonet:element ref="58" />     </download>     <geonet:element ref="39" />   </geonet:info>   <geonet:element ref="1" /> </che:CHE_MD_Metadata>',
    dom : function () {
        return ExtGeoNet.Xml.createDom(ExtGeoNet.test.SampleData.dataString)
    }
}
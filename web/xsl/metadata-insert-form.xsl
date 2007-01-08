<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:include href="main.xsl"/>

	<!--
	page content
	-->
	<xsl:template name="content">
		<xsl:call-template name="formLayout">
			<xsl:with-param name="title" select="/root/gui/strings/xmlInsert"/>
			<xsl:with-param name="content">
				<form name="xmlinsert" accept-charset="UTF-8" method="post" action="{/root/gui/locService}/metadata.insert">
					<table>
						<tr>
							<th class="padded" valign="top"><xsl:value-of select="/root/gui/strings/metadata"/></th>
							<td class="padded"><textarea class="content" name="data" cols="60" rows="15"/></td>
						</tr>
						<tr>
							<th class="padded"><xsl:value-of select="/root/gui/strings/group"/></th>
							<td class="padded">
								<select class="content" name="group" size="1">
									<xsl:for-each select="/root/gui/groups/record">
										<option value="{id}">
											<xsl:value-of select="name"/>
										</option>
									</xsl:for-each>
								</select>
							</td>
						</tr>
						<tr>
							<th class="padded"><xsl:value-of select="/root/gui/strings/schema"/></th>
							<td class="padded">
								<select class="content" name="schema" size="1">
									<xsl:for-each select="/root/gui/schemas/name">
										<option value="{.}">
											<xsl:value-of select="."/>
										</option>
									</xsl:for-each>
								</select>
							</td>
						</tr>
						<tr>
							<th class="padded"><xsl:value-of select="/root/gui/strings/validate"/></th>
							<td><input class="content" type="checkbox" name="validate"/></td>
						</tr>
						<tr>
							<th class="padded" valign="top"><xsl:value-of select="/root/gui/strings/kind"/></th>
							<td>
								<select class="content" name="template" size="1">
									<option value="n"><xsl:value-of select="/root/gui/strings/metadata"/></option>
									<option value="y"><xsl:value-of select="/root/gui/strings/template"/></option>
									<option value="s"><xsl:value-of select="/root/gui/strings/subtemplate"/></option>
								</select>
								<xsl:text>&#160;</xsl:text>
								<xsl:value-of select="/root/gui/strings/subtemplateTitle"/>
								<xsl:text>&#160;</xsl:text>
								<input class="content" type="text" name="title"/>
							</td>
						</tr>
					</table>
				</form>
			</xsl:with-param>
			<xsl:with-param name="buttons">
				<button class="content" onclick="goBack()"><xsl:value-of select="/root/gui/strings/back"/></button>
				&#160;
				<button class="content" onclick="goSubmit('xmlinsert')"><xsl:value-of select="/root/gui/strings/insert"/></button>
			</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

</xsl:stylesheet>

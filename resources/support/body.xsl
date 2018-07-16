<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:ac="http://www.vipole.com/support"
                xmlns:ri="http://www.vipole.com/support/attacments"
                >
    <xsl:import href="split.xsl"/>
    <xsl:output method="html" encoding="utf-8" omit-xml-declaration="yes" media-type="text/html"/>
    <xsl:param name="doc-id" select="/root/@doc-id"/>
    <xsl:param name="os" select="/root/@os"/>
    <xsl:param name="edition" select="/root/@edition"/>
    <xsl:param name="lang" select="/root/@lang"/>

    <xsl:template match="/">
        <xsl:copy>
            <xsl:apply-templates/>
        </xsl:copy>
    </xsl:template>


    <xsl:template match="root">
        <div class="support article">
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <xsl:template name="token">
        <xsl:param name="token"/>
        <xsl:if test="string-length($token) &gt; 0">
        <div class="line">
            <xsl:choose>
                <xsl:when test="substring($token,1,1) = '#'">
                    <xsl:attribute name="class">comment line</xsl:attribute>
                </xsl:when>
            </xsl:choose>
            <xsl:value-of select="$token"/>
        </div>
        </xsl:if>
    </xsl:template>

    <xsl:template match="ac:structured-macro/ac:plain-text-body">
        <div class="codeContent panelContent pdl">
                <xsl:apply-templates mode="split">
                    <xsl:with-param name="worddiv" select="'&#10;'"/>
                </xsl:apply-templates>
        </div>
    </xsl:template>

    <xsl:template match="ac:structured-macro[@ac:name='warning']">
        <div class="alert alert-danger">
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <xsl:template match="ac:structured-macro[@ac:name]">
        <div>
            <xsl:attribute name="class">alert alert-<xsl:value-of select = "./@ac:name"/></xsl:attribute>
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <xsl:template match="ac:structured-macro/ac:rich-text-body">
        <div class="rich-text">
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <xsl:template match="ac:image">
        <span class="image-wrapper">
            <img class="img-responsive">
                <xsl:attribute name="src">/support/<xsl:value-of select = "$lang"/>/<xsl:value-of select = "$edition"/>/<xsl:value-of select = "$os"/>/attachments/<xsl:value-of select="./ri:attachment/@ri:filename"/></xsl:attribute>
               <!-- <xsl:attribute name="width"><xsl:value-of select="./@ac:width"/></xsl:attribute> -->
            </img>
        </span>
    </xsl:template>



    <xsl:template match="ac:structured-macro[@ac:name='code']">
        <div class="code panel pdl">
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <xsl:template match="table">
        <div class="table-responsive">
            <table class="table">
                <xsl:apply-templates/>
            </table>
        </div>
    </xsl:template>

    <xsl:template match="ac:parameter[@ac:name='title']">
        <div class="codeHeader panelHeader pdl">
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <xsl:template match="ac:parameter[@ac:name='language']">
    </xsl:template>

    <xsl:template match="ac:parameter[@ac:name='theme']">

    </xsl:template>

    <xsl:template match="pre[@class='auto-cursor-target']"></xsl:template>

    <xsl:template match="ul">
        <ul class="square">
            <xsl:apply-templates/>
        </ul>
    </xsl:template>

    <xsl:template match="li">
        <li>
            <span>
            <xsl:apply-templates/>
            </span>
        </li>
    </xsl:template>

    <xsl:template match="*">
        <xsl:copy >
            <xsl:copy-of select="@*[name() != 'style']"/>
            <xsl:apply-templates/>
        </xsl:copy>
    </xsl:template>


</xsl:stylesheet>
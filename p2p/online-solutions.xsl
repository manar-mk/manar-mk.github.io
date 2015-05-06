<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0" xmlns:i18n="http://apache.org/cocoon/i18n/2.1"
                exclude-result-prefixes="i18n">

    <xsl:template name="page">
        <page status="">
            <div id="main">
                <xsl:if test="//page/payment">
                    <form id="transferForm" action="auth.jsp">
                        <div class="row">
                            <div class="from col-md-5">
                                <div class="form-inline">
                                    <div class="form-group">
                                        <div class="cardnum">
                                            <input id="fromCardNumPart1" name="fromCardNumPart1" autocomplete="off" class="form-control input-sm js-mask js-jump" data-clear-next="true" data-jump="fromCardNumPart2" maxlength="4" type="text"/>
                                            <input id="fromCardNumPart2" name="fromCardNumPart2" autocomplete="off" class="form-control input-sm js-mask js-jump" data-clear-next="true" data-jump="fromCardNumPart3" maxlength="4" type="text"/>
                                            <input id="fromCardNumPart3" name="fromCardNumPart3" autocomplete="off" class="form-control input-sm js-mask js-jump" data-clear-next="true" data-jump="fromCardNumPart4" maxlength="4" type="text"/>
                                            <input id="fromCardNumPart4" name="fromCardNumPart4" autocomplete="off" class="form-control input-sm js-mask js-jump" data-clear-next="false" data-jump="expireDateMonth" maxlength="4" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-inline row">
                                    <div class="form-group date col-md-8">
                                        <label class="text" for="">good thru:</label>
                                        <select id="expireDateMonth" name="expireDateMonth" class="form-control input-sm js-select" data-clear-next="false" data-jump="expireDateYear">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                            <option>06</option>
                                            <option>07</option>
                                            <option>08</option>
                                            <option>09</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                        <label class="separator" for="">/</label>
                                        <select id="expireDateYear" name="expireDateYear" class="form-control input-sm js-select" data-clear-next="true" data-jump="cvv">
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                        </select>
                                    </div>
                                    <div class="form-group cvv col-md-4">
                                        <label class="text" for="">CVV/CVC:</label>
                                        <input id="cvv" class="form-control input-sm js-mask js-jump" data-clear-next="true" data-jump="toCardNumPart1" name="cvv" type="password" maxlength="3"/>
                                    </div>
                                </div>
                            </div>
                            <div class="to col-md-5 col-md-offset-2">
                                <div class="form-inline">
                                    <div class="form-group cardnum">
                                        <input id="toCardNumPart1" name="toCardNumPart1" autocomplete="off" data-clear-next="true" data-jump="toCardNumPart2" class="js-mask form-control input-sm js-jump" maxlength="4" type="text"/>
                                        <input id="toCardNumPart2" name="toCardNumPart2" autocomplete="off" data-clear-next="true" data-jump="toCardNumPart3" class="js-mask form-control input-sm js-jump" maxlength="4" type="text"/>
                                        <input id="toCardNumPart3" name="toCardNumPart3" autocomplete="off" data-clear-next="true" data-jump="toCardNumPart4" class="js-mask form-control input-sm js-jump" maxlength="4" type="text"/>
                                        <input id="toCardNumPart4" name="toCardNumPart4" autocomplete="off" data-clear-next="true" data-jump="amount" class="js-mask form-control input-sm js-jump" maxlength="4" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="center-text">
                            <div class="amount form-inline form-group">
                                <label class="text" for="">Сумма:</label>
                                <input id="amount" type="text" class="js-mask" name="amount"/>
                            </div>
                            <p class="text-warning">нажимая кнопку вы <a href="#">соглашаетесь с условиями соглашения</a></p>
                            <!--  надо будет заменить на чекбокс -->
                            <input type="submit" class="btn btn-warning"/>
                        </div>
                    </form>
                    <p id="result"></p>
                </xsl:if>
                <xsl:if test="//page/error">
                    <div class="jumbotron">
                        <h2 class="text-danger">Извините, возникла ошибка</h2>
                        <p><xsl:value-of select="//page/error/message"/></p>
                        <!-- <a href="" class="btn btn-danger"><strong>ПОПРОБОВАТЬ ЕЩЕ РАЗ</strong></a> -->
                    </div>
                </xsl:if>
                <xsl:if test="//page/success">
                    <div class="jumbotron">
                        <h2 class="text-success">Спасибо, платеж проведен</h2>
                        <p>Номер платежа <strong><xsl:value-of select="//page/success/order/@id"/></strong></p>
                        <p>Сумма перевода <strong><xsl:value-of select="//page/success/order/@sum"/></strong></p>
                        <!-- <a href="" class="btn btn-success"><strong>ОПЛАТИТЬ ЕЩЕ РАЗ</strong></a> -->
                    </div>
                </xsl:if>
            </div>
        </page>
    </xsl:template>



    <xsl:template match="/">
        <html>
            <head>
                <script>if (top!=self) top.location.href=self.location.href</script>
                <title><i18n:text>Kazkommertsbank's Authorization Server</i18n:text></title>
                <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"/>
                <link rel="stylesheet" href="css/styles.css" type="text/css"/>
            </head>
            <body>
                <div class="container">
                    <xsl:call-template name="page"/>
                </div>
            </body>
            <script src="js/jquery.min.js"/>
            <script src="js/jquery.inputmask.min.js"/>
            <script src="js/main.js"/>
        </html>
    </xsl:template>

</xsl:stylesheet>

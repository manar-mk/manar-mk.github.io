<?php
$to= $_POST['from'];
$subject = "Сообщение от Kracks";

$message = '
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">

    /* Client-specific Styles */
    #outlook a {
        padding: 0;
    }
    /* Force Outlook to provide a "view in browser" button. */
    body {
        width: 100% !important;
    }
    .ReadMsgBody {
        width: 100%;
    }
    .ExternalClass {
        width: 100%;
    }
    /* Force Hotmail to display emails at full width */
    body {
        font-family: "Tahoma", sans-serif;
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        text-size-adjust: none;
    }
    /* Prevent Webkit and Windows Mobile platforms from changing default font sizes. */
    /* Reset Styles */
    body {
        margin: 0;
        padding: 0;
    }
    img {
    	display: block;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
    }
    #backgroundTable {
        height: 100% !important;
        margin: 0;
        padding: 0;
        width: 100% !important;
    }
    table {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
		border-spacing: 0;
    }
    tr,td{
    	padding: 0;
    	outline: none;
    	margin: 0;
    }
    h1 {
        text-align: center;
        height: 50px;
        font-size: 16px;
        color: #636363;
    }
    p {
        font-size: 14px;
        color: #6c6c6c;
    }
    a {
        color: #5786e7;
        text-decoration: underline;
    }
    </style>
</head>

<body>
    <table id="backgroundTable" cellspacing="0" cellpadding="0" align="left" border="0" width="100%" bgcolor="#ffffff">
        <tr>
            <td valign="top" align="left" width="">
                <table cellspacing="0" cellpadding="0" align="left" border="0" width="600" bgcolor="#ffffff">
                    <tr>
                        <td valign="top" align="left" width="" colspan="3" height="200">
                            <img src="http://kracks.kz/email/top.jpg" alt="">
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" align="left" width="70">
                            <img src="http://kracks.kz/email/left.jpg" alt="">
                        </td>
                        <td valign="top" align="left" width="460">
                            <h1>Спасибо за участие в акции
                                <br>«УГАДАЙ НОВЫЙ ВКУС KRACKS!»</h1>
                            <p>Подробнее об условиях:
                                <br>
                                <a href="http://kracks.kz/promo/">http://kracks.kz/promo/</a>
                            </p>
                            <p>И не забудь вступить в нашу группу, ведь только так ты можешь стать победителем!
                                <br>
                                <a href="https://www.facebook.com/krackskz">https://www.facebook.com/krackskz</a>
                            </p>
                            <hr>
                            <p><a href="http://kracks.kz">http://kracks.kz</a>
                            </p>
                        </td>
                        <td valign="top" align="left" width="70">
                            <img src="http://kracks.kz/email/right.jpg" alt="">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
';

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

$headers .= "From: Kracks Reminder <promo@kracks.kz>\r\n";
$headers .= "Cc: birthdayarchive@example.com\r\n";
$headers .= "Bcc: birthdaycheck@example.com\r\n";

mail($to, $subject, $message, $headers);

echo 'message send';
?>
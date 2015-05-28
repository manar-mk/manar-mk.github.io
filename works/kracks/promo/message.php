<?php
$to= "promo@kracks.kz";
$subject = "Сообщение от Kracks";

$message = '
<html>
<head>
 <title>Kracks</title>
</head>
<body>
<p>FIO:'.$_POST['fio'].'</p>
<p>EMAIL:'.$_POST['e_mail'].'</p>
<p>Сообщение:'.$_POST['message'].'</p>

</body>
</html>
';

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

$headers .= "From: Birthday Reminder <birthday@example.com>\r\n";
$headers .= "Cc: birthdayarchive@example.com\r\n";
$headers .= "Bcc: birthdaycheck@example.com\r\n";

mail($to, $subject, $message, $headers);

echo 'message send';
?>
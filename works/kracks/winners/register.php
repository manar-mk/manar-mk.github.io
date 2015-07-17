<?php
    require_once("connection.php");

    $stmt = $mysqli->prepare("INSERT INTO userinfo(taste,fullname,telephone,email,city) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param('sssss', $_POST['taste'], $_POST['fullname'], $_POST['phone'], $_POST['email'], $_POST['city']);
    $stmt->execute();
    $stmt->close();

    echo $_POST['taste'].' '.$_POST['fullname'].' '.$_POST['phone'].' '.$_POST['email'].' '.$_POST['city'];
?>
<?php
	/*include '/var/www/slim/data/www/ztest.kz/kracks/zmottest/MailChimp.php';

	$MailChimp = new \Drewm\MailChimp('681b8fce64b85ab22383abca90f44935-us8');

	
	$addsubscriber = $MailChimp->call('lists/subscribe', array(
                'id' => '0c3ba1a28c',
				'email' => array(
					'email' => $_POST['email']
				)
	));
	
	print_r(json_encode($addsubscriber));*/
	
	require_once("connection.php");

	$query = mysqli_query($mysqli, "SELECT * FROM subscribe WHERE email='".trim(strip_tags($_POST['email']))."'");
	
	if(mysqli_num_rows($query) > 0){
		echo 0;
	}
	else{
		$stmt = $mysqli->prepare("INSERT INTO subscribe(email) VALUES (?)");
		$stmt->bind_param('s', $_POST['email']);
		$stmt->execute();
		$stmt->close();

		echo 1;
	}
?>
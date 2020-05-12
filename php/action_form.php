<?php

if (isset($_POST["callBackName"]) && isset($_POST["callBackPhone"]) ) {

	$name = $_POST['callBackName'];
	$phonenumber = $_POST['callBackPhone'];
	$file = fopen("call.txt","at");
	fwrite($file,"\n $name:$phonenumber \n");
	fclose($file);
}

?>
<?php
$host = "localhost";
$username = "root";
$user_pass = "usbw";
$database_in_use = "login_infor";

// Create connection
$db = new mysqli($host, $username, $user_pass, $database_in_use);
// Check connection
if ($db->connect_errno) {
	echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
?>
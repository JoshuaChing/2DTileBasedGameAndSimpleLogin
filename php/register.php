<?php

//create connection
$connection=mysqli_connect("localhost", "root","password","test");

//Check connection
if (mysqli_connect_errno())
{
	echo "Failed to connect to MySQL ".mysqli_connect_error();
	//header ('location:http://10.22.199.70/jsgame/login');
}
else
{
	$user = $_POST["username"];
	//echo $user;
	$pw = $_POST["password2"];
	//echo $pw;
	
	$query = "SELECT username FROM users WHERE username = '$user'";

	$result = mysqli_query($connection,$query);

	if (mysqli_num_rows($result)==0)
	{	
		$id = mysqli_num_rows(mysqli_query($connection,"SELECT * FROM users"));
		$query2 = "INSERT INTO users (ID,username,password,level) VALUES ('$id', '$user', '$pw', 1)";
		mysql_query($connection,$query2);
		header ('location:http://10.22.199.70/jsgame/login');
	}
	else
	{
		echo ("<h1>The username you selected already exists. Please select another one.<h1>");
		//header ('location:http://10.22.199.70/jsgame/login');
	}
}

//close connection
mysqli_close($conection);

?>
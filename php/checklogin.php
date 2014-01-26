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
	$pw = $_POST["password"];
	
	$query = "SELECT username, password FROM users WHERE (username = '$user' AND password = '$pw')";
	$result =mysqli_query($connection,$query);
	if (mysqli_num_rows($result)==1)
	{
		header ('location:http://10.22.199.70/jsgame/game');
	}
	else
	{
		//header ('location:http://10.22.199.70/jsgame/login');
		echo ("<h1>Invalid username and password <h1>");
	}
}

//close connection
mysqli_close($connection);

 ?>
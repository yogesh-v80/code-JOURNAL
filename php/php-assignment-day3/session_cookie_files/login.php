<?php 



$jsonData = file_get_contents('data.json');

// echo $jsonData;

// Decode the JSON data into a PHP array
$data = json_decode($jsonData, true);

// echo $_SESSION['username'];

// echo $data["username"];

// print_r($data);

session_start();

if( isset($_SESSION['username']))
echo $_SESSION["username"];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	$username = $_POST['username'];
	$password = $_POST['password'];



	if ($username == $data["username"] && $password == $data["password"]) {



		header('Location: show.php');

	} else {
		echo "Username or password is wrong : (  ";
		echo '<br>';
	}
}


// echo $username;
// echo $password;




?>





<br> 
<form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
	
	<label for="username"></label>
	<input type="text" id="username" name="username">
	<label for="password"></label>
	<input type="password" id="password" name="password">

	<button type="submit">Log In</button>
</form>





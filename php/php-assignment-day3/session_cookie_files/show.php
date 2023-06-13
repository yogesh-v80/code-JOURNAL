<?php 

session_start();


$jsonFile = 'data.json';


$jsonData = file_get_contents($jsonFile);

// Decode the JSON data into a PHP array
$data = json_decode($jsonData, true);

$_SESSION['username'] = $data['username'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	$newUserName = trim($_POST["username"]);
	$newAge = trim($_POST["age"]);
	$newBio = trim($_POST["bio"]);
	$newPassword = trim($_POST["password"]);


// // Modify the values in the PHP array
	if ($newUserName != $data["username"]) {
		$data['username'] = $newUserName;
	}

	if ($newAge != $data["age"]) {
		$data['age'] = $newAge;
	}

	if ($newBio != $data["bio"]) {
		$data['bio'] = $newBio;
		
		$currentTime = time();
		$currentDateTime = date("Y-m-d H:i:s", $currentTime);

		setcookie('lastUpdateTime', $currentDateTime);
	}

	if ($newPassword != $data["password"]) {
		$data['password'] = $newPassword;
	}

// $updatedJsonData = json_encode($data, JSON_PRETTY_PRINT);
	$updatedJsonData = json_encode($data, JSON_PRETTY_PRINT);

	echo $updatedJsonData;

// Write the updated JSON data back to the file
	file_put_contents($jsonFile, $updatedJsonData);
}

?>




<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>

	<h1> Welcome back <b> <?php echo $_SESSION['username']; ?> </b> </h1>

	<p>time: <?php echo  date('h:i:sa'); ?></p>
	<form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">

		<label for="username"><b>Username:</b></label>
		<input type="text" id="username" name="username" value="<?php echo $data["username"]; ?>">
		<label for="age"> <b>Age:</b> </label>
		<input type="text" id="age" name="age" value="<?php echo $data["age"]; ?>">
		<label for="bio"><b>Bio:</b></label>
		<textarea name="bio" id="" cols="30" rows="10" > 
			<?php echo $data["bio"]; ?>

		</textarea>
		<label for="password"></label>
		<input type="password" id="password" name="password">

		<button type="submit">update</button>
	</form>




<button><a href="logout.php">Logout</a></button>

	
</body>
</html>
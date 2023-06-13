<?php 


$query_param = $_SERVER['QUERY_STRING'];
parse_str($query_param, $params);
$name = $params['name']; // "value1"
$role = $params['role']; // "value1"
$key = $params['key']; // "value1"



echo $name;
echo $role;
echo $key;

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>


	<form action="updatelist.php?key=<?php echo $key; ?>" method="POST">
		
		<label for="name">Name:</label>
		<input type="text" name="name" id="name" value="<?php echo $name; ?>"> <br> <br>
		<label for="role">Role:</label>
		<input type="text" name="role" id="role" value="<?php echo $role; ?>"> <br> <br>
		<label for="description">Description:</label>
		<br> <br>
		<textarea name="description" id="description" cols="30" rows="10"></textarea>
		<button type="submit" > Update </button>

	</form>
	
</body>
</html>
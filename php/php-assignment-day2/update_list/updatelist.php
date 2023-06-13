<?php 

include 'data.php';

$name = $_POST['name'];
$role = $_POST['role'];
$description = $_POST['description'];

$query_param = $_SERVER['QUERY_STRING'];
parse_str($query_param, $params);
$key = $params['key']; // "value1"



echo $name;
echo $role;
echo $description;
echo $key;


	for ($i=0; $i < count($newArr); $i++) { 

			

			if ( $i == $key){

				$newArr[$i]["role"] = $role;
				$newArr[$i]["name"] = $name;
				$newArr[$i]["description"] = $description;


				break;


			} 

			else{
				continue;
			}

		
	}


print_r($newArr);



?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>




		

	


	
</body>
</html>
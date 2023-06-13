<?php 

include 'data.php';





?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>

	<?php print_r($newArr); ?>


		
		<table>
			<tr>
				<th>Name</th>
				<th>Role</th>
			</tr>
             

             <?php for ($i=0; $i < count($newArr); $i++) { ?>
             	// code...
			<tr>
				<td> <?php echo $newArr[$i]["name"] ; ?> </td>
				<td><?php echo $newArr[$i]["role"]  ;?> </td>

		
					
				<td> <a href="edit.php?name=<?php echo $newArr[$i]["name"] ?>
				 &role=<?php echo $newArr[$i]["role"] ?>&key=<?php echo $i; ?>"> edit</a> </td>


				
			</tr>
            <?php  } ?>


		</table>

	


	
</body>
</html>
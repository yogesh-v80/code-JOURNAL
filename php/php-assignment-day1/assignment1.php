<?php 
//////////////////////////////////
// question_1: reverse the matrix 
/////////////////////////////////

// $arr = [
	
// 	[1,2,3],
// 	[4,5,6],
// 	[7,83,9],
// 	[11,14,15,13,12],
// ];
// for ($i = count($arr) - 1; $i >= 0; $i--) { 
// 	// code...
// 	for ($j = count($arr[$i]) - 1; $j >= 0; $j--) { 
// 		// code...
// 		print_r($arr[$i][$j]);
// 		echo " ";
// 	}
// 	echo '<br>';
// }



//////////////////////////////////
// question_2: print: permission array 
//based on newArr parameter
////////////////////////////////

$newArr = [
	[
		"name" => "Yogesh",
		"role" => "admin"
	],
	[
		"name" => "Mohit",
		"role" => "student"
	],
	[
		"name" => "Navneet",
		"role" => "teacher"
	],
	[
		"name" => "Anil",
		"role" => "staff"
	]
];

$permission = [

	"admin" => [
		1,2,3,4,5,6,7,8,9
	],
	"student" => [
		8,9
	],
	"teacher" => [
		6,7
	],
	"staff" => [
		1,2,3
	]
];




function role_print($str, $newArr, $permission){
	echo 'Name: ';
	echo $str;

	echo '<br>';


	for ($i=0; $i < count($newArr); $i++) { 

		for ($j=0; $j < count($newArr[$i]); $j++) { 
			

			if ( $newArr[$i]["name"] == $str){

				$result = $newArr[$i]["role"];

				echo ' ';
				echo 'key:  '.$result;

				echo '<br>';


				print_r($permission[$result]);

				// for ($k=0; $k < count($permission); $k++) { 
					


				// 	if (array_key_exists($result, $permission)) {
						

				// 	for ($p=0; $p < count($permission[$result]); $p++) { 
				// 		// code...
				// 		echo ' ';
				// 		print_r($permission[$result][$p]);
					


				// 	}


				// 	break;

				// 	} else {
				// 		continue;
				// 	}
				// } 

				break;


			} else{
				continue;
			}

		}
		
	}

}


role_print("Anil", $newArr, $permission);









?>
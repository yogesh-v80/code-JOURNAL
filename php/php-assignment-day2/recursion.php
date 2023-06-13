<?php 


function rec($num){

	if($num < 0){
		return;
	}

	if($num % 2 == 0)
		echo $num;

	echo '<br>';

	rec($num -1);
}

rec(9);



?>
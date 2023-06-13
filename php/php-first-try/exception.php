<?php 



// $x = 0;

// $d = !$x;

// echo "$d";  // 1

function inverse($x){

	if(!$x){
		throw new Exception("Division by zero");
		
	} 
	
	return 1/$x;
	

}

echo inverse(10);


try {
	echo inverse(5); 
	echo inverse(0);
} catch (Exception $e) {
	echo 'Caught exception', $e->getMessage(), ' ';

} finally{
	echo 'first finally';
}

try {
	echo inverse(0);
} catch (Exception $e) {
	echo 'Caught exception', $e->getMessage(), ' ';
} finally{
	echo 'second finally';
}

?>
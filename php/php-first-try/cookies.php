<?php 


// cookie name,  value, current-time + 86400 second (1-day)
setcookie("name", "yoda", time() + 86400);



if(isset($_COOKIE['name'])){
	echo $_COOKIE['name'];
}



setcookie("name", "", time() - 86400);









?>
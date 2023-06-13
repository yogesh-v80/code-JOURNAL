<?php 



$userdata_json = '{
			"username": "yoda",
			"password": "star",
			"bio": "A old monk jedi. Greeny and Brainy : )",
			"age": "3000 years"

	}';


$user_data = json_decode($userdata_json, true);


echo '<pre>';
print_r($user_data);

?>
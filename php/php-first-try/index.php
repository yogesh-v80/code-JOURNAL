<?php 

 // echo "first try on php";

 // $d = date(" F j ");

 // echo $d;

// echo $_GET['name'];
// echo $_GET['age'];


// if(isset($_POST['submit'])){
// $name =  htmlspecialchars($_POST['name']);
// $age =   htmlspecialchars($_POST['age']);
// echo $name;
// }

//other way beside htmlspecaialchars

// if(isset($_POST['submit'])){
// $name =  filter_input(INPUT_POST, 'name', 
// 	FILTER_SANITIZE_SPECIAL_CHARS );
// $age =  filter_input(INPUT_POST, 'age', 
// 	FILTER_SANITIZE_SPECIAL_CHARS );
// echo $name;
// }

// more alternative

if(isset($_POST['submit'])){

$name = filter_var_($_POST['name'], 
    FILTER_SANITIZE_SPECIAL_CHARS );
echo $name;
}

?>


<a href="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>
?name=yoda&age=30"> Click</a>



<form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
	<div>
		<label for="name"> Name:</label>
		<input type="text" name="name" id="name">
	</div>

	<div>
		<label for="age"> Age:</label>
		<input type="text" name="age" id="age">
	</div>

	<input type="submit" value="Submit" name="submit">
</form>


<br>
<hr>

<a href="/country-wiki/cookies.php"> cookies</a>


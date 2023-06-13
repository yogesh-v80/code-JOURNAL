<?php 





function isPallindrom($pal){

	if(is_numeric($pal)){
		$pal = abs($pal);
	}

	$pal = strval($pal);
	$len = strlen($pal);

	for ($i=0; $i < intval($len/2); $i++) { 
		// code...
		if($pal[$i] == $pal[$len - 1 - $i]){
			$count++;
		}
	}

	echo '<br>';
	echo "  ".$count."  "; 

	if($count == intval($len/2)){
		return ">  $pal is pallindrom";
	}else {
		return ">  $pal is not pallindrom";
	}

}


echo isPalindrome(123321);
echo isPalindrome(12421);
echo isPalindrome("abccba");
echo isPalindrome("abcc");
echo isPalindrome("abcba");




// another approach ... using built-in functon

function isPalindromeV2($pal) {
    $palString = strval($pal);
    $reverseString = strrev($palString);

    if ($palString === $reverseString) {
        return "> $pal is a palindrome";
    } else {
        return "> $pal is not a palindrome";
    }
}

echo isPalindromeV2(123321); // Output: > 123321 is a palindrome








?>
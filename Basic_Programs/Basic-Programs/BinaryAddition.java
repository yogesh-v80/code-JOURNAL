// binary additon using string
// 

import java.util.*;

class BinaryAddition {
	public static String add(String a, String b) {
		String ans = "";
		if(a.equals("0") && b.equals("0")) return "0";
		int i = a.length() -1;
		int j = b.length() -1;
		int ca = 0;
		while(i >=0 || j>=0 || ca >0) {
			int d1 = (i >= 0) ? (a.charAt(i) - '0') : 0;        //  a.charAt(i) - '0' explained at the bottom*
			int d2 = (j >= 0) ? (b.charAt(j) - '0') : 0;

			int digit = 0;
			if(d1 + d2 + ca >= 2) {
				digit = (d1 + d2 + ca) % 2;
				ca = (d1 + d2 + ca) / 2;
			} else {
				digit = d1 + d2 + ca;
				ca = 0;
			}
			i--;
			j--;
			ans = digit + ans;
		}
		return ans;
	}
	public static void main(String args[]) {
// Your code goes here
		Scanner scn = new Scanner(System.in);
		String a = scn.nextLine();
		String b = scn.nextLine();
		System.out.println("The sum is: " + add(a,b));
	}
}





//  *   a.charAt(i) - '0'     

// In Java, characters are represented internally as Unicode values. 
// The expression `a.charAt(i)` retrieves the character at index `i` from the string `a`. 

// In the context of the provided code, the characters in the string `a` are
//  expected to represent digits in the range '0' to '9'. However, when a 
//  character is retrieved using `a.charAt(i)`, it is obtained as a Unicode character value.

// To convert the Unicode character value to its corresponding integer value, 
// the subtraction operation `'0'` is performed. In Unicode, the characters '0' to '9' 
// have consecutive integer values starting from 48 ('0') to 57 ('9').

// So, by subtracting the character '0' (Unicode value 48) from the retrieved character,
//  the code effectively converts the character representation of a digit to its corresponding integer value.

// For example, if `a.charAt(i)` returns the character '5', then `'5' - '0'` would evaluate to the integer value `5`.

// This conversion is necessary in the code to perform arithmetic operations 
// and manipulate the digits as integers rather than characters.
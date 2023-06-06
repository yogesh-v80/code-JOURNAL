// eg.  153 is armstrong number because 1^3 + 5^3 + 3^3 = 153   
// power is ^3 because there is three digits in 153

import java.util.*;
public class name{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();

		// int sum = 0, count = 0, temp = 0;
		// int lastDigit = 0, sqrdDigit = 0;

		// alternative declaration

		int sum, count, temp, lastDigit, sqrdDigit;
		sum = count = temp = lastDigit = sqrdDigit = 0;
// 
		temp = num;

		while(temp != 0){
			temp /= 10;

			count++;
		}	

		temp = num;

		// System.out.println(count);

		while(temp != 0){
			lastDigit = temp%10;
			sqrdDigit = (int)Math.pow(lastDigit, count);
			// System.out.println(sqrdDigit);

			sum = sum + sqrdDigit;

			temp = temp/10;
		}

		// System.out.println(sum);	

		if(sum == num)
			System.out.println("armstrong number");
		else
			System.out.println("not a armstrong number");

			
	}
}
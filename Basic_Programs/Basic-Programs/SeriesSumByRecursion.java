//  series sum in recursion way..... 
//  
//  1 + (1+2) + (1+2+3) ....... (n*(n+1))/2

import java.util.Scanner;
public class SeriesSumByRecursion{
	public static void main(String[] args) {

	
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter an Integer: ");
		int val = sc.nextInt();
		System.out.println(seriesSum(val));
		

	}


	static public int seriesSum(int n){

		if (n == 1) {
			return 1;
		}

		return n*(n+1)/2 + seriesSum(n-1);
	}
}
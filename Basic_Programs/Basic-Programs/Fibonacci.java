import java.util.*;
public class Fibonacci{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Fibonacci program... \n Enter number to print Fibonacci series : ");
		int N = sc.nextInt();

		int a = 0;
		int b = 1;
			int c;

		System.out.print(" Series is : " + a + " " + b + " ");
		
		for(int i = 1; i < N; i++)
		{
			c = a + b;
			System.out.print( c + " ");

			a = b;
			b = c;
		}
		System.out.println();

		
	}
}
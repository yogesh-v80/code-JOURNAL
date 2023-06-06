//  only valid for integer
//  it was my first try 
//  though use of strings would be better approach
import java.util.*;
public class PallindromeMyFirstTry{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("Enter size of number : ");
		int N = sc.nextInt();

		int[] ar = new int[20];
		System.out.println(" -- Pallindorme program --  \nEnter Integer number to check : ");

		int mid = (N/2)+1;
		// System.out.println(c);

		for(int i = 0; i<N; i++)
		{
			ar[i] = sc.nextInt();
		}

		int count = 0;
		
		for( int i = 0; i<= mid; i++)
		{
				if(ar[i] == ar[N - (i+1)]) {
				count++;

				}
		}

		count = count -1;
		System.out.println(count);

		if(count == mid){
			System.out.println("Number is Pallindorme");
		}
		else
			System.out.println("Number is not Pallindorme");
	}
}










/*


import java.util.*;
public class Pallindrome{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("enter size of number : ");
		int N = sc.nextInt();

		int[] ar = new int[20];
		System.out.println("Pallindorme program : \n Enter Integer number to check : ");

		int count = 0;
		int c = N/2 + 1;
		System.out.println(c);

		for( int i = 0; i<N; i ++)
		{
				ar[i] = sc.nextInt();
			

		}


		for( int i = 0; i<=c; i ++)
		{
				ar[i] == ar[N - (i+1)]
				count = count + 1;
		}

		System.out.println(count);
		if(count == c){
			System.out.println("Number is Pallindorme");
		}
		else
			System.out.println("Number is not Pallindorme");



		
	}
}*/
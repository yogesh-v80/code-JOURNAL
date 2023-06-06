import java.util.*;
public class PrimeFactorization{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();


		if(num == 1){
			System.out.println("1 is neither a prime number nor a composite number");
			return;
		}
		else if(num < 1){
			System.out.println("Entered number must be greater than 1");
			return ;
		}

		for (int t = 2; t*t<=num; t++) {

			while(num%t == 0 )
			{
				System.out.print(t + " ");
				num = num / t;
			}
		}

		if (num!= 1) 
			System.out.println(num);
		
		
	}
}




// another approach -- it is less efficient.

// import java.util.*;
// public class PrimeFactorization{
// 	public static void main(String[] args) {
// 		Scanner sc = new Scanner(System.in);
// 		int num = sc.nextInt();

// 		if(num == 1){
// 			System.out.println("1 is neither a prime number nor a composite number");
// 			return;
// 		}
// 		else if(num < 1){
// 			System.out.println("Entered number must be greater than 1");
// 			return ;
// 		}

// 		String factor = "";

// 		for (int i = 2; i<=num; i++) {

// 			while( num % i == 0 )
// 			{
// 				factor = factor + i + " ";
// 				num = num / i;
// 			}
// 		}

// 		System.out.println(factor);

// 	}
// }
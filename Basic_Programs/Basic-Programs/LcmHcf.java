import java.util.*;
public class LcmHcf{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter first number : ");
		int n1 = sc.nextInt();
		System.out.println("Enter second number : ");
		int n2 = sc.nextInt();

		// for ex. 12, 18  ->  LCM is 36, and GCD or HCF is 6
		
		int small, big;
		
		System.out.println("Entered pair of numbers is : " + n1 + " " + n2);
		
		if ( n1 < n2){

	    small = n1;
		big = n2;
		}
		else{

		small = n2;
		big = n1;
		}

	// System.out.println(small);
		
	// System.out.println(big);

		int factor = 0;
		
		for ( int i = small; i>= 1; i--){
			// System.out.println(i);

		// for greatest common divisor or highest common factor
		if((big % i == 0)&&(small%i == 0)){
		factor = i;
		 break;
		 }
		}
		
		System.out.println("GCD or HCF is : " + factor);

		int multiple = 0;
		
		// for lowest common multiple
		if (big%small == 0) 
			multiple = big;
		else
			for (int i = big ; i<= big*small; i++ ) {
				if ((i%big == 0)&&(i% small == 0)) {
					multiple = i;
					break;
				}
			}

			System.out.println("Lcm is : " + multiple);


		
		
	}
}
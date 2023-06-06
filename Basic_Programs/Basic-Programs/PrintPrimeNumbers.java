import java.io.*;

import java.util.*;
public class Main {
  public static void main(String args) throw Exception {
    Scanner scn = new Scanner(System.in);
    int low = scn.nextInt(); //taking lower bound input
    int high = scn.nextInt(); //taking upper bound input

    for (int n = low; n <= high; n++) {

      int count = 0;
      for (int div = 2; div * div <= n; div++) {
        if (n % div == 0) {
          count++;
          break;
        }
      }
      if (count == 0) // checks if count is 0

        System.out.println(n);
    }
  }
}



//  OR /////////


// import java.util.Scanner;

// public class PrintPrimeNumbers {
//     public static void main(String[] args) {
//         Scanner cc = new Scanner(System.in);

//         int n = cc.nextInt();
//         boolean isPrime = true ;

//         for (int i = 0; i < n ; i++ ) {
        	
// 	        for(int j=2; j*j <= i ; j++){
// 	            if((i%j) == 0){
// 	                isPrime = false;
// 	                break;
// 	            }
// 	        }

// 	        if(isPrime && i > 1) {
// 	        	System.out.print(i + " ");
// 	        }
// 			else {
// 				isPrime = true;
// 			}
//         }

//         System.out.println();

//     }
// }


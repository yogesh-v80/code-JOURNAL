// https://www.pepcoding.com/resources/online-java-foundation/getting-started/the_curious_case_of_benjamin_bulbs/topic

// You are given n number of bulbs. They are all switched off. 
//A weird fluctuation in voltage hits the circuit n times. In the 1st fluctuation, 
//all bulbs are toggled, in the 2nd fluctuation every 2nd bulb is toggled, in the 3rd fluctuation, 
//every 3rd bulb is toggled, and so on. You've to find which bulbs will be switched on after n fluctuations.

// Take as input a number n, representing the number of bulbs.

// Print all the bulbs that will be on after the nth fluctuation in voltage.

import java.util.*;

public class BulbproblemPep{

	public static void main(String[] args) {
    // write your code here  

		Scanner sc = new Scanner(System.in);
		int varr = sc.nextInt();


		for (int i = 1; i * i <= n; i++)
			System.out.println(i * i);
		
	}
}

  // Not efficient below code I made it complicated ... hehe...
  // coudn't able to do in one go with despite there is simple logic for perfect square as we can see in above code.

//   long temp = varr;
// // 	int count = 0;

// 	for(int i = 1; i <= temp; i++){

// 	    long root = (long)Math.floor(Math.sqrt(i));
// 	    if(root*root == i){
// 	        System.out.println(i);
// 	    }


// 	}

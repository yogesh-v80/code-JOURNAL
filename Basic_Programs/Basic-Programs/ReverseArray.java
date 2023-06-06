

import java.util.*;
import java.lang.*;
import java.io.*;
// reverse array solution


class ReverseArray {
	public static void main (String[] args) {
		//code
		
		Scanner cc = new Scanner(System.in);
		int size = cc.nextInt();

		int arr[] = new int[size];
		
		for(int i = 0; i<size; i++){
			arr[i]  = cc.nextInt();

		}
		
		int len = arr.length;
		for(int i = 0; i < len/2; i++){
			int temp = arr[i];
			arr[i] = arr[len-1-i];
			arr[len-1-i] = temp;
		}
		
		
		for(int i = 0; i < size; i++){
			System.out.print(arr[i] + " ");
		}
		System.out.println();
		
	}
}
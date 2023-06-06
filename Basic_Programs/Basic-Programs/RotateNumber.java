// Rotate number r by k digit 
import java.util.*;
public class RotateNumber{
	public static void main(String[] args) {

		System.out.println("Rotate number r by k digit ... ");
		Scanner sc = new Scanner(System.in);
		System.out.println("enter Number to rotate ");
		int r = sc.nextInt();
		System.out.println("Rotate by: ");
		int k = sc.nextInt();

		int temp = r;
		int nod = 0;
		while(temp>0)
		{
			temp = temp/10;
			nod++;
		}

		k = k%nod; // this logic
		// System.out.println("k "+ k);
		if(k<0)
		{
			k = k+nod;  // this logic
		}

		int div = 1;
		int mult = 1;

		for(int i = 1; i <= nod; i++)
		{
			if ( i <= k)
				div = div*10;
			else
				mult = mult*10;  // this logic
		}
		// System.out.println("div "+ div);
		// System.out.println("mult " +mult);

		int q = r/div;
		int v = r%div;

		int rot = v*mult + q;
		System.out.println(rot);

	}
}




/// another approach


// Rotate number r by k digit 
import java.util.*;
public class RotateNumber{
	public static void main(String[] args) {

		System.out.println("Rotate number r by k digit ... ");
		Scanner sc = new Scanner(System.in);
		System.out.println("enter Number to rotate ");
		int r = sc.nextInt();
		System.out.println("Rotate by: ");
		int k = sc.nextInt();

		int temp = r;
		int len = 0;
		while(temp != 0){
			temp = temp/10;
			len++;
		}

		// System.out.println(len);

		
		k = k % len;
		k = k + len;
		// System.out.println(k);

		int num = 0;
		
		while(k != 0){
			num = r % 10;
			r = r/10;

			num = num * (int)(Math.pow(10, len-1));

			r = r + num;
			// System.out.println(r);
			k--;

		}

		System.out.println(r);


	}
}
import java.util.*;
public class PrintDigits{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();

		int temp = n;
		int power = 1;
		int digit = 0;

		while ( temp >= 10)
		{
			temp /= 10;
			power *= 10;
		}

		temp = n;

		while (power!= 0)
		{
			digit = temp / power;
			System.out.println(digit);
			temp %= power;
			power /= 10;
		}

		
	}
}
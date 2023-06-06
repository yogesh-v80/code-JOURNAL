import java.util.*;
public class Leapyear{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print(" It is a leap year program... \n \n  Enter year : ");
		int year = sc.nextInt();

		if(((year%4 == 0) && (year%100 != 0)) || (year%400 == 0) )
			System.out.println(year + " is a Leapyear");
		else
			System.out.println(year + " not a Leapyear");
	}
}
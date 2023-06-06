import java.util.*;
public class name{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int v = 1;
		for (int i = 1; i<=n ; i++ ) {
			v = i*v;
		}

		System.out.println(v);
		
	}
}
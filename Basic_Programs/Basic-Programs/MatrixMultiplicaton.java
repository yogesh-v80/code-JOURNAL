// import java.util.*;
public class MatixMultiplicaiton{
	public static void main(String[] args) {
		// Scanner sc = new Scanner(System.in);
		int n = 3;

		double[][] a = new double[n][n];
		double[][] b = new double[n][n];
		double[][] c = new double[n][n];


		for (int i = 0; i< n; i++) {
			for (int j = 0; j < n ; j++ ) {

			a[i][j] = i+3;
			b[i][j] = i+2;

			c[i][j] = 0;
			
				
			}

		}

		// Main logic here 

		for (int i = 0; i < n ; i++) {
			for (int j = 0; j < n ; j++ ) {

				for (int k = 0; k < n ; k++ ) {
					c[i][j] += a[i][k]*b[k][j];
				}

				System.out.print("  " + c[i][j]);
				
			}
			
			System.out.println();
		}
		
	}
}
// Java implementation of the above approach
import java.util.*;

class InnerTriangle{

// Function to print the pattern
static void printPattern(int n)
{

	int i, j;

	// Loop for rows
	for (i = 1; i <= n; i++) {

		// Loop for column
		for (j = 1; j < 2 * n; j++) {

			// For printing equal sides
			// of outer triangle
			if (j == (n - i + 1)
				|| j == (n + i - 1)) {
				System.out.print("* ");
			}

			// For printing equal sides
			// of inner triangle
			else if ((i >= 4 && i <= n - 4)
					&& (j == n - i + 4
						|| j == n + i - 4)) {

				System.out.print("* ");
			}

			// For printing base
			// of both triangle
			else if (i == n
					|| (i == n - 4
						&& j >= n - (n - 2 * 4)
						&& j <= n + n - 2 * 4)) {

				System.out.print("* ");
			}

			// For spacing between the triangle
			else {
				System.out.print(" "
					+ " ");
			}
		}
		System.out.print("\n");
	}
}

// Driver Code
public static void main(String[] args)
{
	int N = 17;

	printPattern(N);
}
}

// This code is contributed by sapnasingh4991

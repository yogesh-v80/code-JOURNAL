// Java Program to print the
// solution of the series
// f(n)= (1) + (2*3) + (4*5*6)
// ... n using recursion

class SeriesSumRecur
{
	
	/**
	* Recursive method for finding
	* sum of series
	*
	* @param calculated number of terms
	* till which sum of terms has been
	* calculated @param current number of
	* terms for which sum has to be calculated.
	* @param N Number of terms in the function
	* to be calculated @return sum
	*/
	
	static int seriesSum(int calculated,
						int current,
						int N)
	{
		int i, cur = 1;
	
		// checking termination condition
		if (current == N + 1)
			return 0;
	
		// product of terms till current
		for (i = calculated; i < calculated +
								current; i++)
			cur *= i;
	
		// recursive call for adding
		// terms next in the series
		return cur + seriesSum(i, current + 1, N);
	}
	
	// Driver Code
	public static void main(String[] args)
	{
		// input number of
		// terms in the series
		int N = 5;
	
		// invoking the method
		// to calculate the sum
		System.out.println(seriesSum(1, 1, N));
	}
}

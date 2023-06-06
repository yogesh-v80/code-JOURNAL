public class Count{

	static int CountDigit(long n){
		int count = 0;
		while (n!= 0){
			n = n/10;
			// ++count;
			count++;
		}
		return count;
	}
	

	static int CountDigit2(long n){
		if(n/10==0)
			return 1;

		return 1 + CountDigit2(n/10);
	}

	// log 10 based
	

	static int CountDigit3(long n){
		return (int)Math.floor(Math.log10(n)+ 1);
	}


	// by converting int to string and then get 

	public static void main(String[] args) {
		long n = 368689;
		System.out.println("Method I : "+ CountDigit(n));
		System.out.println("Method II : "+ CountDigit2(n));

		System.out.println("Method III : "+ CountDigit3(n));

	}
}
public class Sumofdigit{
	public static void main(String[] args) {
	
		int num = 245;
		int n = 10;
		int digitSum = 0;
		
		while(num!=0){
			int digit = num % n;
		
			digitSum = digit + digitSum;
			
			num = num/10;
		}

		System.out.print(digitSum);
	}
}
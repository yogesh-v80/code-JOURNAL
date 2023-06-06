import java.util.Scanner;

public class DigitsReversePrint {
    public static void main(String[] args) {
        Scanner cc = new Scanner(System.in);

        int n = cc.nextInt();
     
        int lastDig = 0;
        while(n > 0) {   // initial zero is not included in reverse print
        	
        	lastDig = n % 10;
        	System.out.println(lastDig);
        	n = n/10;
        }


    }
}


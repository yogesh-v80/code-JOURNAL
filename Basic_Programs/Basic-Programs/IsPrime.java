import java.util.Scanner;

public class IsPrime{
    public static void main(String[] args) {
        Scanner cc = new Scanner(System.in);

        int num = cc.nextInt();

        boolean isPrime= true ;

        // if(num<2) isPrime = false;
        // else isPrime = true;

        // System.out.println(i <= num/i);

        for(int i=2; i*i <= num ; i++){
            if((num%i) == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime && i > 1) System.out.println("Prime");
        else System.out.println("Not Prime");
    }
}








// Prime number first created by me 
// not efficient
//30 june 2022  21:50
// dicussed with rachit on this problem
import java.util.Scanner;
public class Prime {
    public static void main(String[] args) {

        Scanner cc = new Scanner(System.in);

        int a = cc.nextInt();
        cc.close();

        System.out.println("Entered Number is : " + a );
        
        // int c = (int)Math.sqrt(a);

        //b*b < a   means a is root of b  .... concept introduced by rachit.

        for(int b=2; b<a; b++){     // condition is not efficient
            if((a%b) == 0  ){
                System.out.println("Number is not prime ");
                return;
            }        
        }
    
        System.out.println("Number is prime");



        // if(a%2 == 0)
        // System.out.println("even number");
        // else
        // System.out.println("odd number");
        
    }
}

















///////////////

// it's gonna evalute according to their
// correspondence unicode characters 
// minus arith. evaluation.
a.charAt(i) - '0'  // it will return integer

///////////////

// leap year logic

((year%4 == 0) && (year%100 != 0)) || (year%400 == 0)


///////////////////

 int subSets = (int)Math.pow(2, ar.length);
 for (int i = 0 ; i < subSets; i++) {

       int temp = i;
       String set = "";

       for (int j = ar.length - 1 ; j >= 0 ; j-- ) {

          int r = temp % 2;
          temp = temp / 2;
          
          if(r == 0)
             set = "-\t" + set;
         else
             set = ar[j] + "\t" + set;

     }
     
     System.out.println(set);


//////////

	int[] a = new int[10];
	for (int i = 0; i < 10; i++)
		a[i] = 9 - i;
	for (int i = 0; i < 10; i++)
		a[i] = a[a[i]];
	for (int i = 0; i < 10; i++)
		System.out.println(i);

//////////

	System.out.println(1 + 2 + "3");       //  33
	System.out.println(( 0 + 15 ) / 2);    //  7
	System.out.println(1 == 1);            //  true


////////// //Fibonacci number

	int f = 0;
	int g = 1;
	for (int i = 0; i <= 15; i++)
	{
		System.out.println(f);
		f = f + g;
		g = f - g;
	}


///////////converting decimal number into binary

	String s = "";
	int N = 5;
	for (int n = N; n > 0; n /= 2)
		s = (n % 2) + s;

	System.out.println(s);


////////////

for( ; ; ){                    // infinite loop
System.out.println("dobby");
}


/////////////////
 
for( int i = 0; ; i++ ){       // infinite loop
System.out.println("dobby");
}


/////////////////

for( int i = 0;  0 ; i++ ){    //error: int cannot be converted to boolean
System.out.println("dobby");   //but  valid in c++, javascript, 0 is false in those lang.
}



/////////////////

String s1 = "abc";
String s2 = "abc";

System.out.println("s1 == s2 is:" + s1 == s2);   //false, related to object referencing.



/////////////////

class Test{

	int num;
	//error: non-static variable num cannot be referenced from a static context

	public static void main(String[] args) {

		System.out.println(num);   

	}
}


/////////////////
class Test{

	public static void main(String[] args) {

		int a;                  // error: variable a might not have been initialized

		System.out.println(a);      
	
	}
}


/////////////////
class Test{

	static int in;

	public static void main(String[] args) {

		System.out.println(in); // 0   int have defalut value 0 .  
		//there num declared at class level, static also stated in statement
	

	}
}

/////////////////

class Test{
  
	static int in;
	static double db;
	static String str;
	static char chr;
	static boolean bool;


	public static void main(String[] args) {

		System.out.println(in);    // 0
		System.out.println(db);    // 0.0
		System.out.println(str);   // null
		System.out.println(chr);   // ""      (an empty character)
		System.out.println(bool);  // false

		// above comments is default values of these primitive types.
	}

}



/////////////////

class Test{
 
	public static void main(String[] args) {

		byte x = 127;          // byte range -128 to 127 

		x++;
		System.out.println(x); //-128
		
		x++;

		System.out.println(x); // -127
	}

}


/////////////////

class Test{
 
	public static void main(String[] args) {

		String str1 = new String("It is a string");
		String str2 = new String("It is a string");
		String str3 =  "Another";
		String str4 =  "Another";
	}

}

//How many object will be created here?
// three objects.  str3 and str4 will refer to the same object.
// os there is four object references and 3 objects



/////////////////
		int t = 1;
		
		if (t++ && (t == 2))          
	// t++ is not going to int. in if there should be a conditon (boolean)
    //error: bad operand types for binary operator '&&'
      
			System.out.println("k");
		else
			System.out.println("o");




/////////////////

		int i = 70;

		if(i++ == i)     // i++ first return 70 and then increment and i will be 71  //false
			System.out.println(i + " Yoda");
		else
			System.out.println(i + " groot");
		

		int j = 40;

		if(++j == j)    // ++j will return 41 and j will be 41    // true
			System.out.println(j + " namastey");
		else
			System.out.println(j + " hello");







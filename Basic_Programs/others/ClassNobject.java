class A {
	// instance variable
	 int age = 22;
	private String name = "john";


	// method is behaviour of class
	public void display(){
		System.out.println("Name: "+ name );
		System.out.println("Age: " + age );
	}


//members of class or class memebers
}


class B extends A{


	public static void main(String[] args) {

		   A info = new A();   // object of type A 


		   A bb = new A();


		   info = bb;    // now info will refer to bb object

		   bb.age = 88;  

		   System.out.println(info.age);



	}
}
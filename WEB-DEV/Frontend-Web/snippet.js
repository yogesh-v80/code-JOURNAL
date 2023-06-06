





























/*
const express = require('express');

var app = express();    
app.listen(Port Number, "Your IP Address");
// e.g.
app.listen(3000, "192.183.190.3");
*/


/*


An arrow function does not have its own binding of this which is considered as its main advantage. Also, it does not have binding to super, arguments or new.target keywords which means that they are not suitable as constructors. By the lack of this, the function ends up finding the this from the enclosing scope.

function retryCall(phoneNumber) {
  this.counter = 0;

  setInterval(() => {
    this.counter++; // 'this' refers to the retrycall object
  }, 1000);
}

*/

/*

Re-declaring the same variable will result in reference error
let x = 1;
let x = 2; //reference error

Declaring a variable without initializing it will result into a reference error instead of undefined
console.log(x); // reference error
console.log(y); //undefined

let x = 1;
var y = 2;
*/

/*

function foo() {
  let x = 1;
  {
    let x = 2; //not the same variable
  }
}

*/

/*

var x = 1;
let y = 2;

console.log(this.x); // global
console.log(this.y); // undefined
*/

/*
function getPhoneNumber(addressBookObj) {
   return addressBookObj.phoneNumber;
}

getPhoneNumber({name : 'John', age: 25, phoneNumber : 223344}); //return the 223344 phone number value

//using destructuring to access only one property of the object
const getPhoneNumber = ({phoneNumber}) => return phoneNumber;

getPhoneNumber({name : 'John', age: 25, phoneNumber : 223344}); //returns phoneNumber value

*/


/*


//array destructuring
let [a, b] = ['hello', 'world'];
a = 'hello';
b = 'world';

//object destructuring
let { name } = { name: 'john', age: 28 };
name = 'john';
age; // undefined


*/


/*
<select name="category" id="category"  >
			
		<% for(let category in categories) {  %>
			<h1> <%= category %> </h1>
			  <option value=" <%= category %> ">  <%= category.toUpperCase() %>  </option>
			<% } %>
		</select>



*/


/*
 //there comments is and array with having objects. objects key were id, username, comment
     const {id} = req.params
	const comment = comments.find(c => c.id === parseInt(id))
	//logic is if we match any c.id we get the whole one object in array.


*/





/*function check() {
	// console.log(this)
	const ob1 = {r:1, g: 2, b: 3}
	
	ob1.rrr1 = function(){
		console.log(this)
		// there this going to refer the ob1 object
		
	}ob1.rrr2 = () => {
		console.log(this)
		// there this going to refer the window object
	}

	return ob1;
}

*/



///////
///

/*
function Color(r,g,b){
	this.r = r;
	this.g = g;
	this.b = b;
	console.log(this)
}

// if we do 
// Color(22,33,44)
// then there this will refere to the window object

//but if we do

// new Color(22,33,44)
// then it's going to create Color object and 
// this will refer to the Color object
// there color constructor implicitly will be created


*/










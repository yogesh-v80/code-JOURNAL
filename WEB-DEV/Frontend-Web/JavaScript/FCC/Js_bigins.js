// in-line comments

/* 
multiline comments
*/


//js code run top to bottom


/*Data Types:
undefined, null, number, string, object, boolean, symbol (immutable primitive value)
*/

//undefied vs null ?


//variables - like a box, we can fill it with anything, storage unit

/*
var myName = "joe"   //older way

let youName = "foe"

const pi = 3.14  //there pi can't be changed or re-initialized

*/


/*
let a;  //declaration

let b = 2;   //declaration and assignment in one line

console.log(a)  // it will show null
a = 7;

b = a;

console.log(a)   //allow to see things in console
*/

/*identifiers or name of variables and function is case-sesitive
case sensitive means Capitalization matters
js follow camle-case writing convention*/


//increment and decrement happens like in other language

/*
var product = 2.0 * 2.5  // product will have 5 not 5.0 (like in java)

var quotient = 4.4/2.0   // 2.2

*/

// += also works in js


/*
var myStr = "I am a "double quoted" stirng inside "double quotes"" 
//there we can't put double quote inside double code in this way
//for this we have to use \"   which escape sequence

var myStr = "I am a \"double quoted\" stirng inside \"double quotes\"" 
//now there \" will be treated as double quote;

console.log(myStr)

*/


/*var myStr = '<a href="#link" target="_blank"> Link </a>'
//it will work

*/


/******

\' 
\\ (backslash)
\n
\r (carriage return)
\t
\b
\f

******/

/*
//concatination with the use of + operator
var outStr = "Hello "
outStr += "World"
// it will be "Hello World"

console.log(outStr.length)
// there outStr.lenght return the length of string (space included in lenght)
*/


/*
//for access the character in strings

var firstLetter = ""
var name = "Ada"

firstLetter = name[0]
console.log(firstLetter)*/

/*
//String Immutability - cannot be altered once it created

var str = "jello world"
str[0] = "H" //not possible
str = "Hello world"  //possible*/


/*
var letter = "world cup"

//last letter in string
var lastLetter = letter[letter.length - 1]

//third last letter in string
var lastLetter = letter[letter.length - 3]
*/

/*
//Arrays 
// in array ments can be any data type even array itself (multi-dimenssion array)
var ourArray = [ "john", 23]

//mutli D-array

let multiDarray = [ ['the universe', 33], ['everything', 1010], [2,34,333], [[1,2,3], 12, 23] ]

//access array data 
let access = ourArray[0]  // john

//we can modify array
ourArray[1] = "ola"
console.log(ourArray)

//access multi D-array
console.log(multiDarray[0])
console.log(multiDarray[0][0])
console.log(multiDarray[3])
console.log(multiDarray[3][0])
console.log(multiDarray[3][0][0])
console.log(multiDarray[3][0][2])
console.log(multiDarray[3][1])
console.log(multiDarray[3][2])
*/



/*

//useful methods for array

let myArray = ['elo', 2, 33]

//push()  adds in last of array
myArray.push(["happy"]) //pushed array into array
console.log(myArray)
myArray.push('jj', 'joe') //
console.log(myArray)

//pop()   remove items in array from last   (no arguments)

let poped = myArray.pop()
console.log(poped)
console.log(myArray)

//shift()  first element at the start of the array  ( no arguments)
//unshift() add element at the begining of the array

*/

/*
//nested array or muti D-array or array of array

let myList = [['cereal', 3], ['milk', 2], ['banana', 3], ['juice', 2], ['eggs', 10]]

*/



/*
//passing arguments in function

function myFunc(a,b)  //a, b is parameter
{
	console.log(a - b)
}

//calling function 
myFunc(10,2)  //10, 2 is argument
*/




/*
//golabal scopes - means can be seen anywhere in code
//variable declared outside of the function is having globle scope

//local Scopes - only visible in a scope where it is declared .. like in function 

//only var varible have globla scope at every point

if(true)
{
	var b = 3;
	let a = 2;
	console.log(a)  // a is visible here 
	console.log(b)
}

console.log(b)  // b is visible ( because of var)  note: but it won't be visible in functions
console.log(a)  // there a is not visible */


/*
function fun1()
{
	opps = 7  // this is valid and scoped to this function only
	console.log(opps)
}

fun1()

console.log(opps)   // opps not visible here
*/


/*
function fun2()
{
	var b = 33
	console.log(b)
}

fun2()

console.log(b) // not visible 
*/


/*
var outerWear = "T-shirt" // global variable 

function outfit()
{

	return outerWear
}

console.log(outfit()) // T-shirt

*/


//but in below code

/*
var outerWear = "T-shirt" // global variable 

function outfit()
{
	var outerWear = "sweater"  //local variable note: re-declaration possible in this scope

	return outerWear
}

console.log(outfit()) // sweater

console.log(outerWear)  // T-shirt
*/



/*
num = 3 //valid

console.log(num)  // 3
*/



/*
// undefined value returned

let sum = 0

function addThree()
{
	sum = sum + 3;


}

console.log(addThree())  // undefined .. because we didn't returned anything

*/


/*
function nextInLine(arr, item)
{
	arr.push(item)
	return arr.shift()
}

var arr = [1,2,3,4,5]

console.log("before: " + JSON.stringify(arr))
console.log(nextInLine(arr,7))
console.log("after: " + JSON.stringify(arr))

// JSON.stringify  - converts array into string and returns it.. but don't changes the original array
*/


/*
//strict Equality Operator   ===

//it doen't do the type conversion ( like double equal ( == ) do)

3 === 3  // true

3 === '3' //false

3 == '3' // true  bcs string is converted to number

9 != '9' // false .. not equal also do type conversion 

9 !== '9' // true
*/


/*
&&   AND operator
||    OR operator
*/


/*
// switch case like in java .. it also have default:
// there value checks by the strict equality

// if case statement don't have break  then it will keep going

function seq(val)
{
	let ans = ""

	switch(val)
	{
		case 1:
		case 2:
			ans = "negligible"
		case 3:
		 	ans = "low"
		 	break

		case 4:
		case 5:
		case 6:
		 	ans = "medium"
		 	break

		case 7:
		case 8:
		case 9:
		 	ans = "high"
		 	break
	}

	return ans
}


console.log(seq(1))  // low
console.log(seq(8))  // high
console.log(seq(6))  // medium

*/


/*
function Logic(a,b)
{
	// if(a>b)
	// 	return true
	// else 
	// 	return false

	// besides this we can simply return

	return a>b
}


console.log(Logic(4,3))
*/

/*
math functions
Math.round
Math.pow
Math.random
Math.floor
Math.ceil
Math.sqrt
*/



/*
let count = 0

function cc(card)
{
	switch(card)
	{
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		 	count++
		 	break
		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			count--
			break
	}

	let holdbet = 'Hold'
	if(count > 0)
		holdbet = "Bet"

	return count + " " + holdbet
}


cc(2)
// cc(3)    // by these both it will be hold
// cc(5)    // by these both it will be hold
cc('K')
cc(7)
cc('K')
cc('A')

console.log(cc(4))

*/


//Objects

// same as array 
// but the differece is .. array used indexes and Objects uses key or properties value pair comma separated
// key or properties have colon just after it
// properties can have any data type even object or function also


/*
//creating objects

let myObj = {
	"name": "eyva",
	"legs": 2,
	"tails": 1,
	"friends": [1,2,3],
	ola: "bhola" ,  // valid
	12: "twelfth"
}

//access object properties by dot notation 

console.log(myObj.name)
console.log(myObj.ola)
console.log(myObj.friends[1])

//access object properties by [] brackets
// having properties name inside the [] 

console.log(myObj["friends"])
console.log(myObj["ola"])

let player = 12

console.log(myObj[player])
console.log(myObj.player)   // undefined

*/


/*
//update or add new properties in object

let random = {

	num: 2,
	name: "joe",
	triplet: [4,3,5],
	"world cup": "Arg"
}
// console.log(random)


random["num"] = 5

random.name = "osbon"

random.triplet[1] = 5


console.log(random)

// console.log(random.glove box)
//glove box has space so we can't access it with the dot notation 
// we have to use the bracket for this
console.log(random["world cup"])
//it's valid


//deleting

delete random.name

console.log(random)


//hasOwnProperty("property name here") .. it returns true or false
console.log(random.hasOwnProperty("triplet"))
console.log(random.hasOwnProperty("name"))


//Nested Object

let myStorage = {
	"car": {
		"inside":{
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside":{
			"trunck": "jack"
		}
	}
}

let content = myStorage.car.inside["glove box"]

console.log(myStorage["car"]["inside"]["glove box"])   //valid

console.log(content)

*/



/*
// iterate through array

let ar = [1,2,3,4,5,6]
let arc = " "
for(let i = 0; i< ar.length; i++){

	arc += ar[i] + " "

	console.log(ar[i])

}

console.log(arc)



let mulD = [[2,3],[4,6], [2,9,7]]

let a = 1

for(let i = 0; i < mulD.length; i++){
	for(let j = 0; j < mulD[i].length; j++){
		a *= mulD[i][j]
	}
}

console.log(a)

*/



/*
console.log(Math.floor(Math.random()*20))
//we get random between 0 and 19

console.log(Math.floor(Math.random()*20) + 1)
//we get random between 0 and 20


// generate random number within a range

let max = 15
let min = 5

let random = Math.floor(Math.random()*(max - min + 1)) + min
console.log(random)

*/

/*
// parseInt() - takes string and return integer in base 10
// if string is not convertable to integer then it will return NAN

console.log(parseInt("44"))  //44 
console.log(parseInt("44", 10))  //44
// there 10 is for base
console.log(parseInt("1010", 2))
// there base 2 is converting in base 10 
// there we have to tell that it is base 2 otherwise it will return the same number
console.log(parseInt("1010"))
console.log(parseInt("101kk0")) //101
console.log(parseInt("1ggg010")) //1
console.log(parseInt("a10r0"))  //NaN
//will return 1010

*/


/*
//Ternary 
//condition ? statement-execute-if-true : statement-execute-if-false
 a = b = 2
let tern = a === b ? true : false
console.log(tern)

let tern2 = a === b  // anotther way to write the previous statement
console.log(tern2 )


let tern3 =  a>b?console.log("a is greater"):console.log("b is greater")
console.log(tern3)  //there it will also return the undefined ... idk why


let tern4 =  a>b?"a is greater":"b is greater"
console.log(tern4)  //no undefined returned this time


//multiple ternary 
function checkSign(num)
{
	return num > 0 ? "positive" : num<0 ? "negative":"zero"
}

console.log(checkSign(-10))
console.log(checkSign(-0))
console.log(checkSign(5))

*/


/*
// var vs let 
//let does not let you declare same variable twice but var does let you
// or we can say var allow you declare same variable within the same scope but let keyword not allow that
//let is always confined to its scope
//var have global scope and local scope within a function


var catName = "lusi"
var catName = "chanchu"
// no error here

let catName = "ola" // error
console.log(catName)

//or

let a = 2
let a = 3
// error.. invalid
//but 
let b = 2
b = 2
//valid because in second time we just assigning new value


*/


/*a = 2

console.log(a)

function fun(){
"use strict";
a = 4
return a

}
console.log(a)

console.log(fun())

console.log(a)
*/





/*
function checkScope(){
	"use strict"

	// let i = "function scope"
	// var i = "function scope"


	if(true){
		// i = "block scope"
		// let i = "block scope"
		var i = "block scope"

		console.log("Block scope: " + i)
	}

		console.log("function scope: " + i)

	return i

}

checkScope()

// console.log(checkScope())

*/



/*
//const 
//can't change in variable once declare with const
//or we can't reassign it 

// const a = 2
// a = 3
// error... invalid

// const with array

const s = [1,2,3]

function edit(){
	"use strict"

	// s = [4,5,6] 
	//invalid

	//but 
	s[2] = 7
	//valid
	//we can update on indext 
	// but we can't reassign the whole array
}


console.log(s)
edit()
console.log(s)
*/


/*
//Object.freeze(obj_name)        use to prevent mutation or change
//prevent object mutation by Object.freeze(obj_name)

function freezObj()
{

	"use strict"
	//when we comment out just above line the the ex (exception or error ) won't log on console
	const Math_CONSTANT	= {
		PI: 3.14 
	}

	Object.freeze(Math_CONSTANT)

	try{
		Math_CONSTANT.PI = 99
	} catch (ex){
		console.log(ex)
	}

	return Math_CONSTANT.PI
}

const PI = freezObj()

console.log(PI)
*/


/*
let fun = function(){
	return new Date()
}
// anonymous function bcs it don't have name 

*/

/*
//arrow function
let fun = () => {
	return new Date()
}
*/


/*
//more shorter than before
//when we returnin only one value here we don't need return here and no braces
let fun = () => new Date();  // same as before
*/

/*
//parameter in arrow funciton 
//concate()  function
let myConcate = (arr1, arr2) => arr1.concat(arr2)

console.log(myConcate([1,2], [4,6,7]))
*/


//higher order arrow function

// map(), filter(), reduce()



/*
printy() //it will work here also

function printy()
{
	console.log("pppp")
	console.log("pppp")
	console.log("vv")

	// return "ola"
}

// printy()
// console.log(printy()) 

*/



//############################ function #######################


/*

//functions
//in javascript function treated like a value .. we can pass it, return it, assigne it to variable


function add(x,y)
{
	return x + y
}
//there function name is add
//x,y is parameter and 2,3 is argument where x have 2 and y have 3
console.log(add(2,3))



//it is an anonymous function
let ADD = function (x,y){
	return x,y
}
//there function don't have name 
console.log(ADD(3,3))


//return keyword stops the execution of function or after return keyword function don't execute any statement

//function scope
//block scope
//lexical scope - refer to the area where the definition of variable exist


//!Higher order function
//when function passed to the another function as a parameter
//it accept function as a parameter
//return a function 


//accepting funciton as a parameter
function fun1(oru){
	oru()
	oru()
}

function printu()
{
	console.log("in printu")
}

// fun1(printu())      //invalid
fun1(printu)     //only name has to pass


//returning a function 

function myfunc(){
	let rand = Math.random()

	if(rand>0.5)
	{
		return function (){
			console.log("greater than 0.5")
		}
	} else {
		return function(){

		alert("less than 0.5")
		}
	}
}

// console.log(myfunc())   //it won't showing the return value or return function in myfunc()
// myfunc() //this won't showing the return value
//we have to save this in another variable 
let myf = myfunc()

myf()


*/


/*
function add(x,y){
// return x + y
console.log("lsdj")
}

let ad = add()
// add(2,3)
// console.log(add)

console.log(ad(3,3))

*/

/*
function heya(){
	console.log("aft")
}

heya()     //won't show undefined and show aft
let h = heya() //won't show undefined and show aft
console.log(h) //will show undefined because there is no returned value in function 

*/

/*
function ho(){
	console.log("vo")
	return "kk"
}

let g = ho()   
//at this point won't show undefined and shows only vo
//because there is returned value exist in the function 

console.log(g)     //now it wiil show the return value ...
// ho() returned value which is string kk is saved in variable g and then logged on console

*/


/*
function vyom(){
	return function(){
		console.log("func in func")
	}
}

// vyom()    //nothing will show on console... because there is only returned value

// console.log(vyom())   //it will return only the function not the executed statement of returned function 
//it won't return the value of function rather it return the function itself as value of vyom() function

//we have to save this in another variable

let vy = vyom()

// console.log(vy)    // it is same as console.log(vyom())

//but if we do
console.log(vy())   
//it will return the value func in func and undefined 
//because we din't difined any return value inside returned function


*/



/*
function numBetween(min,max){
	return function(num){
		return num>=min && num <= max
	}
}


let between = numBetween(3,10)

console.log(between(5))    //return
console.log(between(22 ))   //false


*/


//till now it all was related to returning function 


//function continues.....

/*
// method vs function 
// function which is used with dot operator with array, string or object is method

console.log([2,3,4,5].indexOf(3))
//there indexOf is a method ... or built-in method 

//method can be function but function is not necessarily a method

*/



/*
//rest operator   ... (three dots)
//it allows to have any number of argument


let sum = (function(){
	return function sum(...args){
		let j = ""
		for(let i = 0; i < args.length; i++){
			j+=i
		}
		return j
	}
})()

console.log(sum(1,2,3,4))
console.log(sum(5,6,8,9,0,2,4,6))

//there we passing the variable numbers of argument

*/


/*
//spread operator 
//looks like the rest operator ... (three dots)

let arr = [1,2,3]
let arr2 = [7,8]

// arr = arr.concat(arr2)

nar = [...arr, ...arr2]

// console.log(nar)

// nar = arr
// 
// nar.push(99)

// console.log(arr)   // note: arr will also be affected

// console.log(nar)  

// but if we use spread operator

nar = [...arr]

nar.push(77)

console.log(arr)  // this time it won't change because we used spread operator
console.log(nar)

*/


/*
let av = [ 1,27,4,-1]

console.log(Math.min(av))     //NaN
console.log(Math.min(...av))  // -1
  
*/



/*
//Destructing assignment

let myObj = {
	name: 'Joe',
	num: 4,
	greet: "hello"
}


//one way to assign it 

let x = myObj.name
let y = myObj.num
let z = myObj.greet

// destructing way...

const { name:a, num:b, greet:c} = myObj
//name's value goen in a, num's value goes in b and likwise greet's value in c
console.log(a + b + c)



function fun(obj){

	'use strict'

	let { num: n} = obj
	return n
}

console.log(fun(myObj))

*/


/*

//destructing assignment for nested object
let oz = {
	today: { date: 31, year: 2022, month:"December"},
	tomorrow: { date: 1, year: 2023, month:"January"}
}

function fun(ola){

	"use strict"
	
	// let { month:n} = ola.tomorrow
	//another way to write it
	let { tomorrow:{ month:n} } = ola
	

	return n
}

console.log(fun(oz))
*/



/*
//destructing assignment in array


let [x,y, , z] = [1,2,3,4,5,6]

console.log(x,y,z)

*/

/*



// let a = 3, b = 9  //it will show error
let a = 3, b = 6;

(() => {
	"use strict"

	[a, b] = [b, a]

})();

console.log(a)
console.log(b)

// desired output was a = 6, b = 3
// but it didn't worked out 
// puzz 

*/




























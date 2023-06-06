//this keyword
// to access the property on the same object
/*
let cat = {
	name: "trila",
	color: "white",
	breed: "i don't know",
	meow(){
		console.log(this)
		console.log(`${this.name} says meowwww`)
	}
}


// let billi = cat.meow
*/

/*

//try and catch
//deal with error or exceptions
//upredictable things can be happen so try and catch help in that
//it don't let terminate the program if in between error occurs
//we apply it on the code where error might occur
//usefull in asycn function, express 



// hello.toUpperCase()   // will show error - hello not defined

// but if we do


// try{
// 	hello.toUpperCase()
// }

//still it will show error - missing catch or finally after try


// try{
// 	hello.toUpperCase()
// } catch{
// 	console.log("error!")
// }



function yolo(msg)
{
	try{
	return msg.toUpperCase().repeat(3)

} catch(e){
	// console.log(e)    //it will log the error
	console.log("please pass the string")
}
}
*/



//built-in function of array
//forEach()
//filter()
//find()
//reduce()
//map()



//forEach()

// let ar = [1,2,3,4,5,6,7,8,9]

// function print(element)
// {
// 	console.log(element)
// }

// print(ar)  // it will print the whole array as it is but not the each element

// print(ar[0])
// print(ar[5])
// print(ar[3])
//these will log the element at the given index


// ar.forEach(print)    //it will log each ar element on the console
//there ar.forEach will extract the ar element one by one and will pass it as a parameter of print function   


// another way to document

// ar.forEach(function(el){
// 	if(el%2==0)
// 	console.log(el)
// })
//there is a callback (function inside a function)


//with for loop
//it is more popular than forEach
// for(let el of ar)
// {
// 	console.log(el)
// }



//map()
//usefull when we need a portion of a data
//and want to make a new copy of array with some contraints
//it accept callback and run callback on every element

// let ay = [1,2,3,4,5,6,7,8,9]

// const nay = ay.map(function(num){
// 	return 2*num
// })


/*
//we can't do 
function (x){
	console.log(x)
}

//we have to add the name 
function strp(x){
	console.log(x)
}

//strp name is requred

//but when we do like

const myfun = function (x){
	console.log(x)
}

//there the name of function is not required
*/

/*

Arrow funciton  () => {}
more compact than the regular function 
useful in callbacks
used to create function expresssion

const add = (x,y) => {
	return x + y
}

to run it 
add(5,4)
as we can see in the just above arrow function we don't need to specify the function keyword


const add = x,y => {
	return x + y
}
there we need parentheses for more than on parameters


but with one parameter it's ok to write arrow function withour the parentheses

const square = x => {
	return x*x
}


there is not a implicit return
it will log undefined on the console
const square = x => {
	 x*x
}
but if we replace the {} with () 
there will be implicit return
note: it should be a one linear
const square = x => (
	 x*x
)
implicit work only for one statement inside the ()
if there is more than two statment in implicit return function
it will create a conflict .. which one should return

const square = x => return x*x     //invalid because return is here 


inplicit return of arrow function
const square = x => x*x     //it is valid without return keyword
there it will implicitly return the x*x


const rolldice = () =>{
	return Math.floor(Math.random()*6) + 1
}

*/


/*
//setTimeout()
//use when scheduling something 

console.log("ello")

// setTimeout(() => {console.log("aww")},4000)
//4000 milisecond

console.log("ayee")


//setInterval()

// setInterval(() => { console.log(Math.random())}, 2000)


// const id = setInterval(() => { console.log(Math.random())}, 2000)
// //then on console we can access the particular interval and clear it out
// clearInterval(id)
*/



/*
//filter()
//as function sounds filter
//create new array with all element that pass the test implemented by the provided function

let avt = [1,2,3,4,5,6,7,8,9]

const filtr = avt.filter((x) => x>4)
// filtr will have [5,6,7,8,9]

avt.filter((x) => x>4).map(m => console.log(m))

*/



/*
//some(), every()    - returns true or false only

//some()  - return true if anyone in all elements satisfy the condition else return false
//every()  - return true iff each elements satisfy the condition else return false

let score = [71,76,99,92,80,92]

score.every(x => x>70)  // true
score.every(x => x>75)  // false becuase 71 is less than 75
//every condition must satisfy to each element in the array score here
score.some(y => y>75)  //true
score.some(y => y<75)  //true because 71 is there

*/



/*
//reduce()


let natural = [10,2,3,4,5,6,7,8,9,1]

let sum = natural.reduce((total, num) => {
	return total+num
})

//we can rewrite it in short
let ola = natural.reduce((total, num) => total+num)

//we can give intiliate value
let ola = natural.reduce((total, num) => total+num, 100)
//there 100 is second parameter of reduce()
// 100 + 55 = 155


let minimum = natural.reduce((min, num) => {
	if(min<num )
		return min
	else 
		return num
})

*/


/*
//default parameters

function rolldie(numSides){
	if(numSides === undefined){
		numSides = 6
	}
	return Math.floor(Math.random()*numSides) + 1
}

// rolldie()  //it will work on console


function name(first, last = "holems"){
	return `name :  ${first} ${last}`
}

// name("sherlock")
//it will work 
//if we don't give the last parameter then holems will be taken as a parameter

*/






//##################################### DOM ( DOCUMENT OBJECT MODEL) ##################

/*
Document -  root of the dom tree where all the content of the pages stored. it also contains all the 
method and properties.

Object -   every element or we can say everything of page content is converted to js object.



dom is representation of all content of pages (like element, commets, text, spaces) in js format. 
it is a data structure. More specifically it is a tree data structure.

dom can be used with other languages besided js.
it also created for xhtml.
*/


//selecting and maupulating 
/*
//selecting 

document.getElementById(elementId: DOMString)
document.getElementsByClassName(classNames: DOMString)
document.getElementsByTagName(localName: DOMString)
document.querySelector(selectors: DOMString)
//select only frist element
document.querySelectorAll(selectors: DOMString)

*/


// first select and then maupulate by the use of properties or methods

/*

innerText  -  it don't consider the spaces on the html file or markup

textContent -  it consider the spaces of the html file 
               and shows is as it is on the markup with spaces (but tag not included)

innerHTML -  it respect the html tag and show it on the browser after rendering the tags

*/


// getAttribute
//setAttribute

//changing style

//classList   -   classList.add()

//traversing -  
//element traversing    
//node traversing
//children ( for element)
//nextSibling()
//previousSibling()
//parentElement()


//creating and appending element
//document.createElement("img").src = "image.jpg"
//console.dir()
//document.body.appendChild("img")
//then we can add class list (classList.add())
//append()  // append or add something inside the element


/*
//form event .. prevetDefault()

let form = document.getElementById("form")
let submit = document.getElementById("submit")
let input = document.getElementById("inp")
let list = document.getElementById("list")
// let add = document.createElement("li")


form.addEventListener("submit", function(e){
	e.preventDefault()
	let text = input.value
let add = document.createElement("li")
	add.innerText = text

	list.append(add)

	input.value = ""	
});

*/


/*
//event and event object

let input = document.querySelector("#inp")

input.addEventListener('keydown', function(e) {
    switch (e.code) {
    	case "ArrowUp":
    		// statements_1
    console.log(e.code)
    		break;
    	case "ArrowRight":
    		// statements_1
    console.log(e.code)
    		break;
    	case "ArrowDown":
    		// statements_1
    console.log(e.code)
    		break;
    	case "ArrowLeft":
    console.log(e.code)
    		// statements_1
    		break;
    default:
    console.log('ignored')	
    }

})*/




// let head = document.querySelector("#head")
// let btn =  document.querySelector("#headbtn")







































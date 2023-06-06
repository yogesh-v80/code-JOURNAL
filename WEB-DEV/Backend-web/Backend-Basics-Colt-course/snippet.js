JavaScript does not have an explicit array data type. However, you can use the predefined Array object and its methods to work with arrays in your applications. The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them. It has a property for determining the array length and other properties for use with regular expressions.



// This creates an array with only one element: the number 42.
const arr = [42];

// This creates an array with no elements and arr.length set to 42.
const arr = Array(42);

// This is equivalent to:
const arr = [];
arr.length = 42;


let a = []
undefined
a[9.3] = "ssd"
'ssd'
a
[9.3: 'ssd']
a[0]
undefined
a[4] = "df"
'df'
a
(5) [empty × 4, 'df', 9.3: 'ssd']4: "df"9.3: "ssd"length: 5[[Prototype]]: Array(0)
a[4.4] = "dfdf"
'dfdf'
a
(5) [empty × 4, 'df', 9.3: 'ssd', 4.4: 'dfdf']


const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

cats.length = 0;
console.log(cats); // []; the cats array is empty

cats.length = 3;
console.log(cats); // [ <3 empty items> ]



const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list is "Wind - Rain - Fire"



let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// starts at index 1 and extracts all elements
// until index 3


const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", the second-last element of myArray


let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened

The filter() method returns a new array containing the items for which callback returned true.

const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]


const myObj = { foo: 42, bar: "hello", baz: true };

for (const [key, value] of Object.entries(myObj)) {
  console.log(`${key}: ${value}`);
}

// Output:
// foo: 42
// bar: hello
// baz: true


const myObj = { a: 1, b: 2, c: 3 };

const entriesArray = Object.entries(myObj);

console.log(entriesArray);

// Output: [["a", 1], ["b", 2], ["c", 3]]


//rest parameter
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

function wrong1(...one, ...wrong) {}  // invalid
function wrong2(...wrong, arg2, arg3) {} //invalid

function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]

//Rest parameters were introduced to reduce the boilerplate code 
//that was commonly used for converting a set of arguments to an array.






Don't use for...in to enumerate the items in NodeLists, since they will also enumerate its length and item properties and cause errors if your script assumes it only has to deal with element objects. Also, for...in is not guaranteed to visit the properties in any particular order.

for...of loops loop over NodeList objects correctly:

const list = document.querySelectorAll("input[type=checkbox]");
for (const checkbox of list) {
  checkbox.checked = true;
}
Copy to Clipboard
Browsers also support the iterator method (forEach()) as well as entries(), values(), and keys().






The forEach() method executes callback on every array item and returns undefined.

const a = ["a", "b", "c"];
a.forEach((element) => {
  console.log(element);
});
// Logs:
// a
// b
// c
Copy to Clipboard
The forEach method (and others below) that take a callback are known as iterative methods, because they iterate over the entire array in some fashion. Each one takes an optional second argument called thisArg. If provided, thisArg becomes the value of the this keyword inside the body of the callback function. If not provided, as with other cases where a function is invoked outside of an explicit object context, this will refer to the global object (window, globalThis, etc.) when the function is not strict, or undefined when the function is strict.














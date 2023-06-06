

//Promise()

/*
 const displayColor = (color, delay) => {
 	return new Promise((resolve, reject) =>{
 		setTimeout(()=>{
 			document.body.style.backgroundColor = color;
 			resolve("resolved");
 		}, delay) 
 	})
 }



displayColor("red", 2000)

.then(() => {
return displayColor("green", 1000)
})
.then(() => displayColor("teal", 1000))
.then(() => displayColor("grey", 1000))
.then(() => displayColor("yellow", 1000))
.then(() => displayColor("purple", 1000))
*/ 


/*

//async keyword

async function hello(){

 // not returning any value or returning undefined
}

//es6 way
const Hello = async () => {

	return "hey"   //returning with value "hey"

} 


//both above automatically returns the promise
//we don't need to write the ...    return new Promise()


const isProblem = async () => {

	// throw new Error("its goint to reject") 
	// OR
	throw "its goint to reject"

	return "it won't execute"
}



isProblem().then(data => console.log("fulfilled", data))
.catch(err => console.log("Error here: ", err))

*/





/*
const login = async (username, password) => {
	if(!username || !password) throw "Missing credentials"
	if(password === "password") return "Right credentials"
	throw "Invalid password or username"

}


login("hey", "password")
.then(data => console.log(data))
.catch(err => console.log(err))

*/




//use of await keyword. an alternative of .then
/*
 const displayColor = (color, delay) => {
 	return new Promise((resolve, reject) =>{
 		setTimeout(()=>{
 			document.body.style.backgroundColor = color;
 			resolve("resolved");
 		}, delay) 
 	})
 }


 async function show() {
 	    await displayColor("green", 1000);
 		await displayColor("red", 1000);
 		await displayColor("yellow", 1000);
 		await displayColor("grey", 1000);
 		await displayColor("violet", 1000);
 		await displayColor("teal", 1000);
 		return "done";
 }

// we can use try and catch block here to catch the error
*/








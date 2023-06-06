//////////////////
//http requests //
//////////////////

// XHR request .... older way,  no promise returned
/*
const req = new XMLHttpRequest();

req.onload = function() {
	console.log("on load")
	console.log(this)
	console.log(this.responseText)
	let data = JSON.parse(this.responseText);
	console.log(data.name, data.height)


	//if we want to do seconde req 
	//it will start from here
}

req.onerror = function () {
	console.log("Error!")
	console.log(this)
}



req.open("GET", "http://swapi.dev/api/people/1");
req.send();
*/








//////////////
//fetch API //
//////////////

/*
fetch("http://swapi.dev/api/people/1")
//it will return promise (fulfilled or rejected)

.then(res => res.json())
//note: res.json also returns the promise
//and it convert the readable stream into json format
.then(data => console.log(data))

.catch(err => console.log("error: ", err))


//another way to do it
//

fetch("http://swapi.dev/api/people/2")
// .then(res => {
// 	console.log(res)
// 	res.json().then(data => console.log("json data: ", data))})
// 	
// 	OR
// 	
.then(res => {
	console.log(res)
	return res.json()
})

.then(data => {
	console.log("json data: ", data)
})

.then
.catch(err => console.log("error: ", err))



addding another request
note:  it can be done independently also


fetch("http://swapi.dev/api/people/2")

.then(res => {
	console.log(res)
	return res.json()
})

.then(data => {
	console.log("json data: ", data)
//another request can be here
 return fetch("http://swapi.dev/api/people/3")
})

.then(res =>{
	console.log("second request")
	console.log(res)
     return res.json()} )
.then(data => console.log(data))
.catch(err => console.log("error: ", err))



//async await


const loadStarWars = async () => {
	try {
	const res = await fetch("http://swapi.dev/api/people/1")
	const data = await res.json();
	console.log(data)
	const res2 = await fetch("http://swapi.dev/api/people/2")
	const data2 = await res2.json();
	console.log(data2)
		
	} catch(e) {
		
		console.log("error: ", e);
	}
	
};

loadStarWars();

*/






///////////////////////////////////////////////
//Axios - a library for making http requests //
//                                           //
///////////////////////////////////////////////

//npm install axios
//or
//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//include this in html file
//


/*
axios.get("http://swapi.dev/api/people/1")
.then(res => {console.log("Response: ", res)
	return res})
.then(data => console.log(data.data))
.catch(e => console.log("error! ", e))

*/

/*
const getStarWarsPeople = async (id) => {
	try {

	const res = await axios.get(`http://swapi.dev/api/people/${id}`)
	console.log(res.data)
	} catch(e) {
		
		console.log("error! ", e);
	}
}

getStarWarsPeople(5)

*/





///////////////////////
// axios with header //
///////////////////////



const req = async () => {
	try{const config = {headers:{Accept: "application/json"}}
	// const res = await axios.get("https://icanhazdadjoke.com/",  {headers:{Accept: "application/json"}})
	const res = await axios.get("https://icanhazdadjoke.com/",  config)
	// console.log(res)
	// console.log(res.data.joke)
	return res.data.joke;

} catch(e ){
	return "no jokes available"
}

}


const btn = document.querySelector("#jokeBtn")
const ul = document.querySelector("#jokeList")

btn.addEventListener("click", async () =>{
	const joke = await req();
	console.log(joke)

	const newLi = document.createElement("LI")

	newLi.append(joke)

	ul.append(newLi)


})

















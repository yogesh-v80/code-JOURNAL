/*
//bodybackground change

let textRgb = document.querySelector("#rgb")
let ColorBtn = document.querySelector("#clrbtn")


const randomColor = () => {
	const rc = Math.floor(Math.random()*255)
	const rc2 = Math.floor(Math.random()*255)
	const rc3 = Math.floor(Math.random()*255)
	return rtext = `rgb(${rc},${rc2},${rc3})`
	
}


ColorBtn.addEventListener("click", function(){
	
	document.body.style.backgroundColor = randomColor()
	textRgb.innerText = randomColor()
})
*/


/*

//Event and this Keyword

const randomColor = () => {
	const rc = Math.floor(Math.random()*255)
	const rc2 = Math.floor(Math.random()*255)
	const rc3 = Math.floor(Math.random()*255)
	return rtext = `rgb(${rc},${rc2},${rc3})`
	
}


let bgBtn = document.querySelectorAll(".bgBtn")
let bgH1 = document.querySelectorAll(".bgH1")


	for(let btn of bgBtn){
		btn.addEventListener("click", colorization)
	}

	for(let h1s of bgH1){
		h1s.addEventListener("click", colorization)
	}


	function colorization(){
		this.style.backgroundColor = randomColor()
		this.style.color = randomColor()
	}

	*/


//e, evt, event object
//console.log(e)   in a event handler it will log 
//the respective event object of the the passed event
//we can modify and give value to the properties of 
//event object by use of dot operator

//keyup, keydown, keypress



/*
//form events and e.preventDefault()

let form = document.querySelector("form")
let formInput = document.querySelector("#formInput")
let submitBtn = document.querySelector("#submitBtn")
let list = document.querySelector("#list")


form.addEventListener("submit", function(e){
	// console.log(e)
	e.preventDefault()

	const newList = document.createElement("li")
	// let textV = formInput.value
	// list.append(newList)
	list.appendChild(newList)
	newList.innerText = formInput.value
	// console.log(newList)

	formInput.value = ""

})

*/

/*
	//change and input event 

	let inp = document.querySelector("#inp")
	let liveH = document.querySelector("#liveH")

	// inp.addEventListener('change', function(){
	// 	console.log("eyy")
	// })

	inp.addEventListener('input', function(){
		// console.log(inp.value)
		liveH.innerText = inp.value

	})

	*/

		//event delegation

		
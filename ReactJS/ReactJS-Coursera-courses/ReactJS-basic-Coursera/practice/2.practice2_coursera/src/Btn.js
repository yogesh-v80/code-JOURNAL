import React from 'react'




const clickHandler = () => {
	console.log("clicked")
}

// const mouse = ()=>{
// 	console.log("hovered")
// }
function Btn(){
	return (
		<div>
		<button onClick={clickHandler}>click me</button>

		<hr/>
		<button onMouseOver={function(){ console.log("hovered")}}>click me</button>
		<hr/>
		<button onClick = {()=> console.log("hello")}> click</button>

		</div>
		)
}

export default Btn;

// <button onClick={clickHandler()}>click me</button>
// it will be invalid. Can't have parenthesis for event
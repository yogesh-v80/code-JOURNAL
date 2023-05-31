import React from 'react'
// import Logo from './images/logo192.png'  //invalid
import Logo from '../images/logo192.png' 
//we used here .. (two dots ) becasue
//image is outside this folder 

const random = Math.floor(Math.random()*10 + 1)

const add = function(a,b){
	return a + b;
}

const Image = (props) =>{
	const pic = <img src={Logo} />
	return pic;
}


const Say = ()=>{
	return "says";
} 

const styles = {
		backgroundColor: "red",
		color: "blue"
}

function Main(props){
	return (<div className="main-content" >
	<h2 style={styles}> {props.greet} {random} </h2>
	<p> {props.greet} ola {add(2,4) }</p>
	< Say />
	<br/>
	<Image />
	</div>
	)
}


export default Main;
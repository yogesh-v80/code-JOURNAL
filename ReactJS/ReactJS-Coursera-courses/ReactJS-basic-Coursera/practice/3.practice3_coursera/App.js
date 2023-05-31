import React from 'react'
import Child from "./Child"
//to print local time




export default function App(){
	const date = new Date();
	return ( 
			<div>
				<Child  message={date.toLocaleTimeString()} />
			</div>
		)

}



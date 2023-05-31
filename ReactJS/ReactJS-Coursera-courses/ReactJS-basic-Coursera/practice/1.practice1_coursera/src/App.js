import React from 'react'
import Main from './components/Main'
import List from './components/List'
import Card from './components/Card'



export default function App(){
	return ( 
			<div className='container'>
				<h1>hello</h1>
				<Main greet="hello"/>
				
				<List/>
				
				<div> 
				<h1>adding three card element</h1>
				<Card h1="first card h1" h2="first card h2"/>
				<Card h1="second card h1" h2="second card h2"/>
				<Card h1="third card h1" h2="third card h2"/>
				</div>
			</div>
		)
}



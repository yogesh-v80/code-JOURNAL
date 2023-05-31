import React from 'react'

const name = "oya"

const url = "logo512.png"  //puz

function pic(){
	return <img src={url}></img>
}

function List(){
	return (<div>
	<ul>
	<li>{4 + 4}</li>
	<li> { 2 == 1} </li>
	<li>{ "Hello " + name}</li>
	<li> { 1 < 2} </li>
	</ul>
	<div> {pic()}</div>  
	</div>
	)
}

export default List
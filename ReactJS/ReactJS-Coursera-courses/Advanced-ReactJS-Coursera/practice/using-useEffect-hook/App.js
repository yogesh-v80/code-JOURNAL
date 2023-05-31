import React from 'react';

function App(){

	const [toggle, setToggle] = React.useState(false);

	
	function clickHandler(){
		setToggle(!toggle)
	}

	React.useEffect(() => {
		document.title = toggle ? "welcome to the little lemon page" : "using the useEffect hook"
	}, [toggle])

	return (

		<div>
		<h1>Using the useEffect hook </h1>
		<button onClick = {clickHandler}>
	 Toggle message
		</button>
		{toggle && <h3>Welcome to page</h3>}
		</div>
		)
}

export default App;
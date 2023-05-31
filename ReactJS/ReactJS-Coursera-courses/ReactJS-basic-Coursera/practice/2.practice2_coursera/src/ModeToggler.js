

function ModeToggler(){

	let darkModeOn = true;
	const darkMode = <h1>Dark mode is on</h1>;
	const lightMode = <h1>light mode is on</h1>;

	function handleClick(){
		darkModeOn = !darkModeOn;
		if(darkModeOn){
			console.log("true")
		}else{
			console.log("false")
		
		}
	}
return ( <div>

	{darkModeOn? darkMode : lightMode}
	<button onClick= {handleClick}> Mode </button>
	</div>)
}



export default ModeToggler;
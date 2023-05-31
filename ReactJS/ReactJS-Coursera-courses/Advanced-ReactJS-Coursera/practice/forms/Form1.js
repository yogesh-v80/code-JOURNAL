
import {useState} from 'react';

function Form1() { 

	const [name, setName] = useState("");

    const handleSubmit = (e) => {
    	e.preventDefault();    
    	setName("");
    	console.log("form submit");
    	
    }

	return ( 
		<div className="App">
		<form onSubmit={handleSubmit}>
			<fieldset>

				<div className = "Field">
					<label htmlFor="name">Name:</label>
					<input type="text" 
					id="name"
					 placeholder="Name" 
					 name="name"
					 value = {name} 
					onChange={e => setName(e.target.value)}/>
				</div>

				<button type="submit"  disabled ={!name}>Submit</button>

			</fieldset>
		</form>
		</div>

		); 
} 

export default Form1; 



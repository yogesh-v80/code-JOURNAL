
import {useState} from 'react';

function Form2() { 

	const [score, setScore] = useState(10);
	const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
    	e.preventDefault();    
    	console.log(comment.length)
    	if(Number(score)<=5 && comment.length <= 10){
    		alert("Please provide a comment explaining why the experience was poor.");
    		return;
    	}

    	console.log("form submitted");

    	setComment("");
    	setScore(10);


    	
    }

	return ( 
		<div className="App">

		<form onSubmit={handleSubmit}>


			<fieldset>
				<h2> Feedback Form </h2>

				<div className = "Field">
					<label>Score:{score} </label>
					<br/>
					<input type="range" 
					min="0"
					max="10"
					value = {score} 
					onChange={e => setScore(e.target.value)}/>
				</div>
				<div>
				<label htmlFor=""> Comment:</label>
				<br/>
				<textarea placeholder="type here" 
				value = {comment} 
					onChange={e => setComment(e.target.value)}/>
				</div>

				<button type="submit" > Submit </button>

			</fieldset>
		</form>
		</div>

		); 
} 

export default Form2; 



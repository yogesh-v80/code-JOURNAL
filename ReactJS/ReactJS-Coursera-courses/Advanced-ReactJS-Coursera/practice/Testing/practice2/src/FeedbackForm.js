import {useState} from 'react'

export default function FeedbackForm({onSubmit}) {

	const [score, setScore] = useState("10");
	const [comment, setComment] = useState("");


	const isDisabled = Number(score) < 5 && comment.length <= 10;

	const textAreaPlaceHolder = isDisabled ? " please provide enough feedback" : "Optional feedback";

	const handleSubmit = (e)=> {
		e.preventDefault();
		onSubmit({score, comment});
	}

	return (

		<div className = "App">
			<form onSubmit={handleSubmit}>
					<fieldset>
						<div className="Field">

						<h1>Feedback form</h1>
						<label htmlFor="range"> Score: {score}</label>
						<input type="range" 
						 min = "0" max="10" 
						 id="range" name="range"
						value = {score} 
						onChange={(e) => setScore( e.target.value) }/>

						</div>

						<div className="Field">

				
						<label htmlFor="comment"> Comment : {comment}</label>
						<textarea 
						
						 name="comment"
						 id="comment" placeholder = {textAreaPlaceHolder}
						value = {comment} 
						onChange={(e) => setComment( e.target.value) }/>

						</div>
					</fieldset>

					<button disabled = {isDisabled} > Submit</button>


			</form>

		</div>

		)
	}
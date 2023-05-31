import FeedbackForm from "./FeedbackForm"

export default function App(){

	const handleSubmit = () => {
		console.log("form Submitted!")
	}
	return (
		<div className="App">
			<FeedbackForm  onSubmit = {handleSubmit}/>
		</div>
		)
}
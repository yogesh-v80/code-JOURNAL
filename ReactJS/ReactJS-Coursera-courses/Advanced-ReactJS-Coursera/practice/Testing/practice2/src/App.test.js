import {screen, render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import FeedbackForm from './FeedbackForm.js';


describe("Feedback Form",  ()=> {
	test("submission disabled if score is lower than 5 and there is no feedback commnet", () => {
		const handleSubmit = jest.fn();  // mock function
        // mock is a special function which is used to ...
		// mock fn us used to track how the particular function is called by external code

		render(<FeedbackForm onSubmit = {handleSubmit} /> );
		// there passing the mock function as a onSubmit prop through handleSubmit
		// 
		
		const rangeInput = screen.getByLabelText(/Score:/);
		// to locate the range input and fill it with a value
		// there /Score:/  is a regular expression 
		// screen is a utility object form react testing library
		// that represent the whole page 
		// which basically translates to asking the root document to find a 
		// label tag whose text contains the word score and then 
		// RETURN INPUT ELEMENT associated with that label
		
		fireEvent.change(rangeInput, {target: {value: "4"}});
		//to fill the INPUT with value by use of fireEvent utility from react t lib 
		//and call the change function 
		
		const submitButton = screen.getByRole("button");
		// getByRole which look at the element with a specific role attribute
		
		fireEvent.click(submitButton);
		// to perform a button click
		

		//these below two statement is the assertion of test
		
		expect(handleSubmit).not.toHaveBeenCalled();
		// asserting that the funciton that handle the form 
		// has not been called, which is expected when an 
		// additional comment has been omitted

		expect(submitButton).toHaveAttribute("disabled");
		//to make sure the submit button is indeed disabled
		//by using the to have attribute matter.
		
		
		//it is a test scenario where the app verified that 
		//users who provided less than a score of 5 could 
		//only submit their form if feedback was also provided
	})
})
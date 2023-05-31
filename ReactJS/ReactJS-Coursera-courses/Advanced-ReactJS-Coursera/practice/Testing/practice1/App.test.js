import {screen, render} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from './App.js';


test("render a link points to Little Lemon webpage", () => {
	render(<App/>);   // it renders in the artificial DOM environment
	//screen is a object to create a query against the document.body
	const linkElement = screen.getByText("Little Lemon Restaurant");
	//getByText ask is document have the text |   amd it will return the found element
	expect(linkElement).toBeInTheDocument();
	

})
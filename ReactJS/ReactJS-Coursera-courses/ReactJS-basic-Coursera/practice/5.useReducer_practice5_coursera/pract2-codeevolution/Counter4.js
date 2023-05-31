import {useReducer} from 'react';


const initialValue1 = 0;
const initialValue2 = 0;

const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1
		case "decrement":
			return state - 1
		case "reset":
			return initialValue1
		default:
			return state;
			
	}
}


export default function Counter4(){

const [count1, dispatch] = useReducer(reducer, initialValue1)
const [count2, dispatchTwo] = useReducer(reducer, initialValue2)

	return ( 
			<div>
				<br/>
				<div>Counter one: {count1}</div>

				<button  onClick={ () => dispatch( "increment")}> Increment</button>
				<button  onClick={ () => dispatch("decrement")}> Decrement</button>	
				<button  onClick={ () => dispatch("reset")}> Reset</button>		
				
				<div>Counter Two: {count2}</div>
				<button  onClick={ () => dispatchTwo( "increment")}> Increment</button>
				<button  onClick={ () => dispatchTwo("decrement")}> Decrement</button>
				<button  onClick={ () => dispatchTwo("reset")}> Reset</button>		
					
			</div>
		)

}



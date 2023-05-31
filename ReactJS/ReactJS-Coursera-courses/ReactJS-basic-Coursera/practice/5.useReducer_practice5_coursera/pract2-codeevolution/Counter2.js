import  {useReducer} from 'react';


const iniState = {
	value: 0
}

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return {value: state.value + 1}
		case "decrement":
			return {value: state.value - 1}
		case "reset":
			return iniState
		default:
			return state
			
	}
}


export default function Counter2(){

const [count, dispatch] = useReducer(reducer, iniState);

	return ( 
			<div>
				<div>Count - {count.value}</div>
				<button  onClick={ () => dispatch({type: "increment"})}> Increment</button>
				<button  onClick={ () => dispatch({type: "decrement"})}> Decrement</button>
				<button  onClick={ () => dispatch({type: "reset"})}> Reset</button>
			</div>
		)

}



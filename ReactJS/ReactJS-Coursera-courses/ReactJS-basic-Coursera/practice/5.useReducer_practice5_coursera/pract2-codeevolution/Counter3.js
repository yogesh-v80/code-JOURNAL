import  {useReducer} from 'react';


const iniState = {
	value: 0
}

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return {...state, value: state.value + action.num}
		case "decrement":
			return {...state, value: state.value - action.num}
		case "increment2":
			return {...state, value: state.value + action.num}
		case "decrement2":
			return {...state, value: state.value - action.num}
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
				<button  onClick={ () => dispatch({type: "increment", num: 1 })}> Incr by 1</button>
				<button  onClick={ () => dispatch({type: "decrement", num: 1})}> Decr by 1</button>
				<button  onClick={ () => dispatch({type: "increment2", num: 5})}> Incr by 5</button>
				<button  onClick={ () => dispatch({type: "decrement2",num: 5})}> Decr by 5</button>
				<button  onClick={ () => dispatch({type: "reset"})}> Reset</button>
			</div>
		)

}



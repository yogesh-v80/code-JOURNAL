import {useReducer} from 'react';


const reducer = (state, action) =>{
	if( action.type === 'ride') return {money: state.money + 10};
	if( action.type === 'fuel') return {money: state.money - 5};
	return new Error();
}


export default function App(){

	const intiState = {money: 100};
	const [state, dispatch] = useReducer(reducer, intiState);


	return ( 
			<div className = "App">
				<h1> Wallet: {state.money}</h1>

				<div>
					<button onClick = {() => dispatch({type: 'ride'})}> A new Customer!</button>
					<button onClick = {() => dispatch({type: 'fuel'})}>Refill tank </button>
				</div>
				
			</div>
		)

}



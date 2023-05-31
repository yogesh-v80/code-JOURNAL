import {useReducer} from "react";



	const reducer = (state, action) => {
		if(action.type === "ingredient") return {money: state.money - 10};
		if(action.type === "sell") return {money: state.money + 10};
		return state;
	}


export default function App(){
	

	
	const initialState = {money: 100};
	
	const [state, dispatch] = useReducer(reducer, initialState);
	
	
	return (
	
	     <div> 
	     
	     <h1> Wallet: {state.money} </h1>
	     
	    	 <div>
	    		 <button  onCick = { () => dispatch({type: "ingredient"})}> Buy Incredient </button>
	    	 	 <button  onCick = { () => dispatch({type: "sell"})}> Serve a meal to customer </button>
	    	 </div>
	     
	     </div>
	)
}
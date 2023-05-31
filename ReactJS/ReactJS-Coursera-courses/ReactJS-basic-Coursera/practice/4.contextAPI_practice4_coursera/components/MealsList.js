import { useMealsListContext } from "../providers/MealsProvider"


const MealsList = () => {

	const {meals}  =  useMealsListContext();


	return (

		<div>
			<h1>Meals List using Context API</h1>

			{meals.map((meals, index) => {
				return <h2 key = {index} > {meals}</h2>
			})}

		</div>


		)
}

export default MealsList
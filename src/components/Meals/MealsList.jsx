import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddMeal from './AddMeal'
import TotalCalories from './TotalCalories'

export default function Meals({ caloricNeeds }) {
	const [meals, setMeals] = useState([])

	const updateMealsList = newMeal => {
		setMeals([...meals, newMeal])
	}
	useEffect(() => {
		axios
			.get(`http://localhost:3020/meals`)
			.then(res => {
				console.log(res)
				setMeals(res.data)
			})
			.catch(error => {
				console.error('Something wrong with API', error)
			})
	}, [])

	const deleteMeal = mealId => {
		axios
			.delete(`http://localhost:3020/meals/${mealId}`)
			.then(res => {
				console.log('Meal deleted:', res)
				setMeals(prevMeals => prevMeals.filter(meal => meal.id !== mealId))
			})
			.catch(error => {
				console.erorr('Error deleting meal', error)
			})
	}

	return (
		<div className="w-full h-3/4 bg-gradient-to-r from-violet-800 to-white-500  bg-gray-900 overflow-hidden md:flex-row">
			<div className="flex justify-center flex-col items-center mt-20 md:flex-row ">
				<table className="table-auto bg-white shadow-lg rounded-lg w-2/5 md:w-4/6 h-1/5 table-layout: auto;">
					<thead>
						<tr>
							<th className="px-1 md:px-4 md:py-2">Meal Name</th>
							<th className="px-1 md:px-4 md:py-2">Weight (g)</th>
							<th className="px-1 md:px-4 md:py-2">Calories (Kcal)</th>
							<th className="px-1 md:px-4 md:py-2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{meals &&
							meals.map(meal => (
								<tr key={meal.id} className="text-center ">
									<td className="px-4 py-2 font-semibold">{meal.name}</td>
									<td className="px-4 py-2">{meal.weightGrams}</td>
									<td className="px-4 py-2">{meal.caloriesKcal}</td>
									<td className="px-4 py-2">
										<div className="meal-buttons flex justify-around content-center flex-column">
											<button className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-1 px-2 rounded-xl mt-2">
												Edit
											</button>
											<button
												className="bg-gray-400 hover:bg-red-700 text-gray-900 font-bold py-1 px-2 rounded-xl mt-2"
												onClick={() => {
													deleteMeal(meal.id)
												}}>
												Delete
											</button>
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
				<AddMeal updateMealsList={updateMealsList} />
			</div>
			<TotalCalories meals={meals} caloricNeeds={caloricNeeds} />
		</div>
	)
}

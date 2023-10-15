import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddEditMeal from './AddEditMeal'
import TotalCalories from './TotalCalories'

export default function Meals({ caloricNeeds }) {
	const [meals, setMeals] = useState([])
	const [editingMeal, setEditingMeal] = useState(null)
	const [isEditing, setIsEditing] = useState(false)

	const updateMealsList = newMeal => {
		if (isEditing) {
			axios
				.put(`http://localhost:3020/meals/${editingMeal.id}`, newMeal)
				.then(response => {
					console.log(response)
					setEditingMeal(null)
					setIsEditing(false)
					refreshMealsList()
				})
				.catch(error => {
					console.error('Coś poszło nie tak podczas aktualizacji posiłku', error)
				})
		} else {
			axios
				.post('http://localhost:3020/meals', newMeal)
				.then(response => {
					console.log(response)
					refreshMealsList()
				})
				.catch(error => {
					console.error('Coś poszło nie tak podczas dodawania posiłku', error)
				})
		}
		setMeals([...meals, newMeal])
	}

	const refreshMealsList = () => {
		axios
			.get('http://localhost:3020/meals')
			.then(res => {
				console.log(res)
				setMeals(res.data)
			})
			.catch(error => {
				console.error('Coś poszło nie tak z API', error)
			})
	}

	const startEditing = meal => {
		setEditingMeal(meal)
		setIsEditing(true)
	}

	const cancelEdit = () => {
		setEditingMeal(null)
		setIsEditing(false)
	}

	useEffect(() => {
		refreshMealsList()
	}, [])

	const deleteMeal = mealId => {
		axios
			.delete(`http://localhost:3020/meals/${mealId}`)
			.then(res => {
				console.log('Posiłek usunięty:', res)
				refreshMealsList()
			})
			.catch(error => {
				console.error('Błąd podczas usuwania posiłku', error)
			})
	}

	return (
		<div className="w-full h-3/4 bg-gradient-to-r from-violet-800 to-white-500 bg-gray-900 overflow-hidden md:flex-row">
			<div className="flex justify-center flex-col items-center mt-20 md:flex-row">
				<table className="table-auto bg-white shadow-lg rounded-lg w-2/5 md:w-4/6 h-1/5 table-layout: auto;">
					<thead>
						<tr>
							<th className="px-1 md:px-4 md:py-2">Meal Name</th>
							<th className="px-1 md:px-4 md:py-2">Weight (g)</th>
							<th className="px-1 md:px-4 md:py-2">Calories (Kcal)</th>
							<th className="px-1 md:px-4 md:py-2">Action</th>
						</tr>
					</thead>
					<tbody>
						{meals &&
							meals.map(meal => (
								<tr key={meal.id} className="text-center">
									<td className="px-4 py-2 font-semibold">{meal.name}</td>
									<td className="px-4 py-2">{meal.weightGrams}</td>
									<td className="px-4 py-2">{meal.caloriesKcal}</td>
									<td className="px-4 py-2">
										<div className="meal-buttons flex justify-around content-center flex-column">
											<button
												className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-1 px-2 rounded-xl mt-2"
												onClick={() => startEditing(meal)}>
												Edit
											</button>
											<button
												className="bg-gray-400 hover:bg-red-700 text-gray-900 font-bold py-1 px-2 rounded-xl mt-2"
												onClick={() => deleteMeal(meal.id)}>
												Delete
											</button>
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
				<AddEditMeal
					updateMealsList={updateMealsList}
					editingMeal={editingMeal}
					isEditing={isEditing}
					cancelEdit={cancelEdit}
				/>
			</div>
			<TotalCalories meals={meals} caloricNeeds={caloricNeeds} />
		</div>
	)
}

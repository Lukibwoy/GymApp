import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Clients() {
	const [meals, setMeals] = useState([])
	const [newMeal, setNewMeal] = useState({
		name: '',
		weightGrams: '',
		caloriesKcal: '',
	})

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

	const handleInputChange = event => {
		const { name, value } = event.target
		setNewMeal({
			...newMeal,
			[name]: value,
		})
	}

	const addMeal = () => {
		axios
			.post('http://localhost:3020/meals', newMeal)
			.then(response => {
				console.log(response)
				setMeals([...meals, response.data])
				setNewMeal({
					name: '',
					weightGrams: '',
					caloriesKcal: '',
				})
			})
			.catch(error => {
				console.error('Something went wrong with adding a meal', error)
			})
	}

	return (
		<div className="w-full h-screen bg-gradient-to-r from-violet-800 to-white-500 flex justify-center items-center bg-gray-900 overflow-hidden md:flex-row">
			<table className="table-auto bg-white shadow-lg rounded-lg w-2/4 h-1/5">
				<thead>
					<tr>
						<th className="px-4 py-2">Meal Name</th>
						<th className="px-4 py-2">Weight (g)</th>
						<th className="px-4 py-2">Calories (Kcal)</th>
						<th className="px-4 py-2">Actions</th>
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
			<div className="flex justify-center w-1/4 h-3/7">
				<div className="bg-white shadow-lg rounded-lg p-4 w-2/4">
					<h2 className="text-xl font-semibold mb-4">Add New Meal</h2>
					<div className="mb-4">
						<input
							type="text"
							name="name"
							value={newMeal.name}
							onChange={handleInputChange}
							placeholder="Meal Name"
							className="w-full border rounded p-2"
						/>
					</div>
					<div className="mb-4">
						<input
							type="text"
							name="weightGrams"
							value={newMeal.weightGrams}
							onChange={handleInputChange}
							placeholder="Weight (g)"
							className="w-full border rounded p-2"
						/>
					</div>
					<div className="mb-4">
						<input
							type="text"
							name="caloriesKcal"
							value={newMeal.caloriesKcal}
							onChange={handleInputChange}
							placeholder="Calories (Kcal)"
							className="w-full border rounded p-2"
						/>
					</div>
					<div className="text-center">
						<button
							onClick={addMeal}
							className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
							Add Meal
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Clients() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3020/meals`)
      .then((res) => {
        console.log(res);
        setMeals(res.data);
      })
      .catch((error) => {
        console.error('Something wrong with API', error);
      });
  }, []);

  
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
					{meals.map(meal => (
						<tr key={meal.id} className="text-center">
							<td className="px-4 py-2">{meal.name}</td>
							<td className="px-4 py-2">{meal.weightGrams}</td>
							<td className="px-4 py-2">{meal.caloriesKcal}</td>
							<td className="px-4 py-2">
								<div className="meal-buttons flex justify-around content-center flex-column">
									<button className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-1 px-2 rounded-xl mt-10">
										Add
									</button>
									<button className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-1 px-2 rounded-xl mt-10">
										Delete
									</button>
									<button className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-1 px-2 rounded-xl mt-10">
										Edit
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

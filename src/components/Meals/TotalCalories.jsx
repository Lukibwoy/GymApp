export default function TotalCalories({ meals, caloricNeeds }) {
	const getTotalCalories = () => {
		let totalCalories = 0
		meals.forEach(meal => {
			totalCalories += meal.caloriesKcal
		})
		return totalCalories
	}

	const restOfCalories = () => {
		const rest = caloricNeeds - getTotalCalories()
		return rest
	}

	return (
		<div>
			<p className="text-center text-white mt-4 text-xl">Total Calories: {getTotalCalories()} Kcal</p>
			<p className="text-center text-white mt-4 text-xl">Remaining Calories: {restOfCalories()} Kcal</p>
			{restOfCalories() < 0 && (
				<p className="text-center text-white mt-3 text-3xl">Done! You achieved your goal for this day!</p>
			)}
		</div>
	)
}	

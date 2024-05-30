import React, { useState, useEffect } from 'react';

export default function TotalCalories({ meals, caloricNeeds }) {
	const [totalCalories, setTotalCalories] = useState(0);
	const [remainingCalories, setRemainingCalories] = useState(null);

	useEffect(() => {
		const calculateTotalCalories = () => {
			let total = 0;
			meals.forEach(meal => {
				total += meal.caloriesKcal;
			});
			return total;
		};

		const total = calculateTotalCalories();
		setTotalCalories(total);

		const rest = caloricNeeds - total;
		setRemainingCalories(rest);
	}, [meals, caloricNeeds]);

	return (
		<div>
			<p className="text-center text-white mt-4 text-xl">Total Calories: {totalCalories} Kcal</p>
			{remainingCalories !== -totalCalories ? (
				<>
					<p className="text-center text-white mt-4 text-xl">Remaining Calories: {remainingCalories} Kcal</p>
					{remainingCalories < 0 && (
						<p className="text-center text-white mt-3 text-3xl">Done! You achieved your goal for this day!</p>
					)}
				</>
			) : (
				<p className="text-center text-red-500 mt-4 text-2xl">You need to add your age, weight and plan!</p>
			)}
		</div>
	);
}

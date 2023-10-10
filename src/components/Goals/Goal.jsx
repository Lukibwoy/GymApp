import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import man1 from '../images/man1.webp'
import man2 from '../images/man2.webp'
import man3 from '../images/man3.webp'
// w komponencie Goal mamy state caloricNeeds, chcemy z tego state skorzystać w komponencie TotalCalories
// App -> Home -> Goal
// App -> Home -> MealsList -> TotalCalories
// 1. przenieść state caloricNeeds z komponentu Goal do Home (najmłodsy wspólny prodek komponentów TotalCalories i Goal)
// 2. wykonać prop drilling do komponentów 1. Goal, 2. TotalCalories (za pośrednictwem MealsList)
function Goal({ caloricNeeds, setCaloricNeeds }) {
	const [selectedPlan, setSelectedPlan] = useState(false)
	const [weight, setWeight] = useState('')
	const [age, setAge] = useState('')
	const initialValues = {
		weight: '',
		age: '',
		plan: '',
	}

	const validate = values => {
		const errors = {}

		if (!values.weight) {
			errors.weight = 'Required'
		}
		if (!values.age) {
			errors.age = 'Required'
		}

		if (!values.plan) {
			errors.plan = 'Select a plan'
		}
		return errors
	}

	console.log(selectedPlan)

	const handlePlanChange = e => {
		setSelectedPlan(e.target.value)
	}

	const handleWeightChange = e => {
		setWeight(e.target.value)
	}

	const handleAgeChange = e => {
		setAge(e.target.value)
	}

	const calculateCaloricNeeds = () => {
		const calorieValues = {
			'Lose weight': 1800,
			'Gain Muscle Mass': 2500,
			'Get Shredded': 2200,
		}

		const selectedCalories = calorieValues[selectedPlan]

		const weightFactor = 10
		const ageFactor = 5

		const calculatedCaloricNeeds = selectedCalories + weight * weightFactor - age * ageFactor

		setCaloricNeeds(calculatedCaloricNeeds)
	}

	console.log(caloricNeeds)
	return (
		<div className="w-full h-full bg-gradient-to-r from-violet-800 to-white-500 flex items-center flex-col bg-gray-900 overflow-hidden">
			<div className="plans flex flex-col justify-center items-center md:flex-row">
				<div className="plan flex flex-col">
					<img src={man3} className="w-1/4" alt="lose weight" />
					<input type="radio" id="loseWeight" name="selectedPlan" value="Lose weight" onChange={handlePlanChange} />

					<label htmlFor="loseWeight">Lose weight </label>
				</div>
				<div className="plan flex flex-col">
					<img src={man1} className="w-1/4" alt="lose weight" />
					<input
						type="radio"
						id="gainMuscle"
						name="selectedPlan"
						value="Gain Muscle Mass"
						onChange={handlePlanChange}
					/>
					<label htmlFor="gainMuscle">Gain Muscle Mass</label>
				</div>
				<div className="plan flex flex-col">
					<img src={man2} className="w-1/4" alt="lose weight" />
					<input type="radio" id="getShredded" name="selectedPlan" value="Get Shredded" onChange={handlePlanChange} />
					<label htmlFor="getShredded">Get Shredded</label>
				</div>
			</div>
			<div className="input-fields space-y-2 flex items-center flex-col">
				<Formik initialValues={initialValues} validate={validate} onSubmit={calculateCaloricNeeds}>
					{() => (
						<Form>
							{/* <div className="plans flex flex-col justify-center items-center md:flex-row">
								<div className="plan flex flex-col">
									<Field type="radio" id="loseWeight" name="selectedPlan" value="Lose weight" onKeyUp={handlePlanChange} />
									<label htmlFor="loseWeight">Lose weight</label>
								</div>
								<div className="plan flex flex-col">
									<Field type="radio" id="gainMuscle" name="selectedPlan" value="Gain Muscle Mass" onKeyUp={handlePlanChange} />
									<label htmlFor="gainMuscle">Gain Muscle Mass</label>
								</div>
								<div className="plan flex flex-col">
									<Field type="radio" id="getShredded" name="selectedPlan" value="Get Shredded" onKeyUp={handlePlanChange} />
									<label htmlFor="getShredded">Get Shredded</label>
								</div>
							</div>
							<ErrorMessage name="plan" component="div" className="text-red-600" /> */}

							<div className="input-fields space-y-2 flex items-center flex-col">
								<label htmlFor="weight" className="text-white ">
									Weight (in kg):{' '}
								</label>
								<Field
									type="number"
									id="weight"
									name="weight"
									min="0"
									onKeyUp={handleWeightChange}
									className="border rounded-md py-2 px-3 text-center"
								/>
								<ErrorMessage name="weight" component="div" className="text-red-600" />
								<label htmlFor="age" className="text-white">
									Age:{' '}
								</label>
								<Field
									type="number"
									id="age"
									name="age"
									min="0"
									onKeyUp={handleAgeChange}
									className="border rounded-md py-2 px-3 text-center"
								/>
								<ErrorMessage name="age" component="div" className="text-red-600" />
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<button
				onClick={calculateCaloricNeeds}
				className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-2 px-4 rounded-xl mt-10">
				Calculate Caloric Demand
			</button>
			{caloricNeeds !== null && (
				<div className="text-white mt-4 text-xl">Your estimated caloric needs {caloricNeeds} kcal per day</div>
			)}
		</div>
	)
}

export default Goal

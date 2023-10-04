import React, { forwardRef, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
function Foods({ text }, ref) {
	const [selectedPlan, setSelectedPlan] = useState('')
	const [weight, setWeight] = useState('')
	const [age, setAge] = useState('')
	const [caloricNeeds, setCaloricNeeds] = useState(null)

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
			errors.plan = 'Select a plan';
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

	return (
		<div className="w-full h-full bg-gradient-to-r from-violet-800 to-white-500 flex items-center flex-col bg-gray-900 overflow-hidden">
			<h2 ref={ref} className="text-white flex justify-center items-center font-bold text-2xl">
				{text}Choose your goal
			</h2>
			<div className="plans flex flex-col justify-center items-center md:flex-row">
				<div className="plan flex flex-col">
					<input type="radio" id="loseWeight" name="selectedPlan" value="Lose weight" onChange={handlePlanChange} />
					<label htmlFor="loseWeight">Lose weight </label>
				</div>
				<div className="plan flex flex-col">
					<input type="radio" id="gainMuscle" name="selectedPlan" value="Gain Muscle Mass" onChange={handlePlanChange} />
					<label htmlFor="gainMuscle">Gain Muscle Mass</label>
				</div>
				<div className="plan flex flex-col">
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
				<div className="text-white mt-4 text-xl">Your estimated caloric needs   {caloricNeeds} kcal per day</div>
			)}
		</div>
	)
}

export default forwardRef(Foods)

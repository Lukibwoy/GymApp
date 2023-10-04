import React from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'
export default function AddMeal({ updateMealsList }) {
	const initialValues = {
		name: '',
		weightGrams: '',
		caloriesKcal: '',
	}

	const validate = values => {
		const errors = {}

		if (!values.name) {
			errors.name = 'Required'
		}

		if (!values.weightGrams) {
			errors.weightGrams = 'Required'
		}
		if (values.weightGrams < 0) {
			errors.weightGrams = 'The value must be greater than 0'
		}
		if (values.caloriesKcal < 0) {
			errors.caloriesKcal = 'The value must be greater than 0'
		}

		if (!values.caloriesKcal) {
			errors.caloriesKcal = 'Required'
		}

		return errors
	}

	const handleSubmit = (values, { resetForm }) => {
		axios
			.post('http://localhost:3020/meals', values)
			.then(response => {
				console.log(response)
				updateMealsList(response.data)
				resetForm(initialValues)
			})
			.catch(error => {
				console.error('Something went wrong with adding a meal', error)
			})
	}

	return (
		<div>
			<div className="flex justify-center w-1/1 h-3/7 m-10">
				<div className="bg-white shadow-lg rounded-lg p-4 w-3/4 ">
					<h2 className="text-xl font-semibold mb-4">Add New Meal</h2>
					<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
						{() => (
							<Form>
								<div className="mb-4">
									<Field type="text" name="name" placeholder="Meal Name" className="w-full border rounded p-2" />
									<ErrorMessage name="name" component="div" className="text-red-500 text-center" />
								</div>
								<div className="mb-4">
									<Field
										type="number"
										name="weightGrams"
										placeholder="Weight (g)"
										min="0"
										className="w-full border rounded p-2"
									/>
									<ErrorMessage name="weightGrams" component="div" className="text-red-500 text-center" />
								</div>
								<div className="mb-4">
									<Field
										type="number"
										name="caloriesKcal"
										placeholder="Calories (Kcal)"
										className="w-full border rounded p-2"
									/>
									<ErrorMessage name="caloriesKcal" component="div" className="text-red-500 text-center" />
								</div>
								<div className="text-center">
									<button
										type="submit"
										className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
										Add Meal
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

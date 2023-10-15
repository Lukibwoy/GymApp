import React from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'

export default function AddEditMeal({ updateMealsList, editingMeal, isEditing, cancelEdit }) {
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
		if (isEditing) {
			axios
				.put(`http://localhost:3020/meals/${editingMeal.id}`, values)
				.then(response => {
					console.log(response)
					updateMealsList(response.data)
					cancelEdit()
				})
				.catch(error => {
					console.error('Coś poszło nie tak podczas aktualizacji posiłku', error)
				})
		} else {
			axios
				.post('http://localhost:3020/meals', values)
				.then(response => {
					console.log(response)
					updateMealsList(response.data)
				})
				.catch(error => {
					console.error('Coś poszło nie tak podczas dodawania posiłku', error)
				})
		}
		resetForm(initialValues)
	}

	return (
		<div>
			<div className="flex justify-center w-1/1 h-3/7 m-10">
				<div className="bg-white shadow-lg rounded-lg p-4 w-full ">
					<h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Meal' : 'Add Meal'}</h2>
					<Formik initialValues={editingMeal || initialValues} validate={validate} onSubmit={handleSubmit}>
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
										placeholder="Waga (g)"
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
										{isEditing ? 'Save' : 'Add Meal'}
									</button>
									{isEditing && (
										<button
											type="submit"
											className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
											onClick={cancelEdit}>
											Cancel
										</button>
									)}
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

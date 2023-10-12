import React, { useState } from 'react';

export default function EditMeal({ meal, onSave, onCancel }) {
  const [editedMeal, setEditedMeal] = useState({ ...meal });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedMeal({
      ...editedMeal,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(editedMeal);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Edit Meal</h2>
      <div className="mb-2">
        <label className="block text-gray-600 font-bold">Meal Name:</label>
        <input
          type="text"
          name="name"
          value={editedMeal.name}
          onChange={handleInputChange}
          className="rounded border w-full p-2"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-600 font-bold">Weight (g):</label>
        <input
          type="number"
          name="weightGrams"
          value={editedMeal.weightGrams}
          onChange={handleInputChange}
          className="rounded border w-full p-2"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-600 font-bold">Calories (Kcal):</label>
        <input
          type="number"
          name="caloriesKcal"
          value={editedMeal.caloriesKcal}
          onChange={handleInputChange}
          className="rounded border w-full p-2"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSave} // Dodajemy obsługę zapisu
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

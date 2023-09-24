import React, { useState } from 'react';

export default function Foods() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [caloricNeeds, setCaloricNeeds] = useState(null);

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const calculateCaloricNeeds = () => {
    const calorieValues = {
      'Lose weight': 1800,
      'Gain Muscle Mass': 2500,
      'Get Shredded': 2200,
    };

    const selectedCalories = calorieValues[selectedPlan];

    const weightFactor = 10;
    const ageFactor = 5;

    const calculatedCaloricNeeds =
      selectedCalories + weight * weightFactor - age * ageFactor;

    setCaloricNeeds(calculatedCaloricNeeds);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-violet-800 to-white-500 flex items-center flex-col bg-gray-900 overflow-hidden">
      <div className="text-white text-xl flex justify-center items-center font-bold text-2xl">
        Choose your goal
      </div>
      <div className="plans flex justify-center items-center">
        <div className="plan flex flex-col">
          <input
            type="radio"
            id="loseWeight"
            name="plan"
            value="Lose weight"
            onChange={handlePlanChange}
          />
          <label htmlFor="loseWeight">Lose weight</label>
        </div>
        <div className="plan flex flex-col">
          <input
            type="radio"
            id="gainMuscle"
            name="plan"
            value="Gain Muscle Mass"
            onChange={handlePlanChange}
          />
          <label htmlFor="gainMuscle">Gain Muscle Mass</label>
        </div>
        <div className="plan flex flex-col">
          <input
            type="radio"
            id="getShredded"
            name="plan"
            value="Get Shredded"
            onChange={handlePlanChange}
          />
          <label htmlFor="getShredded">Get Shredded</label>
        </div>
      </div>
      <div className="input-fields space-y-2 flex flex-col items-center">
        <label htmlFor="weight" className='text-white '>Weight (in kg): </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
          className="border rounded-md py-2 px-3 text-center"
        />
        <label htmlFor="age" className='text-white'>Age: </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={handleAgeChange}
          className="border rounded-md py-2 px-3 text-center"
        />
      </div>
      <button
        onClick={calculateCaloricNeeds}
        className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-2 px-4 rounded-xl mt-10"
      >
        Calculate Caloric Demand
      </button>
      {caloricNeeds !== null && (
        <div className="text-white mt-4">
          Your estimated caloric needs: {caloricNeeds} kcal per day
        </div>
      )}
    </div>
  );
}

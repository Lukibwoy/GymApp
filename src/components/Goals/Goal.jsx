import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import man1 from '../images/man1.webp';
import man2 from '../images/man2.webp';
import man3 from '../images/man3.webp';

function Goal({ caloricNeeds, setCaloricNeeds }) {
    const [selectedPlan, setSelectedPlan] = useState('Gain Muscle Mass');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const controls = useAnimation();
    const ref = useRef();

    const initialValues = {
        weight: '',
        age: '',
        plan: '',
    };

    const validate = values => {
        const errors = {};

        if (!values.weight) {
            errors.weight = 'Required';
        }
        if (!values.age) {
            errors.age = 'Required';
        }

        if (!values.plan) {
            errors.plan = 'Select a plan';
        }
        return errors;
    };

    const handlePlanChange = e => {
        setSelectedPlan(e.target.value);
    };

    const handleWeightChange = e => {
        setWeight(e.target.value);
    };

    const handleAgeChange = e => {
        setAge(e.target.value);
    };

    const checkInputs = () => {
        if (weight && age) {
            return true;
        }
        return false;
    };

    const calculateCaloricNeeds = () => {
        if (checkInputs()) {
            const calorieValues = {
                'Lose weight': 1800,
                'Gain Muscle Mass': 2500,
                'Get Shredded': 2200,
            };

            const selectedCalories = calorieValues[selectedPlan];

            const weightFactor = 10;
            const ageFactor = 5;

            const calculatedCaloricNeeds = selectedCalories + weight * weightFactor - age * ageFactor;

            setCaloricNeeds(calculatedCaloricNeeds);
            setErrorMessage('');
        } else {
            setErrorMessage('Please provide valid inputs for weight and age.');
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                }
            },
            { threshold: .5}
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <div className="w-full h-full flex items-center flex-col md:flex-row overflow-hidden relative">
            <div className="w-full md:w-2/3 h-full flex items-center flex-col">
                <div className="w-full h-full plans flex flex-col justify-center items-center md:flex-row">
                    <div className="plan flex flex-col">
                        <img src={man3} className="w-1/4" alt="lose weight" />
                        <input
                            type="radio"
                            id="loseWeight"
                            name="selectedPlan"
                            value="Lose weight"
                            onChange={handlePlanChange}
                            checked={selectedPlan === 'Lose weight'}
                        />
                        <label htmlFor="loseWeight">Lose weight</label>
                    </div>
                    <div className="plan flex flex-col">
                        <img src={man1} className="w-1/4" alt="gain muscle" />
                        <input
                            type="radio"
                            id="gainMuscle"
                            name="selectedPlan"
                            value="Gain Muscle Mass"
                            onChange={handlePlanChange}
                            checked={selectedPlan === 'Gain Muscle Mass'}
                        />
                        <label htmlFor="gainMuscle">Gain Muscle Mass</label>
                    </div>
                    <div className="plan flex flex-col">
                        <img src={man2} className="w-1/4" alt="get shredded" />
                        <input
                            type="radio"
                            id="getShredded"
                            name="selectedPlan"
                            value="Get Shredded"
                            onChange={handlePlanChange}
                            checked={selectedPlan === 'Get Shredded'}
                        />
                        <label htmlFor="getShredded">Get Shredded</label>
                    </div>
                </div>
                <div className="input-fields space-y-2 flex items-center flex-col">
                    <Formik initialValues={initialValues} validate={validate} onSubmit={calculateCaloricNeeds}>
                        {() => (
                            <Form>
                                <div className="input-fields space-y-2 flex items-center flex-col">
                                    <label htmlFor="weight" className="text-white">
                                        Weight (in kg):
                                    </label>
                                    <div className='h-16'>
                                    <Field
                                        type="number"
                                        id="weight"
                                        name="weight"
                                        min="0"
                                        onKeyUp={handleWeightChange}
                                        className="border rounded-md py-2 px-3 text-center mb-1"
                                    />
                                    <ErrorMessage name="weight" component="div" className="text-red-600" />
                                    </div>
                                    <label htmlFor="age" className="text-white">
                                        Age:
                                    </label>
                                    <div className='h-16'>
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
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="relative w-full">
                    {errorMessage && (
                        <div className="absolute top-0 left-0 w-full text-red-600 mt-4 text-center">{errorMessage}</div>
                    )}
                </div>
                <button
                    onClick={calculateCaloricNeeds}
                    className="bg-yellow-500 hover:bg-yellow-700 flex items-center justify-center text-gray-900 font-bold py-2 px-4 rounded-xl mt-16"
                >
                    Calculate Caloric Demand
                </button>
                <div className="mt-10 text-xl text-center h-10 flex items-center justify-center">
                    {caloricNeeds !== null && (
                        <div className="text-white">
                            Your estimated caloric needs {caloricNeeds} kcal per day
                        </div>
                    )}
                </div>
            </div>
            <motion.div
                className="w-full md:w-1/3 h-full p-10"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: .7 } },
                }}
            >
                <h2 className="text-5xl md:text-6xl xxl:text-7xl font-bold text-white">
                    Just stay focused <br /> and disciplined
                    
                </h2>
                <p className="mt-8 md:mt-16 text-white text-lg md:text-xl xl:text-xl">
				You have already determined your caloric goal, now you just need to stick to the plan and monitor your caloric intake.
                </p>
            </motion.div>
        </div>
    );
}

export default Goal;

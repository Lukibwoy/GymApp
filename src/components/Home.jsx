import React, { useState } from 'react'
import headerPhoto from './images/header-photo.jpg'
import { useRef } from 'react'
import Headline from './Headline'
import Goal from './Goals/Goal'
import Meals from './Meals/MealsList'
import { useTypewriter } from 'react-simple-typewriter'
import Footer from './Footer'
import GoalInfo from './Goals/GoalInfo'
import GoalSummary from './Goals/GoalSummary'
export default function Home() {
	const ref = useRef(null)

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' })
	}

	const [typeEffect] = useTypewriter({
		words: [' Fitness', 'Nutrition'],
		loop: {},
		typeSpeed: 80,
		deleteSpeed: 40,
	})
	const [caloricNeeds, setCaloricNeeds] = useState(null)

	return (
		<div id="home">
			<div className="w-full h-full  flex justify-between flex-col items-center  md:flex-row">
				<div className="w-2/3 md:w-3/5 md:ml-20 h-full">
					<h1 className="text-5xl md:text-6xl xxl:text-8xl font-bold text-white">
						<span>{typeEffect}</span>
						<br />
						Assistant
					</h1>
					<p className="mt-5 text-white text-lg md:text-xl xl:text-2xl">
						In here we will help you to shape and build your ideal body and live up your life to fullest
					</p>
					<button
						onClick={handleClick}
						class="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold md:text-lg xxl:text-xl xxl:py-4 xxl:px-8 py-2 px-4  rounded-xl mt-10 ">
						Get Started
					</button>
				</div>
				<div className=" w-full xl:w-3/5 h-full flex">
					<img
						className="header-photo w-full md:w-4/6 h-full md:ml-40 object-cover mt-10 shadow-2xl opacity-80 "
						src={headerPhoto}
						alt="man muscles"
					/>
				</div>
			</div>
			<Headline ref={ref} />
			<GoalInfo />
			<Goal caloricNeeds={caloricNeeds} setCaloricNeeds={setCaloricNeeds} />
			<Meals caloricNeeds={caloricNeeds} />
			<GoalSummary />
			<Footer />
		</div>
	)
}

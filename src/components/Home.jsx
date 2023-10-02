import React from 'react'
import headerPhoto from './header-photo.jpg'
import { useRef } from 'react';
import Headline from './Headline'
import Foods from './Foods';
import Meals from './Meals/MealsList';
export default function Home() {

	const ref = useRef(null);

	const handleClick = () => {
	  ref.current?.scrollIntoView({behavior: 'smooth'});
	};

	return (
		<div>
			<div className="w-full h-screen bg-gradient-to-r from-violet-800 bg-white-500 flex justify-center items-center bg-gray-900 overflow-hidden md:flex-row">
				<div className="w-1/2 ml-20">
					<h1 className="text-5xl md:text-7xl  font-bold text-white">
						Fitness
						<br />
						Manager
					</h1>
					<p className="mt-5 text-white">
						In here we will help you to shape and build your ideal body and live up your life to fullest
					</p>
					<button onClick={handleClick} class="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-2 px-4 rounded-xl mt-10">
						Get Started
					</button>
				</div>
				<div className="hidden md:block w-1/2 h-full">
					<img className="header-photo w-4/6 25px mt-10 shadow-2xl opacity-80" src={headerPhoto} alt="man muscles" />
				</div>
			</div>
					<Headline ref={ref}/>
			<Foods />
				<Meals />
		</div>
	)
}

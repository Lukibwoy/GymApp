import React from 'react'

export default function Foods() {
	return (
		<div className="w-full h-screen bg-gradient-to-r from-violet-800 bg-white-500 flex items-center flex-col bg-gray-900 overflow-hidden">
			<div className="text-white text-xl flex justify-center items-center font-bold text-2xl">Choose your goal</div>
			<div className="plans flex justify-center items-center">
				<div className="plan">Lose weight</div>
				<div className="plan">Gain Muscle Mass</div>
				<div className="plan">Get Shredded</div>
			</div>
		</div>
	)
}

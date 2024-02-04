import { motion } from 'framer-motion'
import weightlifter from '../images/weightlifter.png'

function GoalSummary() {
	return (
		<div className="w-full h-full  flex items-center   overflow-hidden p-5 md:p-5 mt-7">
			<motion.div
				className=" w-full border-2 border-yellow-600 rounded-xl md:m-5 flex flex-col md:flex-row"
				initial={{ opacity: 0, x: -100, y: -100 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={{ duration: 0.5, type: 'spring', stiffness: 250 }}>
				<div className="w-full md:w-2/3 max-w-7xl text-center text-white p-3 md:p-10 flex flex-col">
					<h2 className="text-4xl lg:text-5xl font-bold mb-4">Unlocking Your Full Potential</h2>
					<p className="text-lg mt-5 md:p-10 md:text-2xl">
						Embracing a fitness goal is not just about setting an objective; it's about embarking on a journey to unlock
						your full potential. To succeed, you need three essential ingredients: motivation, discipline, and
						unwavering commitment.
					</p>
					<p className="text-lg mt-3 md:p-5 md:text-2xl">
						Whether you want to gain muscle mass, lose weight, or improve your physical fitness, defining a goal will
						allow you to develop a more effective exercise and dietary plan.
					</p>
				</div>
				<div className="w-full md:w-2/5">
					<img
						className="md:w-full w-full p-3 h-full object-cover opacity-90 rounded-xl"
						src={weightlifter}
						alt="progress"
					/>
				</div>
			</motion.div>
		</div>
	)
}

export default GoalSummary

// import React from 'react'
// import { motion } from 'framer-motion'

// export default function GoalSummary() {
// 	return (
// 		<div className="w-full h-full  flex items-center flex-col mt-5 overflow-hidden p-5 md:p-10">
// 			<motion.div
// 				className="border-2 border-yellow-600 rounded-xl md:m-5 w-full"
// 				initial={{ opacity: 0, x: -100, y: -100 }}
// 				animate={{ opacity: 1, x: 0, y: 0 }}
// 				transition={{ duration: 0.5, type: 'spring', stiffness: 250 }}>
// 				<div className="w-full  text-center text-white p-3 md:p-10">
// 					<h2 className="text-4xl lg:text-5xl font-bold mb-4">Unlocking Your Full Potential</h2>
// 					<p className="text-lg mt-5 md:p-10 md:text-2xl">
// 						Embracing a fitness goal is not just about setting an objective; it's about embarking on a journey to unlock
// 						your full potential. To succeed, you need three essential ingredients: motivation, discipline, and
// 						unwavering commitment.
// 					</p>
// 					<p className="text-lg mt-5 md:p-5 md:text-2xl">
// 						Motivation is the driving force behind your fitness aspirations. It's what propels you forward when the
// 						going gets tough. Discipline is your steadfast companion, ensuring that you stick to your fitness regimen
// 						even on the most challenging days. And commitment is the promise you make to yourself to follow through, no
// 						matter what obstacles come your way.
// 					</p>
// 				</div>
// 			</motion.div>
// 		</div>
// 	)
// }

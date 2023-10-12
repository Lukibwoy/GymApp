import React from 'react'
import { motion } from 'framer-motion'

export default function GoalSummary() {
	return (
		<div className="w-full h-full bg-gradient-to-r from-violet-800 bg-white-500 flex items-center flex-col bg-gray-900 overflow-hidden p-10">
			<motion.div
				className="border-2 border-yellow-600 rounded-xl m-6"
				initial={{ opacity: 0, x: -100, y: -100 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={{ duration: 0.5, type: 'spring', stiffness: 250 }}>
				<div className="w-full max-w-7xl text-center text-white p-10">
					<h2 className="text-4xl font-bold mb-4">Unlocking Your Full Potential</h2>
					<p className="text-2xl mt-5 p-10">
						Embracing a fitness goal is not just about setting an objective; it's about embarking on a journey to unlock
						your full potential. To succeed, you need three essential ingredients: motivation, discipline, and
						unwavering commitment.
					</p>
					<p className="text-2xl mt-6">
						Motivation is the driving force behind your fitness aspirations. It's what propels you forward when the
						going gets tough. Discipline is your steadfast companion, ensuring that you stick to your fitness regimen
						even on the most challenging days. And commitment is the promise you make to yourself to follow through, no
						matter what obstacles come your way.
					</p>
				</div>
			</motion.div>
		</div>
	)
}

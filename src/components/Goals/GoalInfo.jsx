import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

function GoalInfo({ text }, ref) {
	return (
		<div className="w-full h-full bg-gradient-to-r from-violet-800 bg-white-500 flex items-center flex-col bg-gray-900 overflow-hidden p-10">
			<motion.div
				className=" border-2 border-yellow-600 rounded-xl m-5"
				initial={{ opacity: 0, x: -100, y: -100 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={{ duration: 0.5, type: 'spring', stiffness: 250 }}>
				<div className="w-full max-w-7xl text-center text-white p-10">
					<h2 ref={ref} className="text-4xl font-bold mb-4">
						Why Choose a Fitness Goal? {text}
					</h2>
					<p className="text-2xl mt-5 p-10">
						By setting a specific fitness goal, you can focus more on your aspirations and achieve better results. This
						helps you stay motivated and track your progress towards your fitness and healthy lifestyle goals.
					</p>
					<p className="text-2xl mt-6">
						Whether you want to gain muscle mass, lose weight, or improve your physical fitness, defining a goal will
						allow you to develop a more effective exercise and dietary plan.
					</p>
				</div>
			</motion.div>
		</div>
	)
}

export default forwardRef(GoalInfo)

import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import progress from '../images/progress.jpg'

function GoalInfo({ text }, ref) {
	return (
		<div className="w-full h-full  flex items-center   overflow-hidden p-5 md:p-10 mt-7">
			<motion.div
				className=" w-full border-2 border-yellow-600 rounded-xl md:m-5 flex flex-col-reverse md:flex-row"
				initial={{ opacity: 0, x: -100, y: -100 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={{ duration: 0.5, type: 'spring', stiffness: 250 }}>
				<div className="w-full md:w-1/3">
					<img className="md:w-full h-full object-cover opacity-90 rounded-xl" src={progress} alt="progress" />
				</div>
				<div className="w-full md:w-2/3  max-w-7xl text-center text-white p-3 md:p-10 flex flex-col">
					<h2 ref={ref} className="text-4xl lg:text-5xl font-bold mb-4">
						Why Choose a Fitness Goal? {text}
					</h2>
					<p className="text-lg mt-5 md:p-10 md:text-2xl">
						By setting a specific fitness goal, you can focus more on your aspirations and achieve better results. This
						helps you stay motivated and track your progress towards your fitness and healthy lifestyle goals.
					</p>
					<p className="text-lg mt-3 md:p-5 md:text-2xl">
						Whether you want to gain muscle mass, lose weight, or improve your physical fitness, defining a goal will
						allow you to develop a more effective exercise and dietary plan.
					</p>
				</div>
			</motion.div>
		</div>
	)
}

export default forwardRef(GoalInfo)

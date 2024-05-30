import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import progress from '../images/progress.jpg'

function GoalInfo({ text }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false })

	return (
		<div className="w-full h-1/2 flex items-center overflow-hidden p-5 md:p-10 mt-7">
			<motion.div
				ref={ref}
				className="w-full border-2 border-yellow-600 rounded-xl md:m-5 flex flex-col-reverse lg:flex-row"
				initial={{ opacity: 0, x: -100, y: -100 }}
				animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -100, y: -100 }}
				transition={{ duration: 0.5,  stiffness: 250, delay: 0.5}}>
				<div className="w-full lg:w-1/3">
					<img className="md:w-full h-full object-cover opacity-90 rounded-xl" src={progress} alt="progress" />
				</div>
				<div className="w-full lg:w-2/3 max-w-7xl text-center text-white p-3 lg:p-10 flex flex-col">
					<h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose a Fitness Goal? {text}</h2>
					<p className="text-lg mt-5 lg:p-10 lg:text-2xl">
						By setting a specific fitness goal, you can focus more on your aspirations and achieve better results. This
						helps you stay motivated and track your progress towards your fitness and healthy lifestyle goals.
					</p>
					<p className="text-lg mt-3 lg:p-5 lg:text-2xl">
						Whether you want to gain muscle mass, lose weight, or improve your physical fitness, defining a goal will
						allow you to develop a more effective exercise and dietary plan.
					</p>
				</div>
			</motion.div>
		</div>
	)
}

export default GoalInfo

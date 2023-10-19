import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

function GoalInfo({ text }, ref) {
	return (
		<div className="w-full h-full bg-gradient-to-r from-violet-800 bg-white-500 flex items-center flex-col bg-gray-900 overflow-hidden p-10">
			<motion.div
				className=" border-2 border-yellow-600 rounded-xl md:m-5"
				initial={{ opacity: 0, x: -100, y: -100 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={{ duration: 0.5, type: 'spring', stiffness: 250 }}>
				<div className="w-full max-w-7xl text-center text-white p-10">
					<h2 ref={ref} className="text-4xl lg:text-5xl font-bold mb-4">
						Why Choose a Fitness Goal? {text}
					</h2>
					<p className="text-lg mt-5 md:p-10 md:text-2xl">
						By setting a specific fitness goal, you can focus more on your aspirations and achieve better results. This
						helps you stay motivated and track your progress towards your fitness and healthy lifestyle goals.
					</p>
					<p className="text-lg mt-5 md:p-10 md:text-2xl">
						Whether you want to gain muscle mass, lose weight, or improve your physical fitness, defining a goal will
						allow you to develop a more effective exercise and dietary plan.
					</p>
				</div>
			</motion.div>
		</div>
	)
}

export default forwardRef(GoalInfo)
// export default forwardRef(GoalInfo)
// import React, { forwardRef } from 'react'
// import { motion } from 'framer-motion'
// import headerPhoto from '../images/header-photo.jpg'

// function GoalInfo({ text }, ref) {
// 	return (
// 		<div id='plans' className="w-full h-full bg-gradient-to-r from-violet-800 bg-white-500 flex items-center flex-col bg-gray-900 overflow-hidden p-10">
// 			<motion.div
// 				className=" border-2 border-yellow-600 rounded-xl md:m-5"
// 				initial={{ opacity: 0, x: -100, y: -100 }}
// 				animate={{ opacity: 1, x: 0, y: 0 }}
// 				transition={{ duration: 0.5, type: 'spring', stiffness: 250 }}>
// 				<div className="flex flex-col md:flex-row">
					
// 					<div className="w-full first-letter	 lg:w-1/5 h-auto">
// 						<img className="header-photo w-full h-auto" src={headerPhoto} alt="man muscles" />
// 					</div>
// 					<div className="w-4/5 max-w-7xl text-center text-white p-10">
// 						<h2 ref={ref} className="text-4xl lg:text-5xl font-bold mb-4">
// 							Why Choose a Fitness Goal? {text}
// 						</h2>
// 						<p className="text-lg mt-10 md:text-2xl">
// 							By setting a specific fitness goal, you can focus more on your aspirations and achieve better results.
// 							This helps you stay motivated and track your progress towards your fitness and healthy lifestyle goals.
// 						</p>
// 						<p className="text-lg mt-10 md:text-2xl">
// 							Whether you want to gain muscle mass, lose weight, or improve your physical fitness, defining a goal will
// 							allow you to develop a more effective exercise and dietary plan.
// 						</p>
// 						<p className="text-lg mt-20 md:text-4xl">
// 						Now it's up to you what you do with it!
// 						</p>
// 					</div>
// 				</div>
// 			</motion.div>
// 		</div>
// 	)
// }

// export default forwardRef(GoalInfo)

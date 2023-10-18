import React from 'react'
import { BsGithub } from 'react-icons/bs'
export default function Footer() {
	return (
		<footer id='contact' className="bg-gradient-to-r from-violet-700 to-violet-900 text-white">
			<div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7">
				<h1
					className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
           md:w-2/5">	
					<span className="text-yellow-400">The</span> only bad workout is the one that didn't happen
				</h1>
				<div>
					<input
						type="text"
						placeholder="Enter Your Email.."
						className="text-gray-800
             sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
					/>
					<button className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-2 px-4 rounded-xl mt-10">
						Send
					</button>
				</div>
			</div>
			<div className="flex justify-center items-center gap-[20%] mt-4 md:mt-0">
				<a href="https://github.com/Lukibwoy" target="blank">
					<BsGithub size={30} className="lg:w-[3rem] xl:w-[4rem]" />
				</a>
			</div>
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
        text-center pt-2 text-gray-400 text-sm pb-8">
				<span>© 2023 All rights reserved.</span>
				<span>Created by Łukasz Wilczyński</span>
			</div>
		</footer>
	)
}

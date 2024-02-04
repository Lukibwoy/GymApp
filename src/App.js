import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'
const App = () => {
	return (
		<div className='bg-gradient-to-r from-violet-800 bg-white-500 bg-gray-900'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App

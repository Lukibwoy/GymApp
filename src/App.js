import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Plans from './components/Plans'
import Contact from './components/Contact'
import './App.css'
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="plans" element={<Plans />} />
					<Route path="contact" element={<Contact />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App

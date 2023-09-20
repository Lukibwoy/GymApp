import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App

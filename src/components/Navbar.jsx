import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import Logo from './Logo'

const NavLinks = () => {
	return (
		<div className="md:flex space-x-20">
			<NavLink to="/" exact className="text-white hover:text-black">
				HOME
			</NavLink>
			<NavLink to="/plans" className="text-white hover:text-black">
				PLANS
			</NavLink>
			<NavLink to="/contact" className="text-white hover:text-black">	
				CONTACT
			</NavLink>
		</div>
	)
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const ToggleNav = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className="bg-violet-900 p-3 ">
			<div className="container mx-auto flex justify-between items-center">
				<Logo />
				<div className="md:flex hidden ">
					<NavLinks />
				</div>
				<div className="md:hidden">
					<button onClick={ToggleNav}>
						{isOpen ? <X className="text-white" size="32" /> : <Menu className="text-white" size="32" />}
					</button>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden">
					<div className="flex flex-col space-y-12 mt-4">
						<NavLink to="/" exact className="text-white hover:text-black-300" activeClassName="font-bold">
							HOME
						</NavLink>
						<NavLink to="/plans" className="text-white hover:text-black-300" activeClassName="font-bold">
							PLANS
						</NavLink>
						<NavLink to="/contact" className="text-white hover:text-black-300" activeClassName="font-bold">
							CONTACT
						</NavLink>
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar

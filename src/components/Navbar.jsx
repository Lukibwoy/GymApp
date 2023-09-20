import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const NavLinks = () => {
	return (
		<div>
			<NavLink to="about">About</NavLink>
			<NavLink to="plans">Plans</NavLink>
			<NavLink to="contact">Contact</NavLink>
		</div>
	)
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const ToggleNav = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav>
			<Logo />
		</nav>
	)
}

export default Navbar

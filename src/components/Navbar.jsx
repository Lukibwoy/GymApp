import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { Link } from 'react-scroll'
import Logo from './Logo'

const NavLinksMobile = ({ closeNav }) => {
	const mobileClasses = 'text-white hover:text-black-300 font-bold'

	return (
		<div  className="fixed top-0 right-0 w-64 h-full bg-gray-900 opacity-90 p-4 z-50 transition-transform duration-300 transform translate-x-0">
			<button onClick={closeNav} className="absolute top-8 right-1">
				<X className="text-white" size="32" />
			</button>
			<div className="flex flex-col space-y-12 mt-4">
				<NavLink to="/" exact className={mobileClasses} activeClassName="font-bold" onClick={closeNav}>
					<Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
						Home
					</Link>
				</NavLink>
				<NavLink to="/plans" className={mobileClasses} activeClassName="font-bold" onClick={closeNav}>
					<Link activeClass="active" to="plans" spy={true} smooth={true} offset={50} duration={500}>
						Plans
					</Link>
				</NavLink>
				<NavLink to="/contact" className={mobileClasses} activeClassName="font-bold" onClick={closeNav}>
					<Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
						Contact
					</Link>
				</NavLink>
			</div>
		</div>
	)
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleNav = () => {
		setIsOpen(!isOpen)
	}

	const closeNav = () => {
		setIsOpen(false)
	}

	return (
		<div>
			<nav className="bg-gradient-to-r from-violet-800 bg-white-500 bg-gray-900 p-1">
				<div className="container mx-auto flex justify-between items-center">
					<Logo />
					<div className="md:flex hidden">
						<div className="flex space-x-20 mr-20">
							<NavLink to="/" className="text-white hover:text-black" activeClassName="font-bold">
								<Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500}>
									Home
								</Link>
							</NavLink>
							<NavLink to="/plans" className="text-white hover:text-black" activeClassName="font-bold">
								<Link activeClass="active" to="plans" spy={true} smooth={true} offset={50} duration={500}>
									Plans
								</Link>
							</NavLink>
							<NavLink to="/contact" className="text-white hover:text-black" activeClassName="font-bold">
								<Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
									Contact
								</Link>
							</NavLink>
						</div>
					</div>
					<div className="md:hidden">
						<button onClick={toggleNav}>
							{isOpen ? <X className="text-white" size="32" /> : <div className="text-white text-2xl">☰</div>}
						</button>
					</div>
				</div>
			</nav>

			{isOpen && <NavLinksMobile closeNav={closeNav} />}
		</div>
	)
}

export default Navbar

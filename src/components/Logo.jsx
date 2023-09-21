import React from 'react'
import logo from './logo.jpg'
export default function Logo() {
	return (
		<div className="logo h-16 w-16">
		<img src={logo} alt="logo" className='rounded-full'/>
		</div>
	)
}

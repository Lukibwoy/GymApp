import React from 'react'
import logo from './images/logo2.svg'
export default function Logo() {
	return (
		<div className="logo h-24 w-24">
			<img src={logo} alt="logo" className="rounded-full" />
		</div>
	)
}

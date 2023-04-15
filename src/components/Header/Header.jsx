import React from 'react'
import './Header.scss'
import Navbar from '../../features/nav/Navbar/Navbar'

const Header = () => {
	return (
		<header>
			<div className="wrapper">
				<div className="logo-container">
					<img src="src\assets\shoppy-logo.png" alt="" className="logo" />
				</div>
				<Navbar />
			</div>
		</header>
	)
}

export default Header

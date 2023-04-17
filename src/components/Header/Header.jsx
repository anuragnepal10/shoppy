import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Navbar from '../../features/nav/Navbar/Navbar'

const Header = () => {
	return (
		<header>
			<div className="wrapper">
				<Link to="/" className="logo-container">
					<img src="assets/shoppy-logo.png" alt="" className="logo" />
				</Link>
				<Navbar />
			</div>
		</header>
	)
}

export default Header

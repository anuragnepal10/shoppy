import React, { useEffect } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
	const nav = useSelector((state) => state.nav.active)

	const navClassFinder = (page) => {
		if (page === nav) {
			return ' active'
		} else {
			return ''
		}
	}

	return (
		<nav>
			<Link to="/" className={`link ${navClassFinder('home')}`}>
				Home
			</Link>
			<Link to="/cart" className={`link ${navClassFinder('cart')}`}>
				Cart
			</Link>
			<Link to="/about" className={`link ${navClassFinder('about')}`}>
				About
			</Link>
		</nav>
	)
}

export default Navbar

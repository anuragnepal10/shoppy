import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer>
			<div className="wrapper">
				<nav>
					<Link to="/" className="link">
						Home
					</Link>
					<span>&#x2022;</span>
					<Link to="/cart" className="link">
						Cart
					</Link>
					<span>&#x2022;</span>
					<Link to="/about" className="link">
						About
					</Link>
				</nav>
				<p className="copyright">Anurag Nepal &copy; 2023</p>
			</div>
		</footer>
	)
}

export default Footer

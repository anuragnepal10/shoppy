import React from 'react'
import './Footer.scss'

const Footer = () => {
	return (
		<footer>
			<div className="wrapper">
				<nav>
					<a href="" className="link">
						Home
					</a>
					<span>&#x2022;</span>
					<a href="" className="link">
						Cart
					</a>
					<span>&#x2022;</span>
					<a href="" className="link">
						About
					</a>
				</nav>
				<p className="copyright">Anurag Nepal &copy; 2023</p>
			</div>
		</footer>
	)
}

export default Footer

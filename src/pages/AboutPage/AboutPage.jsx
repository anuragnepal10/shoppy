import React from 'react'
import './AboutPage.scss'
import { useNavbar } from '../../hooks/useNavbar'

const AboutPage = () => {
	useNavbar('About')
	return (
		<div className="wrapper">
			<h1 className="page-title">About</h1>
			<p className="about-text">
				Shoppy is a modern and user-friendly e-commerce website built using
				React and Redux Toolkit. It was created with the main goal of practicing
				these technologies while also improving project management skills.
			</p>
			<p className="about-text">
				The website features a sleek and responsive design that allows users to
				easily navigate through different categories of products. With the use
				of the Saas (CSS preprocessor), the website is aesthetically pleasing
				with clean and well-organized code.
			</p>
			<a
				href="https://github.com/anuragnepal10?tab=repositories"
				className="about-link"
			>
				View my previous works here
			</a>
		</div>
	)
}

export default AboutPage

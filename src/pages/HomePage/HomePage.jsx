import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import Searchbar from '../../features/search/Searchbar/Searchbar'

const HomePage = () => {
	useNavbar('home')

	return (
		<div className="wrapper">
			<h1 className="page-title">All Products</h1>
			<Searchbar />
		</div>
	)
}

export default HomePage

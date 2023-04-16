import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import Searchbar from '../../features/search/Searchbar/Searchbar'
import ProductContainer from '../../features/product/ProductContainer/ProductContainer'

const HomePage = () => {
	useNavbar('Home')

	return (
		<div className="wrapper">
			<h1 className="page-title">All Products</h1>
			<Searchbar />
			<ProductContainer />
		</div>
	)
}

export default HomePage

import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import Searchbar from '../../features/search/Searchbar/Searchbar'
import ProductContainer from '../../features/product/ProductContainer/ProductContainer'
import { useSelector } from 'react-redux'
import ErrorMessage from '../ErrorPage/ErrorMessage'
import { ScrollRestoration } from 'react-router-dom'

const HomePage = () => {
	useNavbar('Home')
	const { isLoading, products, error } = useSelector((state) => state.product)

	return isLoading ? (
		<div className="wrapper">
			<h1 className="page-title">Loading...</h1>
			<Searchbar />
		</div>
	) : error ? (
		<ErrorMessage message={error} />
	) : (
		<div className="wrapper">
			<h1 className="page-title">All Products</h1>
			<Searchbar />
			<ProductContainer products={products} />
		</div>
	)
}

export default HomePage

import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import Searchbar from '../../features/search/Searchbar/Searchbar'
import './HomePage.scss'
import ProductContainer from '../../features/product/ProductContainer/ProductContainer'
import { useSelector } from 'react-redux'
import ErrorMessage from '../ErrorPage/ErrorMessage'

const HomePage = () => {
	useNavbar('Home')
	const { isLoading, products, error } = useSelector((state) => state.product)
	const searchValue = useSelector((state) => state.search.value)

	const searchItems = products.filter((product) =>
		product.title.toLowerCase().includes(searchValue.toLowerCase())
	)

	return isLoading ? (
		<div className="wrapper">
			<h1 className="page-title">Loading...</h1>
			<Searchbar searchValue={searchValue} />
		</div>
	) : error ? (
		<ErrorMessage message={error} />
	) : products.length !== 0 ? (
		<div className="wrapper">
			<h1 className="page-title">All Products</h1>
			<Searchbar searchValue={searchValue} />
			{searchItems.length === 0 ? (
				<h3 className="empty-search">No Items to Display</h3>
			) : (
				<ProductContainer products={searchItems} />
			)}
		</div>
	) : null
}

export default HomePage

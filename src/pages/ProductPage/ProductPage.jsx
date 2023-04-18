import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import ProductDetailContainer from '../../features/product/ProductDetailContainer/ProductDetailContainer'
import ErrorMessage from '../ErrorPage/ErrorMessage'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductPage = () => {
	useNavbar('Product')

	const { id } = useParams()
	const { isLoading, products, error } = useSelector((state) => state.product)
	const product = products.find((product) => product.id.toString() === id)
	const loadingProduct = {
		title: 'Product Title is Loading...',
		description: 'Product Description is Loading...',
		price: '0.00',
		rating: {
			rate: '0.0',
			count: '0',
		},
	}

	return isLoading ? (
		<div className="wrapper">
			<h1 className="page-title">Loading...</h1>
			<ProductDetailContainer product={loadingProduct} />
		</div>
	) : error ? (
		<div className="wrapper">
			<ErrorMessage message={error} />
		</div>
	) : products.length ? (
		<div className="wrapper">
			<h1 className="page-title">Product Details</h1>

			<ProductDetailContainer
				product={products.find((product) => product.id.toString() === id)}
			/>
		</div>
	) : null
}

export default ProductPage

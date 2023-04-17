import React, { useEffect } from 'react'
import './ProductContainer.scss'
import ProductCard from '../ProductCard/ProductCard'
import { fetchProducts } from '../productSlice'
import { useSelector, useDispatch } from 'react-redux'
import ErrorMessage from '../../../pages/ErrorPage/ErrorMessage'

const ProductContainer = () => {
	const dispatch = useDispatch()
	const { isLoading, products, error } = useSelector((state) => state.product)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return isLoading ? (
		<ErrorMessage message="Loading..." />
	) : error ? (
		<ErrorMessage message={error} />
	) : (
		<section className="product-container">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</section>
	)
}

export default ProductContainer

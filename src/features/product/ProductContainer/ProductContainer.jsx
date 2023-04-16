import React from 'react'
import './ProductContainer.scss'
import ProductCard from '../ProductCard/ProductCard'

const ProductContainer = () => {
	return (
		<section className="product-container">
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</section>
	)
}

export default ProductContainer

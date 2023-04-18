import React from 'react'
import './ProductContainer.scss'
import ProductCard from '../ProductCard/ProductCard'

import { Link } from 'react-router-dom'

const ProductContainer = ({ products }) => {
	return (
		<section className="product-container">
			{products.map((product) => (
				<Link
					key={product.id}
					className="product-card-link"
					to={`/product/${product.id}`}
				>
					<ProductCard product={product} />
				</Link>
			))}
		</section>
	)
}

export default ProductContainer

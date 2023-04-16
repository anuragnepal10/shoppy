import React from 'react'
import './QuantityToggler.scss'

const QuantityToggler = () => {
	return (
		<div className="quantity-toggler">
			<button className="btn disabled">-</button>
			<input type="number" />
			<button className="btn">+</button>
		</div>
	)
}

export default QuantityToggler

import React from 'react'
import './ErrorMessage.scss'

const ErrorMessage = ({ message }) => {
	return <h2 className="error-message">{message}</h2>
}

export default ErrorMessage

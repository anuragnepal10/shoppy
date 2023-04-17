import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import ErrorMessage from './ErrorMessage'
import './ErrorPage.scss'

const ErrorPage = () => {
	useNavbar('Error')
	return (
		<div className="wrapper error-wrapper">
			<ErrorMessage message="Page Not Found!" />
		</div>
	)
}

export default ErrorPage

import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import ErrorMessage from './ErrorMessage'

const ErrorPage = () => {
	useNavbar('Error')
	return <ErrorMessage />
}

export default ErrorPage

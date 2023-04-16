import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import ErrorMessage from './ErrorMessage'

const ErrorPage = () => {
	useNavbar('error')
	return <ErrorMessage />
}

export default ErrorPage

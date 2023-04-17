import { useWindowSize } from './useWindowSize'
import { useEffect, useState } from 'react'
import { reduceWord } from '../common/helper/reduceWord'

export const useTruncatedTitle = (title, maxLength, minLength, breakpoint) => {
	const { width } = useWindowSize()

	const adjustProductTitle = (title, maxLength, minLength, breakpoint) => {
		return width > breakpoint
			? reduceWord(title, maxLength)
			: reduceWord(title, minLength)
	}

	const [truncatedTitle, setTruncatedTitle] = useState(
		adjustProductTitle(title, maxLength, minLength, breakpoint)
	)

	useEffect(() => {
		setTruncatedTitle(
			adjustProductTitle(title, maxLength, minLength, breakpoint)
		)
	}, [width])

	return truncatedTitle
}

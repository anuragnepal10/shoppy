export const reduceWord = (word, length) => {
	if (word.split('').length <= length) {
		return word
	} else {
		return word.split('').slice(0, length).join('').trim() + '...'
	}
}

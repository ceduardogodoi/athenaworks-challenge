/**
 * It groups characters existing in an array of strings and returns its counting alongside the character.
 *
 * @param {string[]} stringArray An array of string characters `(regex: /./g)`.
 * @returns {{ letter: string, quantity: number }[]} An array of objects containing the `letter` and the `quantity` it has repeated.
 */
function sortByCharacterQuantity(stringArray) {
	const array = stringArray.reduce((accumulator, currentValue) => {
		const quantity = stringArray.filter(
			character => character === currentValue
		).length

		accumulator.push(`{ "letter": "${currentValue}", "quantity": ${quantity} }`)

		return accumulator
	}, [])

	const arraySet = new Set(array)

	const finalArray = Array.from(arraySet).map(JSON.parse)

	finalArray.sort((prev, next) => prev.quantity - next.quantity)

	return finalArray
}

module.exports = { sortByCharacterQuantity }

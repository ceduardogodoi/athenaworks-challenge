const { sortByCharacterQuantity } = require('./util')

describe('it returns an object array with characters and its quantities', () => {
	it('should return 1 "a", 2 "b" and 3 "C" characters', () => {
		const result = sortByCharacterQuantity(['a', 'b', 'b', 'C', 'C', 'C'])

		expect(result).toStrictEqual([
			{
				letter: 'a',
				quantity: 1
			},
			{
				letter: 'b',
				quantity: 2
			},
			{
				letter: 'C',
				quantity: 3
			}
		])
	})

	it('should return 3 "x", 2 "1" and 5 "_" characters', () => {
		const result = sortByCharacterQuantity([
			'1',
			'x',
			'x',
			'_',
			'x',
			'1',
			'_',
			'_',
			'_',
			'_'
		])

		expect(result).toStrictEqual([
			{
				letter: '1',
				quantity: 2
			},
			{
				letter: 'x',
				quantity: 3
			},
			{
				letter: '_',
				quantity: 5
			}
		])
	})
})

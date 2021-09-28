const { sortByCharacterQuantity } = require('./util')

const str = 'aoNHQATeMNLuWC4vMdGgQpqMge7bit'
const array = str.split('')

const result = sortByCharacterQuantity(array)
console.log(result)

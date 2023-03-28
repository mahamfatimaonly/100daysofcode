//calculateDiscountedPrice that takes two arguments, price and discountPercentage, and returns the discounted price.
function calculateDiscountedPrice(price, discountPercentage) {
  const discountAmount = (price * discountPercentage) / 100
  const discountedPrice = price - discountAmount
  return discountedPrice
}

// call the function with price=100 and discountPercentage=20
const discountedPrice = calculateDiscountedPrice(100, 20)

console.log(discountedPrice) // prints 80

//formatDate that takes a Date object and returns a formatted string in the format "DD/MM/YYYY".
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

// call the function with a date object
const formattedDate = formatDate(new Date())

console.log(formattedDate) // prints a formatted date string

function sumArray(numbers) {
  let sum = 0
  for (const number of numbers) {
    sum += number
  }
  return sum
}
const numbers = [1, 2, 3, 4, 5] //all the function with an array of numbers
const sum = sumArray(numbers)
console.log(sum) // prints 15

//filterArray that takes an array of objects and a function as arguments, and returns an array of objects that pass the filter function.
function filterArray(objects, filterFunction) {
  const filteredObjects = []
  for (const object of objects) {
    if (filterFunction(object)) {
      filteredObjects.push(object)
    }
  }
  return filteredObjects
}
// example filter function that returns objects with age greater than 18
function filterByAge(object) {
  return object.age > 18
}
// example array of objects
const people = [
  { name: 'maham', age: 13 },
  { name: 'fatima', age: 20 },
  { name: 'zainab', age: 15 },
]
// call the function with people array and filter function
const filteredPeople = filterArray(people, filterByAge)

console.log(filteredPeople) // prints [{ name: 'maham', age: 13 }]

//formatNumber that takes a number and a format string as arguments, and returns the formatted number string according to the format string.
function formatNumber(number, format) {
  const formattedNumber = number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return format.replace('$', formattedNumber)
}

// call the function with number=1000 and format="The price is $"
const formattedPrice = formatNumber(1000, 'The price is $')

console.log(formattedPrice) // prints "The price is $1,000.00"

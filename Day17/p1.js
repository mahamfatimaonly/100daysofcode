//Creating Private Variables and Methods
function createCounter() {
  let count = 0

  return {
    increment: function () {
      count++
    },
    getCount: function () {
      return count
    },
  }
}
const counter = createCounter()
counter.increment()
console.log(counter.getCount()) // Output: 1
//Implementing Closures for Memoization
function memoize(fn) {
  let cache = {}
  return function (...args) {
    let key = JSON.stringify(args)

    if (cache.hasOwnProperty(key)) {
      return cache[key]
    }
    let result = fn(...args)
    cache[key] = result

    return result
  }
}
function add(x, y) {
  console.log('Adding', x, y)
  return x + y
}
let memoizedAdd = memoize(add)
memoizedAdd(2, 3) // logs "Adding 2 3", returns 5
memoizedAdd(2, 3) // returns 5 (from cache)
//closures to implement a callback
function asyncTask(callback) {
  setTimeout(function () {
    callback('Hello, world!')
  }, 1000)
}
asyncTask(function (result) {
  console.log(result) // logs "Hello, world!"
})
//handle asynchronous
function asyncTask(callback) {
  setTimeout(function () {
    callback('Hello, world!')
  }, 1000)
}
function doTask() {
  let resultElement = document.getElementById('result')

  asyncTask(function (result) {
    resultElement.innerText = result
  })
}
// implement a private API
let api = (function () {
  let items = []

  function addItem(item) {
    items.push(item)
  }

  function getItems() {
    return items
  }

  return {
    addItem: addItem,
  }
})()

api.addItem('apple')
api.addItem('banana')
console.log(api.getItems()) // logs ["apple", "banana"]
console.log(api.items) // logs undefined
//implement a debounce function
function debounce(func, wait) {
  let timeoutId

  return function () {
    let context = this
    let args = arguments

    clearTimeout(timeoutId)

    timeoutId = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
function handleInput() {
  document.getElementById('result').innerText = this.value
}
let input = document.getElementById('myInput')
let debouncedHandleInput = debounce(handleInput, 500)
input.addEventListener('input', debouncedHandleInput)

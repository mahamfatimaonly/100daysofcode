//use bind() to pass a method as a callback function with a specific 'this' value in JavaScript
const obj = {
  name: 'Maham',
  age: 24,
  handleClick(event) {
    console.log(
      `Hi, my name is ${this.name} and 
       I am ${this.age} years old. The event is ${event.type}.`,
    )
  },
}
const button = document.querySelector('button')
button.addEventListener('click', obj.handleClick.bind(obj))
//create a curried function that takes any number of arguments
function sum(a, b, c, d) {
  return a + b + c + d
}
function curry(funn, ...args) {
  if (args.length === funn.length) {
    return funn(...args)
  }
  return (...moreArgs) => curry(funn, ...args, ...moreArgs)
}
const curriedSum = curry(sum)
console.log(curriedSum(1)(2)(3)(4)) // 10
console.log(curriedSum(1, 2)(3)(4)) // 10
console.log(curriedSum(1)(2, 3)(4)) // 10
console.log(curriedSum(1)(2)(3, 4)) // 10
//use bind() to create a memoized function in JavaScript
function fibonacci(n) {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
function memoize(fun) {
  const cache = {}
  return function (...args) {
    const key = args.toString()
    if (cache[key] === undefined) {
      cache[key] = fun.apply(this, args)
    }
    return cache[key]
  }
}
const memoizedFibonacci = memoize(fibonacci)
console.log(memoizedFibonacci(40)) // 102334155
console.log(memoizedFibonacci(40)) // 102334155 (from cache)

//use bind() to create a function that logs its arguments and return value
function add(x, y) {
  return x + y
}
function log(func) {
  return function (...args) {
    const result = func.apply(this, args)
    console.log(`[${func.name}] args: ${args} | result: ${result}`)
    return result
  }
}
const loggedAdd = log(add)
console.log(loggedAdd(2, 3)) // 5
//use bind() to create a function that throttles another function
function expensiveOperation() {
  console.log('Expensive operation performed!')
}
function throttle(func, delay) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
const throttledExpensiveOperation = throttle(expensiveOperation, 1000)
throttledExpensiveOperation()
throttledExpensiveOperation()
//using bind create a function that debounces another function
function saveChanges() {
  console.log('Changes saved!')
}
function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
const debouncedSaveChanges = debounce(saveChanges, 1000)
debouncedSaveChanges()
debouncedSaveChanges()
//use bind() to create a function that composes multiple functions
function addOne(x) {
  return x + 1
}
function double(x) {
  return x * 2
}
function compose(...funcs) {
  return function (x) {
    return funcs.reduceRight((acc, funcs) => funcs(acc), x)
  }
}
const composed = compose(double, addOne, double, addOne)
console.log(composed(3)) // 22

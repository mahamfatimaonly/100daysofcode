//Write a function that takes an array of URLs and returns a promise that resolves to an array of the response bodies of the corresponding URLs.
function fetchUrls(urls) {
  return Promise.all(urls.map((url) =>
  fetch(url).then((res) => res.text())))
}

fetchUrls([
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
])
  .then((responses) => console.log(responses))
  .catch((error) => console.error(error))
//function that takes a URL and a timeout value and returns a promise that resolves to the response body of the URL, or rejects with an error after the specified timeout:
function fetchWithTimeout(url, timeout) {
  return Promise.race([
    fetch(url).then((res) => res.text()),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), timeout),
    ),
  ])
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 2000)
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
//function that takes an array of values and a function that returns a promise, and returns a promise that resolves to an array of the results of applying the function to each value in the array:
function mapPromises(array, mapper) {
  return Promise.all(array.map(mapper))
}

mapPromises([1, 2, 3], (n) => Promise.resolve(n * 2))
  .then((results) => console.log(results))
  .catch((error) => console.error(error))
//function that takes an array of promises and returns a promise that resolves to an array of the resolved values of the promises, or rejects with the first rejected promise:
function allSettled(promises) {
  return Promise.all(promises.map((p) => 
  p.catch((error) => error)))
}
const promises = [
  Promise.resolve('foo'),
  Promise.reject(new Error('bar')),
  Promise.resolve('baz'),
]
allSettled(promises)
  .then((values) => console.log(values))
  .catch((error) => console.error(error.message))
//function that takes an array of objects, each containing a url property and a timeout property, and returns a promise that resolves to an array of the response bodies of the corresponding URLs, or rejects with an error after the specified timeout for each URL:
function fetchUrlsWithTimeout(urls) {
  return Promise.all(
    urls.map(({ url, timeout }) =>
      fetchWithTimeout(url, timeout).catch((error) => error.message),
    ),
  )
}
fetchUrlsWithTimeout([
  { url: 'https://jsonplaceholder.typicode.com/posts/1', timeout: 1000 },
  { url: 'https://jsonplaceholder.typicode.com/posts/2', timeout: 2000 },
])
  .then((responses) => console.log(responses))
  .catch((error) => console.error(error))
//function that takes an array of numbers and returns a promise that resolves to the sum of the numbers in the array, or rejects with an error if any of the values in the array are not numbers:
function sumNumbers(numbers) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(numbers)) {
      reject(new Error('Input is not an array'))
    } else if (numbers.some((num) => typeof num !== 'number')) {
      reject(new Error('Array contains non-numeric values'))
    } else {
      const sum = numbers.reduce((acc, num) => acc + num, 0)
      resolve(sum)
    }
  })
}
sumNumbers([1, 2, 3, 4, 5])
  .then((sum) => console.log(`The sum is ${sum}`))
  .catch((error) => console.error(error.message))

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
wait(1000) // Wait for 1 second
  .then(() => console.log('1 second has passed'))

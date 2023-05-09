//Fetching data from an API using async/await:
async function fetchDataFromAPI() {
  try {
    const response = await fetch('https://api.example.com/data')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
fetchDataFromAPI()
  .then((data) => {
    console.log('Data:', data)
    // Use the fetched data
  })
  .catch((error) => {
    console.error('Error:', error)
  })

//Parallel execution of multiple asynchronous tasks using Promise.all():
async function fetchDataFromMultipleSources() {
  try {
    const [data1, data2, data3] = await Promise.all([
      fetch('https://api.example.com/data1').then((response) =>
        response.json(),
      ),
      fetch('https://api.example.com/data2').then((response) =>
        response.json(),
      ),
      fetch('https://api.example.com/data3').then((response) =>
        response.json(),
      ),
    ])
    // Process the fetched data
    console.log('Data 1:', data1)
    console.log('Data 2:', data2)
    console.log('Data 3:', data3)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
fetchDataFromMultipleSources()

//Error handling with async/await:
async function fetchDataFromAPI() {
  try {
    const response = await fetch('https://api.example.com/data')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error // Rethrow the error for further handling
  }
}
fetchDataFromAPI()
  .then((data) => {
    console.log('Data:', data)
    // Use the fetched data
  })
  .catch((error) => {
    console.error('Error:', error)
    // Handle the error
  })
//Using async/await with setTimeout for delayed execution:
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function performDelayedTask() {
  console.log('Start')
  await delay(2000) // Wait for 2 seconds
  console.log('End')
}
performDelayedTask()

//Chaining multiple async/await functions:
async function fetchDataFromAPI1() {
  const response = await fetch('https://api.example.com/data1')
  const data = await response.json()
  return data
}
async function fetchDataFromAPI2() {
  const response = await fetch('https://api.example.com/data2')
  const data = await response.json()
  return data
}
async function processData() {
  const data1 = await fetchDataFromAPI1()
  const data2 = await fetchDataFromAPI2()
  // Process the fetched data
  console.log('Data 1:', data1)
  console.log('Data 2:', data2)
}
processData()

//Using async/await with try-catch for error handling in a loop:
async function fetchDataFromAPIs(apiUrls) {
  const results = []
  for (const apiUrl of apiUrls) {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      results.push(data)
    } catch (error) {
      console.error(`Error fetching data from ${apiUrl}:`, error)
    }
  }
  return results
}
const apiUrls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3',
]
fetchDataFromAPIs(apiUrls)
  .then((results) => {
    console.log('Results:', results)
    // Use the fetched data
  })
  .catch((error) => {
    console.error('Error:', error)
    // Handle the error
  })
//Handling concurrent requests with a limit using async/await and Promise.all():
async function fetchMultipleDataConcurrently(urls, limit) {
  const results = []
  const fetchPromises = urls.map(async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    results.push(data)
  })
  await Promise.all(fetchPromises.slice(0, limit))
  return results
}
const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3',
  'https://api.example.com/data4',
  'https://api.example.com/data5',
]
const limit = 3 // Maximum concurrent requests
fetchMultipleDataConcurrently(urls, limit)
  .then((results) => {
    console.log('Results:', results)
    // Use the fetched data
  })
  .catch((error) => {
    console.error('Error:', error)
    // Handle the error
  })
//Using async/await with Promise.race() for timeout functionality:
function fetchWithTimeout(url, timeout) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout),
    ),
  ])
}
async function fetchDataWithTimeout() {
  try {
    const response = await fetchWithTimeout(
      'https://api.example.com/data',
      5000,
    ) // 5 seconds timeout
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
fetchDataWithTimeout()
  .then((data) => {
    console.log('Data:', data)
    // Use the fetched data
  })
  .catch((error) => {
    console.error('Error:', error)
    // Handle the error
  })

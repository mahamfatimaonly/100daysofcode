//takes two numbers as arguments and returns their sum asynchronously using a callback.
function addAsync(a, b, callback) {
  setTimeout(() => {
    callback(null, a + b)
  }, 1000)
}
// Usage
addAsync(4, 5, (err, result) => {
  if (err) {
    console.error(err)
  } else {
    console.log(result)
  }
})
// takes an array of numbers as the first argument and a multiplier as the second argument.
function multiplyAsync(numbers, multiplier, callback) {
  const result = numbers.map((n) => n * multiplier)
  setTimeout(() => {
    callback(null, result)
  }, 1000)
}
// Usage
multiplyAsync([1, 2, 3, 4], 2, (err, result) => {
  if (err) {
    console.error(err)
  } else {
    console.log(result)
  }
})
// takes a file name as an argument and reads its content

function getFileContent(fileName, callback) {
  file.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data)
    }
  })
}
getFileContent('example.txt', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})
// retrieves the user's current geolocation using the navigator.geolocation
function getGeoLocation(callback) {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        callback(null, { latitude, longitude })
      },
      (error) => callback(error),
    )
  } else {
    const error = new Error('Geolocation not supported')
    callback(error)
  }
}

// Usage
getGeoLocation((err, location) => {
  if (err) {
    console.error(err)
  } else {
    console.log(location)
  }
})
//takes a username and password as arguments and makes an API call to authenticate the user using a callback.
function loginUser(username, password, callback) {
  const apiUrl = 'https://example.com/api/login'
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error))
}
loginUser('maham', 'apple', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})
//take a URL and a data processor function as arguments and makes an API call to retrieve data
function fetchData(url, processData, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => processData(data))
    .then((result) => callback(null, result))
    .catch((error) => callback(error))
}
const url = 'https://example.com/api/data'
const processData = (data) => data.map((item) => item.name)
fetchData(url, processData, (err, result) => {
  if (err) {
    console.error(err)
  } else {
    console.log(result)
  }
})
//take a form element and a submit handler function as arguments. 
function submitForm(form, submitHandler) {
  form.addEventListener('submit', function (event) {
    event.preventDefault() // prevent the default form submission behavior

    const formData = new FormData(form)
    const data = {}

    // convert FormData object to a plain object
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }

    submitHandler(data, function (error) {
      if (error) {
        console.error(error)
        // handle the error
      } else {
        // handle the successful form submission
      }
    })
  })
}

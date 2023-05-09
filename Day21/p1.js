//You want to display an alert message to the user when they attempt to close the browser window/tab.
// Solution
window.addEventListener('beforeunload', function (event) {
  // Display a confirmation message
  event.returnValue = 'Are you sure you want to leave this page?'
})

//Write JavaScript code to programmatically scroll the webpage to the top when a button with the ID "scrollToTopBtn" is clicked.
// Solution
document
  .getElementById('scrollToTopBtn')
  .addEventListener('click', function () {
    window.scrollTo(0, 0)
  })
//How can you detect the user's screen width and height using the BOM? Write JavaScript code to retrieve and display these values.
// Solution
var screenWidth = window.screen.width
var screenHeight = window.screen.height
console.log('Screen Width: ' + screenWidth + 'px')
console.log('Screen Height: ' + screenHeight + 'px')
//Explain the concept of the history object in the BOM and provide an example of its usage.
//The history object in the BOM represents the user's browsing history. It provides methods to navigate through the history stack and manipulate the browser's history.
// Solution
window.history.back()
//Write JavaScript code to retrieve and display the current URL of the webpage using the BOM.
// Solution
var currentURL = window.location.href
console.log('Current URL: ' + currentURL)
//How can you programmatically open a new browser window with a specific URL and dimensions using the BOM? Write JavaScript code to achieve this.
// Solution
var url = 'https://www.example.com'
var windowFeatures = 'width=800,height=600'

window.open(url, '_blank', windowFeatures)
//Write JavaScript code to check if the user's browser supports cookies using the BOM.
// Solution
var cookiesSupported = navigator.cookieEnabled

if (cookiesSupported) {
  console.log('Cookies are supported.')
} else {
  console.log('Cookies are not supported.')
}
//How can you retrieve the user's browser language using the BOM? Write JavaScript code to display the browser language.
// Solution
var browserLanguage = navigator.language || navigator.userLanguage
console.log('Browser Language: ' + browserLanguage)

//Explain the concept of the screen object in the BOM and provide an example of its usage.
//The screen object in the BOM represents the user's screen or monitor. It provides properties and methods to retrieve information about the screen.
// Solution
var colorDepth = window.screen.colorDepth
console.log('Color Depth: ' + colorDepth + ' bits')

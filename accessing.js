// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
let h2Element = document.querySelector('#weather-head')
h2Element.textContent = 'February 10 Weather Forecast, Seattle'
// Change the styling of every element with class "sun" to set the color to "orange"
let sameClassElements = document.querySelectorAll('.sun')
sameClassElements.forEach(item => item.style.color = 'orange')
// Change the class of the second <li> from to "sun" to "cloudy"
sameClassElements[0].className = 'cloudy'
console.log(sameClassElements)
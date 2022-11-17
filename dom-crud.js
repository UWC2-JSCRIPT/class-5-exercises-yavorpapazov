// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let mainElement = document.querySelector('main')
let aElement = document.createElement('a')
aElement.setAttribute('href', '')
aElement.setAttribute('id', 'cta')
aElement.textContent = 'Buy Now!'
mainElement.append(aElement)

// Access (read) the data-color attribute of the <img>,
// log to the console
let imgElement = document.querySelector('img')
console.log(imgElement.dataset.color)
// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let liElements = document.querySelectorAll('li')
liElements[2].className = 'highlight'

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let pElement = document.querySelector('p')
pElement.remove()

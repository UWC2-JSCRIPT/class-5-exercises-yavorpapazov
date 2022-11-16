// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
let deleteListItem = function(e) {
  e.preventDefault()
  e.target.parentNode.remove()
}
let lineThrough = function(e) {
  e.target.parentNode.classList.toggle('done')
}
const addListItem = function(e) {
  e.preventDefault()
  const input = this.parentNode.getElementsByTagName('input')[0]
  const text = input.value; // use this text to create a new <li>
  let ulElement = document.querySelector('.today-list')
  let liElement = document.createElement('li')
  liElement.addEventListener('click', lineThrough)
  let spanElement = document.createElement('span')
  spanElement.textContent = text
  let aElement = document.createElement('a')
  aElement.className = 'delete'
  aElement.textContent = 'Delete'
  aElement.addEventListener('click', deleteListItem)
  liElement.append(spanElement, aElement)
  ulElement.append(liElement)
  // Finish function here
}

let aElementAdd = document.querySelector('.add-item')
aElementAdd.addEventListener('click', addListItem)
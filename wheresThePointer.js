// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
let tbodyElement = document.querySelector('tbody')
tbodyElement.addEventListener('click', e => {
    let tdElement = e.target
    tdElement.textContent = `${e.pageX}, ${e.pageY}`
})
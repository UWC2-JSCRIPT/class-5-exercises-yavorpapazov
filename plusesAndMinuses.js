// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let btnPlus = document.querySelector('.btn-plus')
let btnMinus = document.querySelector('.btn-minus')
let h3 = document.querySelector('.count')
let count = 0
function plusMinus(e) {
    if(e.target.className === 'btn-plus') {
        count++
    } else if(e.target.className === 'btn-minus') {
        count--
    }
    h3.textContent = `Count: ${count}`
}
btnPlus.addEventListener('click', plusMinus)
btnMinus.addEventListener('click', plusMinus)
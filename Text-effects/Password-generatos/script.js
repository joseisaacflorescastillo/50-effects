const resultEl = document.getElementById('result')
const lenghtEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppsercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    Symbol: getRandomSymbol,
    number: getRandomNumber
}

generateEl.addEventListener('click', () => {
    const length = +lenghtEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

})

function getRandomLower() {
    return String.fromCharCode(Math.random() * 26 + 97)
}


function getRandomUpper() {
    return String.fromCharCode(Math.random() * 26 + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.random() * 10 + 48)
}

function getRandomSymbol() {
    const symbols = '!"·$%&/()=[]{},.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

let resultdisplay = document.querySelector('#result')
resultdisplay.style.display = "block"

let result1 = document.querySelector('.result1')
let result2 = document.querySelector('.result2')
let result3 = document.querySelector('.result3')

if (numeroUm == stringUm && typeof (numeroUm) != typeof (stringUm)) {
    result1.innerText = 'As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes'
} else {
    result1.innerHTML = 'As variáveis numeroUm e stringUm não tem o mesmo valor'
}

if (numeroTrinta === stringTrinta) {
    result2.innerText = 'As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo'
} else {
    result2.innerText = 'As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo'
}

if (numeroDez == stringDez && typeof (numeroDez) != typeof (stringDez)) {
    result3.innerText = 'As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes'
} else {
    result3.innerText = 'As variáveis numeroDez e stringDez não tem o mesmo valor'
}
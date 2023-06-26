import { renderLvlPage } from './gameMunu'
const levels = document.querySelectorAll('.radio')
const start = document.querySelector('.start-btn')
let userLvl = null

for (const level of levels) {
    level.addEventListener('input', () => {
        userLvl = level.value
        console.log(`Выбранный вами уровень сложности ${userLvl}`)
    })
}

start.addEventListener('click', () => {
    if (userLvl) {
        renderLvlPage(userLvl)
    }
})

// событие при клике генерирует поле с нужным количеством карт

start.addEventListener('click', () => {
    if (userLvl === '1') {
        renderLvlPage('6')
    }
    if (userLvl === '2') {
        renderLvlPage('12')
    }
    if (userLvl === '3') {
        renderLvlPage('18')
    }
})

const flipCard = (e) => {
    console.log('EVENT ON CARD CLICK', e.target.parentElement)
}

const cards = document.querySelectorAll('.memory-card')

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

import { createGameMenu } from './gameMenu.js'
const cardApp = () => {
    createGameMenu
}
cardApp()

import { renderLvlPage } from './gameMunu.js'
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

// import { startGame } from './script'
import { cards } from './allCards'
import './css/pageGame.css'

export function renderLvlPage(box, cardsCount) {
    let openHtml = ''
    let firstCard = ''
    let secondCard = ''
    for (let i = 0; i < cardsCount; i++) {
        const random = cards[Math.floor(Math.random() * cards.length)]
        openHtml += `
        <div data-index="${i}">
        <img data-value="${random}"class="card" src='.cardIMG/${random}.jpg' alt='${random}'/>
        </div>`
        cards.splice(cards.indexOf(random), 1)
    }
    const headHtml = `
    <header class="head">
    <div class="timetable">
        <div class="minutes">
            <div class="min">
                <p>min</p>
            </div>
            <div class="min">
                <p>sek</p>
            </div>
        </div>
        <div class="time">
            <time>00.00</time>
        </div>
    </div>
    <div class="startAgain">
        <button class="buttonstart">Начать заново</button>
    </div>
</header>`
    const open = `<div class="tops">${headHtml}
 <div class="cards">${openHtml}</div> </div>`
    box.innerHTML = open
    setTimeout(() => {
        const card = document.querySelectorAll('.card')
        card.forEach((car) => {
            car.setAttribute('src', './cardIMG/рубашка.jpg')
        })
    }, 5000)

    const card = document.querySelectorAll('.card')
    card.forEach((car) => {
        car.addEventListener('click', () => {
            car.setAttribute('src', `./jpg/${car.dataset.value}.jpg`)
            if (!firstCard) {
                firstCard = car.dataset.value
            } else {
                secondCard = car.dataset.value
                if (firstCard !== secondCard) {
                    alert('Вы проиграли')
                } else {
                    alert('Вы выиграли')
                }
            }
        })
    })
}

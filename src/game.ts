// Есть 4 масти и 9 рангов
// Легкий уровень: 6 карт
// Средний уровень: 12 карт
// Сложный уровень: 18 карт

import { complexity } from './difficultlySelection'
import { gameResult } from './gameResult'
import { openPage } from './script'

interface Card {
    value: string | undefined
    nod: Element | null
}
let arrCards: Array<string> = []

const cardSuit = (num: number) => {
    switch (num) {
        case 1:
            return 'бубны'
        case 2:
            return 'крести'
        case 3:
            return 'пики'
        case 4:
            return 'черви'
        default:
            return 'ошибка'
    }
}
const cardRank = (num: number) => {
    switch (num) {
        case 6:
            return '6'
        case 7:
            return '7'
        case 8:
            return '8'
        case 9:
            return '9'
        case 10:
            return '10'
        case 11:
            return 'валет'
        case 12:
            return 'дама'
        case 13:
            return 'король'
        case 14:
            return 'туз'
        default:
            return 'ошибка'
    }
}
const checkTheWin = () => {
    const cards: HTMLElement[] = Array.from(
        document.querySelectorAll('.game__card')
    )
    for (const card of cards) {
        if (card.dataset.status !== 'open') {
            return false
        }
    }
    return true
}
const checkTheCuple = (firstOpenCard: Card, secondOpenCard: Card) => {
    const min: string = document.querySelector('.counter-min')!.innerHTML
    const sec: string = document.querySelector('.counter-sec')!.innerHTML
    if (firstOpenCard.value !== secondOpenCard.value) {
        gameResult(false, { min: min, sec: sec })
    } else {
        firstOpenCard.nod?.setAttribute('data-status', 'open')
        secondOpenCard.nod?.setAttribute('data-status', 'open')

        if (checkTheWin()) {
            gameResult(true, { min: min, sec: sec })
        } else {
            firstOpenCard.value = ''
            firstOpenCard.nod = null

            secondOpenCard.value = ''
            secondOpenCard.nod = null
        }
    }
}

const startGame = () => {
    const firstOpenCard: Card = {
        value: '',
        nod: null,
    }
    const secondOpenCard: Card = {
        value: '',
        nod: null,
    }
    // кнопака начать заново
    const newGame: HTMLElement = document.querySelector('.new-game')!
    newGame.classList.add('new-game_active')
    newGame.addEventListener('click', () => {
        openPage('complexity')
    })

    // время игры
    const min: HTMLElement = document.querySelector('.counter-min')!
    const sec: HTMLElement = document.querySelector('.counter-sec')!

    let second = ''
    let minute = ''
    setInterval(() => {
        second = (Number(sec.innerHTML) + 1).toString()
        if (Number(second) < 60) {
            sec.innerHTML = Number(second) < 10 ? '0' + second : second
        } else {
            minute = (Number(min.innerHTML) + 1).toString()
            min.innerHTML = Number(minute) < 10 ? '0' + minute : minute
            sec.innerHTML = '00'
        }
    }, 1000)

    // Ивент на клик карты
    const cards = document.querySelectorAll('.game__card')
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const htmlCard = card as HTMLElement
            if (htmlCard.dataset.status !== 'open') {
                htmlCard.setAttribute(
                    'src',
                    `./assets/img/${htmlCard.dataset.value}.jpg`
                )
                if (!firstOpenCard.value) {
                    firstOpenCard.value = htmlCard.dataset.value
                    firstOpenCard.nod = htmlCard
                } else {
                    secondOpenCard.value = htmlCard.dataset.value
                    secondOpenCard.nod = htmlCard
                    checkTheCuple(firstOpenCard, secondOpenCard)
                }
            }
        })
    })
}
const fillCardsArray = (numbers: number) => {
    // генерация карт
    let rank = ''
    let suit = ''
    for (let i = 0; i < numbers / 2; i++) {
        do {
            rank = cardRank(Math.floor(Math.random() * 9) + 6)
            suit = cardSuit(Math.floor(Math.random() * 4) + 1)
        } while (
            arrCards.includes(
                `<img data-value="${rank}-of-${suit}" class="game__card" src="./assets/img/${rank}-of-${suit}.jpg" alt="card"/>`
            )
        )

        const card = `<img data-value="${rank}-of-${suit}" class="game__card" src="./assets/img/${rank}-of-${suit}.jpg" alt="card"/>`
        arrCards.push(card)

        let index = Math.floor(Math.random() * numbers) + 1

        let isFindSlot = false
        while (!isFindSlot) {
            if (!arrCards[index]) {
                arrCards[index] = card
                isFindSlot = true
            } else if (index === numbers) {
                index = 1
            } else {
                index++
            }
        }
    }

    //руббашкой
    setTimeout(() => {
        const cards = document.querySelectorAll('.game__card')
        cards.forEach((card) => {
            card.setAttribute('src', './assets/img/рубашка.jpg')
        })
    }, 5000)
}

export const Game = (app: HTMLElement) => {
    // опции сложности
    arrCards = []
    switch (complexity) {
        case 1:
            fillCardsArray(6)
            break
        case 2:
            fillCardsArray(12)
            break
        case 3:
            fillCardsArray(18)
            break
        default:
            break
    }

    app.innerHTML = `
    <div class="container">
        <div class="game">
            <div class="header">
                <div class="timer">
                    <div class="timer__text">
                        <div class="text-min">min</div>
                        <div class="text-sec">sec</div>
                    </div>
                    <div class="timer__counter">
                    <span class="counter-min">00</span>.<span class="counter-gasec">00</span></div>
                </div>
                <button class="new-game">Начать заново</button>
            </div>
            <main class="game-up">
                <div class="game__field">
                    ${arrCards.map((card) => card).join('')}
                </div>
            </main>
        </div>
    </div>
  `

    // Запуск игры, активность кнопок и запуск таймера после предпоказа карт
    setTimeout(startGame, 5000)
}

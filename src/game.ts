// Есть 4 масти и 9 рангов
// Легкий уровень: 6 карт
// Средний уровень: 12 карт
// Сложный уровень: 18 карт

import { openPage } from './script'

// дабавить ранг и масти карт и массив карт
let arrayCards: Array<string> = []
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

interface Card {
    value: string | undefined
    nod: Element | null
}

const winCheck = () => {
    const cards: HTMLElement[] = Array.from(
        document.querySelectorAll('.card-game')
    )
    for (let card of cards) {
        if (card.dataset.status !== 'open') {
            return false
        }
    }
    return true
}
//событие на клик карты
const cards = document.querySelectorAll('.card-game')

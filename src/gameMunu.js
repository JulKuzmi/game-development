// import { cards } from './allCards.js'
const box = document.querySelector('.container')
export function renderLvlPage(userLvl) {
    const htmlGame = `
    <div class="level">
    <h2 class="content_text">
        Выбран уровень ${userLvl}
    </h2 class="content_text">
    </div>`
    box.innerHTML = htmlGame
}

// export function startGame(difficult, cardsCount) {
//     let firstCard = null;
//     let secondCard = null;
//     let open = '';

// }

export const createGameMenu = () => {
    const title = document.createElement('h2')
    const gameLevel = document.querySelector('level')

    gameLevel.innerHTML = ''
    title.textContent = 'Выберете сложность'
    title.classList.add('game-menu_title')

    const createDifficultButton = (difficult) => {
        const button = document.createElement('button')

        button.classList.add('game-menu_difficult-btn')
        button.textContent = `${difficult} карт`

        button.addEventListener('click', () => {})
        return
    }
    gameLevel.append(
        title,
        createDifficultButton(6),
        createDifficultButton(12),
        createDifficultButton(18)
    )
}

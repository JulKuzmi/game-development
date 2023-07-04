import { openPage } from './script'

const add: HTMLElement = document.getElementById('box')!

interface Time {
    min: string
    sec: string
}

export const gameResult = (isWin: boolean, time: Time) => {
    add.innerHTML += `
        <div class="end">
            <div class="end-box">
                <img class="end-img" src="./img/${
                    isWin ? 'celebration' : 'dead'
                }-game.png" alt="${isWin ? 'celebration' : 'dead'} game">
                <p class="end__status">${
                    isWin ? 'Вы выиграли!' : 'Вы проиграли!'
                }</p>
                <p class="end__time-text">Затраченое время</p>
                <p class="end__time">${time.min}.${time.sec}</p>
                <button class="end-again">Играть снова</button>
            </div>
        </div>
    `
    const againButton = document.querySelector('.end-again')
    againButton?.addEventListener('click', () => {
        openPage('complexity')
    })
}

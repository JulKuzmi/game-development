import { openPage } from './script'
import './src/css/styles.css'
// добавить разметку выбора уровня
export let complexity = 0
export const DifficultlyChoose = (add: HTMLElement) => {
    complexity = 0
    add.innerHTML = ` <div class="container">
     <div class="container-content">
       <h2 class="content-text">Выбери сложность</h2>
       <form class="difficulty-form">
         <div class="difficulty-form-lvls">
           <label class="difficulty-lvl">
             <input type="radio" name="difficulty" value="1">
             <span>1</span>
           </label>
           <label class="difficulty-lvl">
             <input type="radio" name="difficulty" value="2">
             <span>2</span>
           </label>
           <label class="difficulty-lvl">
             <input type="radio" name="difficulty" value="3">
             <span>3</span>
           </label>
         </div>
         <button type="submit" class="start">Старт</button>
       </form>
       </div>
   </div>`

    const formDifficult = document.querySelector(
        '.difficulty-form'
    ) as HTMLElement
    formDifficult.addEventListener('submit', (Event) => {
        Event.preventDefault()

        const difficultlyButtons: HTMLInputElement[] = Array.from(
            document.querySelectorAll('.difficulty-lvl input[type="radio"]')
        )
        for (const difficultlyButton of difficultlyButtons) {
            if (difficultlyButton.checked) {
                complexity = Number(difficultlyButton.value)
                openPage('game')
                break
            }
        }
        if (!complexity) {
            alert('выберите уровень сложности для игры')
        }
    })

    const difficultlyLvl = document.querySelectorAll('.difficulty-lvl')
    const startButton = document.querySelector('.start')
    difficultlyLvl.forEach((difficultlyLvl) => {
        difficultlyLvl.addEventListener('click', () => {
            startButton?.classList.add('start-game__new')
            document
                .querySelector('.difficulty-active-game')
                ?.classList.remove('difficulty-active-game')
            difficultlyLvl.classList.add('difficulty-active-game')
        })
    })
}

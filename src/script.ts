// import { renderLvlPage } from './gameMunu'
// import './css/style.css'
// export const startGame = () => {
//     const container = document.querySelector('.container') as HTMLElement
//     const difficultStartHtml = `<div class="container-content">
//     <h2 class="content-text">
//         Выбери <br />
//         сложность
//     </h2>
//     <div class="levels">
//         <div class="level">
//             <input
//                 class="radio"
//                 type="radio"
//                 id="radio1"
//                 name="radios"
//                 value="1"
//                 checked
//             />
//             <label for="radio1">1</label>
//             <input
//                 class="radio"
//                 type="radio"
//                 id="radio2"
//                 name="radios"
//                 value="2"
//                 checked
//             />
//             <label for="radio2">2</label>
//             <input
//                 class="radio"
//                 type="radio"
//                 id="radio3"
//                 name="radios"
//                 value="3"
//                 checked
//             />
//             <label for="radio3">3</label>
//         </div>
//     </div>
//     <div class="start">
//         <button class="start-btn">Старт</button>
//     </div>
//  </div>
//     `
//     container.innerHTML = difficultStartHtml
//     const levels: HTMLInputElement[] = Array.from(
//         document.querySelectorAll('.radio')
//     )
//     const start = document.querySelector('.start-btn') as HTMLElement
//     let userLvl: string | null

//     for (const level of levels) {
//         level.addEventListener('input', () => {
//             userLvl = level.value
//             console.log(`Выбранный вами уровень сложности ${userLvl}`)
//         })
//     }
//     start?.addEventListener('click', () => {
//         if (userLvl === '1') {
//             renderLvlPage(container, 6)
//         } else if (userLvl === '2') {
//             renderLvlPage(container, 12)
//         } else {
//             renderLvlPage(container, 18)
//         }
//     })
// }
// startGame()
import { difficultlyChoose } from './difficultlySelection'
let page = 'complexity'
const add: HTMLElement = document.getElementById('box')!

const renderAdd = () => {}

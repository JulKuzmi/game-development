// import { startGame } from './script'
// import { cards } from './allCards'
// import './css/pageGame.css'

// export function renderLvlPage(container, cardsCount) {
//     let openHtml = ''
//     // let firstCard = ''
//     // let secondCard = ''
//     for (let i = 0; i < cardsCount; i++) {
//         const random = cards[Math.floor(Math.random() * cards.length)]
//         openHtml += `
//         <div data-index="${i}">
//         <img data-value="${random}"class="card" src='.img/${random}.jpg' alt='${random}'/>
//         </div>`
//         cards.splice(cards.indexOf(random), 1)
//     }
//     const headHtml = `<header class="top">
//     <div class="timing">
//         <div class="all-time">
//             <div class="min-sek">
//                 <p>min</p>
//             </div>
//             <div class="min-sek">
//                 <p>sek</p>
//             </div>
//         </div>
//         <div class="time">
//             <time>00.00</time>
//         </div>
//     </div>
//     <div class="toStartAgain">
//         <button class="start-again">Начать заново</button>
//     </div>
// </header>`
//     const open = `<div class="tops">${headHtml}
//  <div class="cards">${openHtml}</div> </div>`
//     container.innerHTML = open
//     setTimeout(() => {
//         const card = document.querySelectorAll('.card')
//         card.forEach((elementCard) => {
//             elementCard.setAttribute('src', './img/рубашка.jpg')
//         })
//     }, 5000)
// }
// startGame()

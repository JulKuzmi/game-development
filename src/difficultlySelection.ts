import { openPage } from './script'

// добавить разметку выбора уровня
export let complexity = 0
export const difficultlyChoose = (add: HTMLElement) => {
    let complexity = 0
    add.innerHTML = ` <div class="container">
     <div class="container-content">
       <h2 class="content-text">Выбери сложность</h2>
       <form class="difficulty-form">
         <div class="difficulty-form__lvls">
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
}

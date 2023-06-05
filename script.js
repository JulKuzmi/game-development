import { renderLvlPage} from "./lvlPage.js"
const levels = document.querySelectorAll('.radio');
const start = document.querySelector('.startBtn');
let userLvl = null;

for(const level of levels){
    level.addEventListener('input', () => {
        userLvl = level.value;
        alert(`Выбранный вами уровень сложности ${userLvl}`);
    })
};

start.addEventListener('click', () => {
    if (userLvl) {
        renderLvlPage(userLvl);
    }
});
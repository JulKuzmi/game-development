const box = document.querySelector('.container');
export function renderLvlPage(userLvl) {
    const  htmlGame =`
    <div class="level"> 
    <h2 class="content_text">
         
    </h2 class="content_text">
    </div>`;
    box.innerHTML = htmlGame;
}
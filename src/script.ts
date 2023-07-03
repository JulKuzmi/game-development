import { DifficultlyChoose } from './difficultlySelection'
import { Game } from './game'
export const openPage = (pageNew: string) => {
    page = pageNew
    renderAdd()
}

let page = 'complexity'
const add: HTMLElement = document.getElementById('box')!

const renderAdd = () => {
    switch (page) {
        case 'complexity':
            DifficultlyChoose(add)
            break
        case 'Game':
            Game(add)
            break
        default:
            console.log('error')
            break
    }
}
renderAdd()

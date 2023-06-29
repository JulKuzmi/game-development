import { difficultlyChoose } from './difficultlySelection'
import '.src/css/style.css'
export const openPage = (pageNew: string) => {
    page = pageNew
    renderAdd()
}

let page = 'complexity'
const add: HTMLElement = document.getElementById('box')!

const renderAdd = () => {
    switch (page) {
        case 'complexity':
            difficultlyChoose(add)
            break
    }
}

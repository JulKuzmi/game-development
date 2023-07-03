import { DifficultlyChoose } from './difficultlySelection'

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
    }
}

import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
    const fullList = FullList.instance
    const template = ListTemplate.instance

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
    itemEntryForm.addEventListener("submit",(event: SubmitEvent): void => {
        event.preventDefault()

        const input = document.getElementById("newItem") as HTMLInputElement
        const newEntryText: string = input.value.trim()
        // checking th length property of the text value is not needed An empty string evaluates as false,too
        //텍스트 값의 길이 속성을 확인할 필요가 없습니다. 빈 문자열도 false로 평가됩니다.
        if(!newEntryText.length) return

        const itemId: number = fullList.list.length
            ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
            : 1

            const newItem = new ListItem(itemId.toString(), newEntryText)

            fullList.addItem(newItem)

            template.render(fullList)
    })

    const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

    clearItems.addEventListener("click",(): void => {
        fullList.clearList()
        template.clear()
    })

    fullList.load()
    template.render(fullList)
}

document.addEventListener("DOMContentLoaded", initApp)
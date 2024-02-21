export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

// implements 키워드는 새로운 클래스의 모양을 동일하게 정의하고 싶을 때 사용한다. 따라서, interface로 정의한 값들은 모두 필수적으로 들어가야 하며, 하나라도 빠질 경우 에러를 반환한다
export default class ListItem implements Item {

    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
    ){}

    // 속성에 직접 접근해 수정하면 데이터 무결성이 깨질 수 있다 그래서 get set 사용하는거 같음

    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }  

    get item(): string {
        return this._item
    }

    set item(item: string) {
        this._item = item
    } 

    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }
}
import { SaveCookList } from '../contants'

// 初始化state
const initState = {
    cookEdit: {}
}

export default function update(state = initState, action) {
    switch (action.type) {
        case SaveCookList:
            return Object.assign({}, state, { cookEdit: action.cookEdit })
        default: 
            return 'error la...'
    }
}
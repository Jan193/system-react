import * as types from './actionTypes'

let defaultState = {
    orderSum: '',
    name: ''
}

export function formData(state = defaultState, action = {}) {
    switch (action.type) {
        case types.SAVEFORMDATA:
            return { ...state, ...{ [action.dataType]: action.value } }
        case types.SAVEIMG:
            return {...state, ...{imgpath: action.path}};
        case types.CLEARDATA:
            return {...state, ...defaultState};
        default:
            return state;
    }
}
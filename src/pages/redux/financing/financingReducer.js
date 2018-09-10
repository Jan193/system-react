

function actionSavaList(value, dataType) {
    return {
        type: 'SAVELIST',
        value,
        dataType
    }
}

export {
    actionSavaList
}

let state = {
    list: [
        {name: '默认的数据'}
    ]
}

export function saveList(state = state, action = {}) {
    switch (action.type) {
        case 'saveList':
            return { ...state, ...{ [action.dataType]: action.value } }
        default:
            return state
    }
}
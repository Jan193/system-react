import * as types from './actionTypes'

export function saveFormData(value, dataType) {
    return {type: types.SAVEFORMDATA, value, dataType}
}

export function saveImg(path) {
    return { type: types.SAVEIMG, path}
}

export function clearData() {
    return { type: types.CLEARDATA }
}
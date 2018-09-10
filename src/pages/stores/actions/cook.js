import { SaveCookList } from '../contants'

export const saveCookEdit = (n) => {
    return {
        type: SaveCookList,
        amount: n
    }
}
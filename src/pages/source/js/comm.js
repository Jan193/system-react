export function addKey(data, key) {
    if (!data || !key) return
    data = data.map(item => {
        item['key'] = item[key]
        return item
    })
    return data
}


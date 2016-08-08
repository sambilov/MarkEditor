const markKey = 'markStorage'
const queryKey = 'queryStorage'
let storage = window.localStorage

function readStorage(key) {
    return JSON.parse(storage.getItem(key)) || []
}

function writeToStorage(key, value) {
    storage.setItem(key, JSON.stringify(value))
}

export function getMarkList(queryString = '') {
    let data = readStorage(markKey)
    return queryString ? data.filter(function (el) {
        return new RegExp(queryString).test(el.title);
    }) : data
}

export function getQueryString() {
    return readStorage(queryKey) || ''
}

export function setQueryString(queryString = '') {
    writeToStorage(queryKey, queryString)
}

export function addMark(mark) {
    let data = readStorage(markKey)
    data.push(mark)
    writeToStorage(markKey, data)
}

export function removeMark(markId) {
    let data = readStorage(markKey),
        targetMark = data.find(function (el) { return el.id === markId }),
        removeIndex = data.indexOf(targetMark)
    data.splice(removeIndex, 1)
    writeToStorage(markKey, data)
}
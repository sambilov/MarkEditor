export function findMark(queryString) {
    return {
        type: 'FIND_MARK',
        payload: queryString
    }
}

export function createMark(title, text) {
    return {
        type: 'CREATE_MARK',
        payload: {
            title,
            text
        }
    }
}

export function removeMark(markId) {
    return {
        type: 'REMOVE_MARK',
        payload: markId
    }
}

export function editMark(markId) {
    return {
        type: 'REMOVE_MARK',
        payload: markId
    }
}
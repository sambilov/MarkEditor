export function findMark(queryString) {
    return {
        type: 'FIND_MARK',
        payload: queryString
    }
}
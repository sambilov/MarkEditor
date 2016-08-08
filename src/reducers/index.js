import {getMarkList, getQueryString, addMark, removeMark, setQueryString} from '../storage'

const queryString = getQueryString() 
const initialState = {
    queryString: queryString,
    markList: getMarkList(queryString)
}

export default function userstate(state = initialState, action) {
    console.log(initialState)
    switch (action.type) {
        case 'FIND_MARK':
            setQueryString(action.payload)
            return { state, markList: getMarkList(action.payload), queryString: action.payload }
        case 'REMOVE_MARK':
            removeMark(action.payload)
            return { state, markList: getMarkList(state.queryString) }
        case 'CREATE_MARK':
            let maxId = Math.max.apply(null, state.markList.map(function (el) { return el.id }))
            addMark(Object.assign({ id: maxId + 1 }, action.payload))
            return { state, markList: getMarkList(state.queryString) }
        case 'RELOAD_STATE':
            let queryString =getQueryString() 
            return {
                queryString: queryString,
                markList: getMarkList(queryString)
            }
        default:
            return state;
    }
}
import {getMarkList, getQueryString, addMark, removeMark, setQueryString} from '../storage'

const initialState = {
    queryString: getQueryString(),
    markList: getMarkList()
    // [
    //     { title: 'test title', text: 'test text content', id: 0 },
    //     { title: 'test title 1', text: 'test text content 1', id: 1 },
    //     { title: 'test title 2', text: 'test text content 2', id: 2 },
    //     { title: 'test title 3', text: 'test text  content 3', id: 3 }
    // ]
}

export default function userstate(state = initialState, action) {
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
        default:
            return state;
    }
}
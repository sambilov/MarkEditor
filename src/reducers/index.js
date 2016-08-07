const initialState = {
    markList: [
        { title: 'test title', text: 'test text content', id: 0 },
        { title: 'test title 1', text: 'test text content 1', id: 1 },
        { title: 'test title 2', text: 'test text content 2', id: 2 },
        { title: 'test title 3', text: 'test text  content 3', id: 3 }
    ]
}

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case 'FIND_MARK':
            return action.payload ? {
                markList: state.markList.filter(function (el) {
                    return new RegExp(action.payload).test(el.title);
                })
            } : state
        default:
            return state;
    }
}


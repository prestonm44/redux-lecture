const initialState = {
    count: 0,
    name: 'Redux',
    color: 'red'
}

// param1: state object
// param2: action object - define how to update state
export default function reducer(state = initialState, action) {
    console.log(action.type)
    switch(action.type) {
        case 'increment':
            const decCount = state.count + 1;
            return {...state, count: decCount}
        case 'decrement':
            const incCount = state.count - 1;
            return {...state, count: incCount}
        case 'incrementByAmount':
            const amtCount = state.count + action.payload;
            return {...state, count: amtCount}
        default:
            return state;
    }
}
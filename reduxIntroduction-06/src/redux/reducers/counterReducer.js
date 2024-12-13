const initialState = {
    count: 0,
    numOfClicks : 0
};

const counterReducer = (state = initialState, action) => {
    // console.log(state);
    // console.log(action);
    
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1, numOfClicks: state.numOfClicks + 1 };
        case 'DECREMENT':
            return { 
                ...state, 
                count: state.count > 0 ? state.count - 1 : state.count,
                numOfClicks:state.numOfClicks > 0 ? state.numOfClicks - 1 : state.numOfClicks
            };
        case 'RESET':
            return { ...state, count : 0, numOfClicks : 0};
        default:
            return state;
    }
};

export default counterReducer;
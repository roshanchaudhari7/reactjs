const initialState = {
    data: [],
    loading: false,
    error: null,
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOADING':
            return { ...state, loading: true, error: null }
        case 'DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload }
        case 'DATA_ERROR':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default dataReducer
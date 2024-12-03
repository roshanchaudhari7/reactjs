import React, { useReducer } from 'react'

function reducerFunction(state, action) {
    if (action.type == "increment") {
        return {count : state.count + 1}
    } else if (action.type == "decrement") {
        if(state.count == 0) return {count : 0}
        return {count : state.count - 1}
    } else {
        return {count : 0}
    }
}
const Counter = () => {
    const[state, dispatch] = useReducer(reducerFunction, {count : 0})
    return (
        <div>
            <p>Count is {state.count}</p>
            <div>
                <button onClick={() => {
                    dispatch({type : "increment"})
                }}>Increment</button>
                <button onClick={() => {
                    dispatch({type : "reset"})
                }}>Reset</button>
                <button onClick={() => {
                    dispatch({type : "decrement"})
                }}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter

import React from 'react'
import CompA from './CompA'
import { decrement, increment, reset } from '../redux/actions/counterActions'
import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {
  // const count = useSelector((state) => state.counter.count)
  // const numOfClicks = useSelector((state) => state.counter.numOfClicks)
  const {count, numOfClicks} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter is : {count}</h1>
      <h2>Num of Clicks : {numOfClicks}</h2>
      <div>
        <button onClick={() => {
          dispatch(increment())
        }}>Increment</button>
        <button style={{margin:"10px"}} onClick={() => {
          dispatch(decrement())
        }}>Decrement</button>
        <button onClick={() => {
          dispatch(reset())
        }}>Reset</button>
      </div>
      <CompA />
    </div>
  )
}

export default Counter

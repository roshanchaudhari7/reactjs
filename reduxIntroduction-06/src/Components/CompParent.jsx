import React from 'react'
import CompA from './CompA'
import { decrement, increment, reset } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


const CompParent = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter is : {count}</h1>
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

export default CompParent

import React from 'react'
import { useSelector } from 'react-redux'

const CompA = () => {
    const count = useSelector((state) => state.count)
  return (
    <div>
      <h3>Inside CompA : </h3>
      <p>Count is : {count}</p>
    </div>
  )
}

export default CompA

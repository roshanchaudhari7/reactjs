import React, { useState, useMemo, useCallback, } from 'react'

const Example = () => {
  const [value, setValue] = useState(1)
  const [count, setCount] = useState(0)
  const isPrime = useCallback(
    function (num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }, [value])


  //Function to find the nth prime number
  const findNthPrime = useCallback(
    function (n) {
      let count = 0;
      let num = 2;
      while (count < n) {
        if (isPrime(num)) {
          count++;
        }
        num++;
      }
      return num - 1;
    }, [value])

  let ans = useMemo(() => findNthPrime(value), [value])
  return (
    <div>
      <div>
        <input onChange={(e) => {
          setValue(e.target.value)
        }} type="number" value={value} />
        <p>{value} th prime is {ans}</p>
      </div>
      <div>
        <p>{count}</p>
        <button onClick={() => {
          setCount(count + 1)
        }}>Increment</button>
      </div>
    </div>
  )
}

export default Example

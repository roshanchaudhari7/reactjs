import React from 'react'

const Example = (props) => {
  const{name, age, city} = props
  return (
    <div>
      <h1>{`My name is ${name} and age is ${age}. I am from ${city}.`}</h1>
    </div>
  )
}

export default Example

export const FirstExample = () => {
  return (
    <h1>This is from first example.</h1>
  )
}

export const SecondExample = () => {
  return (
    <h1>This is from second example</h1>
  )
}

export const ThiredExample = () => {
  return (
    <h1>This is from thired example</h1>
  )
}


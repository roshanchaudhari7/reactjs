import React from "react"

const Sum = ({num1, num2}) => {
    let sum = num1 + num2
    return (
        <h1>Sum of {num1} and {num2} is {sum}</h1>
    )
}

export default Sum
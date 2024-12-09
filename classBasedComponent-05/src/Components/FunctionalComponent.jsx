import React, { useState, useEffect} from 'react'

const FunctionalComponent = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Component Mounted/Render");

        return () => {
            console.log("Component Unmounted")
        }
    }, [count])
    return (
        <div>
            <h2>Count is : {count}</h2>
            <button style={{backgroundColor:"red"}} 
            onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
        </div>
    )
}

export default FunctionalComponent

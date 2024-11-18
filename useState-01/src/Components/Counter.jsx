import { useState } from "react";
const Counter = () => {
    // let count = 0;
    const [count, setCount] = useState(0)
    return (
        <>
            <div style={{ marginTop: "50px", fontSize: "30px", textAlign: "center", marginBottom: "10px" }}>
                {count}
            </div>
            <div style={{ textAlign: "center" }}>
                <button onClick={() => {
                    setCount(count + 1)
                }} style={{ margin: "5px", padding: "10px 15px", fontSize: "22px", cursor: "pointer", borderRadius: "50%" }}>+</button>
                <button onClick={() => {
                    setCount(0)
                }} style={{ margin: "5px", padding: "10px 15px", fontSize: "22px", cursor: "pointer", borderRadius: "50%" }}>Reset</button>
                <button onClick={() => {
                    if (count == 0) return
                    setCount(count - 1)
                }} style={{ margin: "5px", padding: "10px 15px", fontSize: "22px", cursor: "pointer", borderRadius: "50%" }}>-</button>
            </div>
        </>
    );
};

export default Counter


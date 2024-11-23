import React, { useState } from 'react'

const BgChange = () => {
    const[color, setcolor] = useState("white")
    return (
        <div style={{backgroundColor:color, height:"100vh", margin:0, padding:0}}>
            <div style={{width:"100px"}}>
            <button style={{margin:20, padding:10, borderRadius:10, backgroundColor:"white" }}
            onClick={() => {
                setcolor("white")
            }}>White</button>
            <button style={{margin:20, padding:10, borderRadius:10, backgroundColor:"black", color:"white"}}
            onClick={() => {
                setcolor("black")
            }}>Black</button>
            <button style={{margin:20, padding:10, borderRadius:10,backgroundColor:"red", color:"black"}}
            onClick={() => {
                setcolor("red")
            }}>Red</button>
            <button style={{margin:20, padding:10, borderRadius:10 ,backgroundColor:"green", color:"black"}}
            onClick={() => {
                setcolor("green")
            }}>Green</button>
            <button style={{margin:20, padding:10, borderRadius:10, backgroundColor:"blue", color:"black"}}
            onClick={() => {
                setcolor("blue")
            }}>Blue</button>
            <button style={{margin:20, padding:10, borderRadius:10, backgroundColor:"pink", color:"black"}}
            onClick={() => {
                setcolor("pink")
            }}>Pink</button>
            <button style={{margin:20, padding:10, borderRadius:10, backgroundColor:"yellow", color:"black"}}
            onClick={() => {
                setcolor("yellow")
            }}>Yellow</button>
            </div>
        </div>
    )
}

export default BgChange

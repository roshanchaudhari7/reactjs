import React, { useState } from 'react'

const ThemeChange = () => {
  const [theme, setTheme] = useState("light")
  let styles = {
    backgroundColor : theme == "light" ? "white" : "black",
    color : theme == "light" ? "black" : "white",
    height : "100vh"
  }
  return (
    <div style={styles}>
      <button onClick={() => {
        setTheme("light")
      }}><span style={{fontSize: "30px"}}>&#127769;</span></button>
      <button onClick={() => {
        setTheme("dark")
      }}><span style={{fontSize: "30px"}}>&#127775;</span></button>

      {/* <button onClick={() => {
        if(theme == "light") {
          setTheme("dark")
        } else {
          setTheme("light")
        }
      }}>{theme == "light" ? "🌙" : "🌟"}</button> */}
      <h1>Current Theme : {theme}</h1>
    </div>
  )
}

export default ThemeChange

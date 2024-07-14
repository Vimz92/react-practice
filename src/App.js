import React, { useRef } from "react";
import Button from "./Button";
import './App.css'

const App = () => {

  const buttonRef = useRef(null)

  return (
    <div className="container">
    <button onClick={() => {
      buttonRef.current.alterToggle()
    }}> Button from Parent </button>
    <Button ref={buttonRef}/>
    
    </div>
  )
}

export default App
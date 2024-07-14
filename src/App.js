import React, {useRef} from "react";

const App = () => {

  const inputRef = useRef(null)

  const handkeChange = () => {
    inputRef.current.focus();
  }

  return (
    <>
    <h1> Vimal </h1>
    <label> UserName</label>
    <input 
    type="name"
    placeholder="Enter the UserName"
    ref={inputRef}
    />

    <button onClick={handkeChange}> Submit </button>
    </>
  )
}

export default App
import { useReducer } from "react"
import React from "react"

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
      case "INCREMENT": 
        return{...state, count: state.count + 1  }
        case "TEXT":
          return{...state, text: !state.text}
          default:
            return state
    }

}

const App = () => {
  const[state, dispatch] = useReducer(reducer, {count: 0, text: true})

  const counter = () =>{
    dispatch({type: "INCREMENT"})
    dispatch({type: "TEXT"})
  }

  return (
    <>
    <h1>{state.count} </h1> 
    <button onClick={counter}> ButtonCount </button>
    {!state.text ? <h1> It is working</h1> : ''}
    </>
  )
}

export default App
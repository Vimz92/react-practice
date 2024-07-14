
import React, { useReducer} from "react";

const initialState = {num: 0, dhanu: true}

const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {...state, num: state.num + 1 }
    case "TOGGLE":
      return {...state, dhanu: !state.dhanu}
      default:
        return state;
  }
  
}

const App = () => {
  const[state, dispatch] = useReducer(reducer, initialState)

  const increment = () => {
   dispatch({type: "INCREMENT"})
   dispatch({type: "TOGGLE"})
  }

  return(
    <> 
    <h1>React Hooks</h1>

    <h2>{state.num}</h2>
  
    <button onClick={increment}> Increment </button>
    {state.dhanu ? <h1> Hai Vidyu </h1> : ''}
    </>
    
  )
}

export default App
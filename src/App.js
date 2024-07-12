import React, {useEffect, useState} from "react"
import axios from "axios"

const App = () => {
  const[data, setData] = useState([])
  
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data)
        
      })
  })

 
    
    return (
      <>
        <h1> hello world</h1>
        <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Render other user properties as needed */}
          </li>
        ))}
      </ul>
         </>



    ) 
    
    
  
}

export default App
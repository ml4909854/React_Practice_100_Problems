import React, { useState } from 'react'

const Problem4 = () => {
    const[message , setMessage] = useState(false)

  return (
    <>
    <p>{message?"My name is mahesh kumar" : "My name is nothing"}</p>
    <div onClick={()=>setMessage(!message)}>{message?"Show message" : "Hide message"}</div>
    </>
  )
}

export default Problem4
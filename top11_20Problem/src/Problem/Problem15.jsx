import React, { useState } from 'react'
import { use } from 'react'

const Problem15 = () => {
    const[toggle , setToggle] = useState(false)
  return (
    <div>
        <p style={{color: toggle?"red":"green"}}>
            toggles between two css classes on click
        </p>
        <button onClick={()=>setToggle(!toggle)}>click</button>
    </div>
  )
}

export default Problem15
import React, { useState } from 'react'

const Problme3 = () => {
  const [toggle , setToggle] = useState(false)
  return (
    <div>
<button onClick={()=>setToggle(!toggle)}>{toggle?"Off" :"ON"}</button>
    </div>
  )
}

export default Problme3
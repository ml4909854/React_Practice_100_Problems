import React, { useState } from 'react'

const Problem8 = () => {
    const[count , setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>
{count}
        </button>
    </div>
  )
}

export default Problem8
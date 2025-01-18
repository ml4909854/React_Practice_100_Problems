import React, { useCallback, useState } from 'react'
import Child from './Child'

const Problem2 = () => {
    const[count , setCount] = useState(0)

    const Mahesh = useCallback(()=>{
        console.log("rendering...")
    },[count])
  return (
    <div>
        <p>I am a Parent Component</p>
        <Child Mahesh={Mahesh}/>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Problem2
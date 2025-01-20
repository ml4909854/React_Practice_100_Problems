import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context'

const Component2 = () => {
    const {count , setCount} = useContext(counterContext)
  return (
   <>
   <p>{count}</p>
    <div>Hi iam a second component Component2</div>
    </>
  )
}

export default Component2
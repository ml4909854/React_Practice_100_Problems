import React from 'react'

const Child = ({name})=>{
    return(
        <>
        <h1>{name.name}</h1>
        <h1>{name.age}</h1>
        <h1>{name.lastname}</h1>
        </>
    )
}

const Problem16 = () => {
    let name = "Mahesh"
    let age = 22
    let lastname = "lodhi"
  return (
  <Child name={{name , age , lastname}}/>
  )
}


export default Problem16
import React from 'react'

const Child = ()=>{
    return(
        <div>
            I am a parent Component
        </div>
    )
}
const Problem4 = () => {
  return (
    <div>
<Child/>
    </div>
  )
}

export default Problem4
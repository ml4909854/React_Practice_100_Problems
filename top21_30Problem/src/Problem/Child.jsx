import React, { memo } from 'react'

const Child = ({Mahesh}) => {

    Mahesh()
  return (
    <div>
      
        I am a child component
    </div>
  )
}

export default memo(Child)
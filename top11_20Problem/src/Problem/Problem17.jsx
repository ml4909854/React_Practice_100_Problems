import { useState } from "react"
import React  from 'react'
import "./Problem17.css"
const Problem17 = () => {
    const [isActive, setIsActive] = useState(false);

    // Toggle the active state
    const toggleClass = () => {
      setIsActive((prev) => !prev);
    };
  
    return (
      <div>
        <button onClick={toggleClass}>Toggle Highlight</button>
        {/* Apply conditional class */}
        <p className={isActive ? "highlight" : "normal"}>
          This text changes style dynamically!
        </p>
      </div>
    );
}

export default Problem17
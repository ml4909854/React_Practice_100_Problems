import React, { useEffect } from "react";
import { useRef } from "react";

const Problem1 = () => {
  const inputRef = useRef();

  useEffect(()=>{
inputRef.current.focus()
  },[])
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default Problem1;

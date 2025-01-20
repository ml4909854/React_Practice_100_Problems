import React from "react";
import Component1 from "./Component1";
import { useState } from "react";
import { counterContext } from "../context";

const Context = () => {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{count , setCount}}>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Button of context</button>
        <p>Hi i am a context component</p>
        <Component1 />
      </div>
    </counterContext.Provider>
  );
};

export default Context;

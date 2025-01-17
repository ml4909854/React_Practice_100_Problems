import React, { useState } from "react";

const Problem11 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <p >{toggle?"My name is mahesh kumar":""}</p>
      <button onClick={() => setToggle(!toggle)}>click</button>
    </div>
  );
};

export default Problem11;

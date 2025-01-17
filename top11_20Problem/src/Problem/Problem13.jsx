import React, { useState, useEffect } from "react";

const Problem13 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Use functional update to avoid dependency issues
    }, 1000);

    return () => {
      clearInterval(timer); // Correctly cleanup the interval
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Problem13;

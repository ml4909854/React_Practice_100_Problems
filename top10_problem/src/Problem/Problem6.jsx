import React, { useState } from "react";

const Problem6 = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <p>{input}</p>
      <input
        type="text"
        placeholder="Enter a value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Problem6;

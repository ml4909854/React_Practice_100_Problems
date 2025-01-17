import React, { useEffect, useRef, useState } from "react";

const Problem18 = () => {
  const [bgColor, setBgColor] = useState("lightGray");

  function changeColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  }
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: bgColor,
          margin: "20px auto",
          textAlign: "center",
          lineHeight: "200px",
          border: "1px solid black",
        }}
      >
        Color Box
      </div>
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
};

export default Problem18;

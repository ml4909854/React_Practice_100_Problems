import React from "react";

const Problem5 = () => {
  let list = ["raja", "mohan", "singh"];
  return (
    <div>
      {list.map((ele, index) => (
        <h1 key={index}>{ele}</h1>
      ))}
    </div>
  );
};

export default Problem5;

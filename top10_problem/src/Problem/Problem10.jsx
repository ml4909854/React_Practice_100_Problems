import { useState } from "react";
import React from "react";

const Problem10 = () => {
  const [firstname, setFirstname] = useState("");
  const [last, setLast] = useState("");
  const [full, setFull] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setFull([...full, { firstname, last }]);
    setFirstname("");
    setLast("");
  }

  function handleRemove(id) {
    let filter = full.filter((ele, index) => index !== id);
    console.log(filter);
    setFull(filter);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstname}
          placeholder="enter your firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          value={last}
          placeholder="enter your lastname"
          onChange={(e) => setLast(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <div>
        {full.map((ele, index) => (
          <div key={index}>
            <h1>Fullname : {`${ele.firstname}  ${ele.last}`}</h1>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem10;

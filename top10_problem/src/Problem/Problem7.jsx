import React, { useState } from "react";

const Problem7 = () => {
  const [firstname, setFirstname] = useState("");
  const [last, setLast] = useState("");
  const [full, setFull] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setFull([...full , {firstname , last}])
    setFirstname("")
    setLast("")
    
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
        {full.map((ele , index)=>(
            <h1>Fullname : {`${ele.firstname}  ${ele.last}`}</h1>
        ))}
      </div>
    </div>
  );
};

export default Problem7;

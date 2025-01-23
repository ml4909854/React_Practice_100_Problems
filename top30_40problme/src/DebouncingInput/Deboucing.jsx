import React, { useEffect, useState } from "react";


// Execute function after a creatain delay once the has action has stopped. This is an actual interview

const Deboucing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1000);
    return()=>{
        clearTimeout(timer)
    }
  }, [searchTerm]);

  useEffect(()=>{
if(debouncedTerm){
    console.log(debouncedTerm)
}

  },[debouncedTerm])
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Debounced Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {debouncedTerm && (
        <div style={{ marginTop: "20px" }}>
          <p>
            Showing results for: <strong>{debouncedTerm}</strong>
          </p>
          <ul>
            <li>Result 1 for "{debouncedTerm}"</li>
            <li>Result 2 for "{debouncedTerm}"</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Deboucing;

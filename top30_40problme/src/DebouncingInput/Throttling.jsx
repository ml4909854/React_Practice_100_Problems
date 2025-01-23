import React, { useEffect, useState } from "react";

const Throttling = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [throttledTerm, setThrottledTerm] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setThrottledTerm(searchTerm);
    }, 300); // Fixed interval of 300ms

    return () => {
      clearInterval(interval);
    };
  }, [searchTerm]); // Only updates at fixed intervals

  useEffect(() => {
    console.log(throttledTerm);
  }, [throttledTerm]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Throttle Search</h1>
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
      {throttledTerm && (
        <div style={{ marginTop: "20px" }}>
          <p>
            Showing results for: <strong>{throttledTerm}</strong>
          </p>
          <ul>
            <li>Result 1 for "{throttledTerm}"</li>
            <li>Result 2 for "{throttledTerm}"</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Throttling;

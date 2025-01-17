import React, { useState, useEffect } from "react";

const Problem12 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setData(data);
    };
    fetchData()
  }, []);

  return (
    <div>
      {data.map((ele , index) => (
        <h1 key={index}>{ele.title}</h1>
      ))}
    </div>
  );
};

export default Problem12;

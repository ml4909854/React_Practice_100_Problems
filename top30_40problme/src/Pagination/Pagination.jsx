import React, { useState, useEffect } from "react";

const PaginationWithAPI = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const postsPerPage = 10;
  useEffect(() => {
    async function fetchPosts() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  const totalPage = Math.ceil(posts.length / postsPerPage);

  const lastIndexOfPage = currentPage * postsPerPage;
  const firstIndexOfPage = lastIndexOfPage - postsPerPage;
  const currentPosts = posts.slice(firstIndexOfPage, lastIndexOfPage);
  console.log(currentPosts);
  console.log(lastIndexOfPage);
  console.log(firstIndexOfPage);

  function handleChange(e) {
   let timer = setTimeout(() => {
    setCurrentPage(e)
   },300);
   return()=>{
    clearTimeout(timer)
   }
  }
  const buttons = [];
  for (let i = 0; i < totalPage; i++) {
    buttons.push(<button onClick={() => handleChange(i + 1)}>{i + 1}</button>);
  }

  return (
    <>
      <div>
        {currentPosts.map((element, index) => {
          return (
            <div style={{ display: "flex", gap: "10px" }} key={index}>
              <p>{element.id}</p>
              <p>{element.title}</p>
            </div>
          );
        })}
      </div>
      <div>{buttons}</div>
    </>
  );
};

export default PaginationWithAPI;

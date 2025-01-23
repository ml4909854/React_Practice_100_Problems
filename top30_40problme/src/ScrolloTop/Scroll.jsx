import React, { useState, useEffect, useCallback } from 'react';

const InfiniteScroll = () => {
  const [data, setData] = useState([]); // To hold the list data
  const [loading, setLoading] = useState(false); // To track the loading state
  const [page, setPage] = useState(1); // To track the current page

  // Function to fetch data
  const fetchData = async (pageNumber) => {
    setLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`);
      const newData = await res.json();
      setData((prevData) => [...prevData, ...newData]); // Append new data
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Function to check if user has scrolled to the bottom
  const handleScroll = useCallback(() => {
    const bottom = Math.floor(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight;
    if (bottom && !loading) {
      setPage((prevPage) => prevPage + 1); // Go to the next page
    }
  }, [loading]);

  useEffect(() => {
    fetchData(page); 
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Attach scroll event
    return () => window.removeEventListener('scroll', handleScroll); // Clean up
  }, [handleScroll]);

  return (
    <div>
      <h1>Infinite Scroll List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>} {/* Show loading spinner when fetching data */}
    </div>
  );
};

export default InfiniteScroll;

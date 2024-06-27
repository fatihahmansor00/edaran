import React, { useEffect, useState } from 'react';
 
const CommentData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then( response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      
      .then (data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);
 
  if (loading) {
    return <p>Loading...</p>;
  }
 
  return (
    <div className="container">
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

 
export default CommentData;
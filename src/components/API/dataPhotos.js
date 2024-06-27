import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then( response => response.json())
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
            <h2>{item.title}</h2>
            <p>{item && <img src ={item.url} style={{ maxWidth: '20%'}}/>}</p> 
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};
 
export default ApiData;
import React, { useEffect, useState } from 'react';
 
const Coffeedata = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch('https://coffee.alexflipnote.dev/random.json')
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
          <p style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={data.file} style={{ maxWidth: '70%', alignSelf: 'center' }} />
          </p>
        </ul>
      </div>
    </div>
  );
};
 
export default Coffeedata;
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = () => {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    axios.get('/cows')
      .then(({ data }) => setCows(data))
      .catch(err => console.log( err ))
  }, [])
  return (
    <div className="container">
      {cows.map((cow) => (
        <div className="cow" key={cow.name+cow.weight}>
          <h2>
            {cow.name}
          </h2>
          <p>Description: {cow.description}</p>
          <p>Weight: {cow.weight} lbs</p>
        </div>
      ))}
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('/cows')
      .then(({ data }) => console.log(data))
      .catch(err => console.log( err ))
  }, [])
  return (
    <div>Hey</div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
const express = require('express');
const db = require('../db/index.js')

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.listen(port, (err) => {
  if (err) console.log('error connecting to server')
  else console.log('successfully connected to cows server')
});
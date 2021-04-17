const express = require('express');
const db = require('../db/index.js')
const { Cow } = db;

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  Cow.find()
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(400).send({ err }))
});

app.listen(port, (err) => {
  if (err) console.log('error connecting to server')
  else console.log('successfully connected to cows server')
});
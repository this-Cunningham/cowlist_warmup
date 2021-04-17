const express = require('express');
const db = require('../db/index.js')
const { Cow } = db;

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/cows', (req, res) => {
  Cow.find()
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(400).send({ err }))
});

app.post('/api/cow', (req, res) => {
  const { body } = req;
  console.log(body)

  const newCow = new Cow(body);
  newCow.save()
    .then(( data ) => res.status(201).send(data))
    .catch(err => res.status(400).send({ err }))
});

app.listen(port, (err) => {
  if (err) console.log('error connecting to server')
  else console.log('successfully connected to cows server')
});
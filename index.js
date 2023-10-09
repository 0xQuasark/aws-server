'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/bikes', (req, res) => {
  res.send('You got lotsa bikes!');
});

app.get('/cli', (req, res) => {
  res.send('You used the cli!');
});

app.listen(PORT, () => {
  console.log('CF Web Services running!');
});

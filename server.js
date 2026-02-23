<<<<<<< HEAD
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('SERVER LÄUFT!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server läuft auf Port ' + PORT);
=======
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('SERVER LÄUFT!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server läuft auf Port ' + PORT);
>>>>>>> 39677f0b0fbef1207a78de5bf5c9eae9d71fd8a8
});
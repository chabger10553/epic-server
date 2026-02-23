const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Healthcheck für Railway
app.get('/', (req, res) => {
  res.send('SERVER LÄUFT!');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server läuft auf Port ' + PORT);
});

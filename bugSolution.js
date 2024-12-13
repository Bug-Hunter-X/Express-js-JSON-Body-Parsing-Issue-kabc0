const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON request body
app.post('/data', (req, res) => {
  console.log(req.body); 
  if (!req.body) return res.status(400).send('Request body is missing');
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.post('/contact', (req, res) => {
  console.log('my request body:', req.body);
  res.sendFile('./thanks.html', {root: './public'});
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
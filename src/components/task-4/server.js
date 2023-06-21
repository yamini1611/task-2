const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/cart', (req, res) => {
  const cartData = JSON.parse(fs.readFileSync('cart.json'));
  res.json(cartData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

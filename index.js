const express = require('express');
const app = express();

const prices = {
  Laptop: [
    { dealer: "Dell", price: 1200 },
    { dealer: "HP", price: 1150 }
  ],
  Phone: [
    { dealer: "Samsung", price: 800 },
    { dealer: "Apple", price: 999 }
  ],
  Tablet: [
    { dealer: "Lenovo", price: 600 },
    { dealer: "Asus", price: 550 }
  ]
};

app.get('/pricing', (req, res) => {
  const product = req.query.product;
  if (product && prices[product]) {
    res.json(prices[product]);
  } else {
    res.json([]);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Dealer Pricing Service running on port ${PORT}`);
});

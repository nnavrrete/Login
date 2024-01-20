const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  const data = ['Elber Galarga', '12345678'];
  res.send({ data });
});

module.exports = router;
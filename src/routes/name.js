const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Charles');
});

module.exports = router;
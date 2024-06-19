const express = require('express');
const router = express.Router();

let delayTime = 0;

router.get('/', (req, res) => {
  delayTime = Number(req.query.delayTime);
  res.send(`Delay set to ${delayTime} ms`);
});

module.exports = {
  router,
  getDelayTime: () => delayTime
};
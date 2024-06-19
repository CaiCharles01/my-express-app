const { getDelayTime } = require('../routes/delay');

function delayResponse(req, res, next) {
  setTimeout(next, getDelayTime());
}

module.exports = delayResponse;
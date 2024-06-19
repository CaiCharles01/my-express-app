const express = require('express');
const delayResponse = require('./middleware/delayResponse');
const nameRouter = require('./routes/name');
const delayRouter = require('./routes/delay');

const app = express();


// Define routes
app.use('/delay', delayRouter.router);
app.use('/name', delayResponse, nameRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
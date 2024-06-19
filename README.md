# My Express App

This is a Node.js application built with Express framework.

## Project Structure

```
my-express-app
├── src
│   ├── server.js
│   ├── routes
│   │   ├── name.js
│   │   └── delay.js
│   └── middleware
│       └── delayResponse.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-express-app.git
   ```

2. Install the dependencies:

   ```bash
   cd my-express-app
   npm install
   ```

## Usage

Start the server:

```bash
npm start
```

The server will be running at `http://localhost:3000`.

## API

### `/name` (GET)

Returns the name "Charles".

### `/delay` (GET)

Sets the delay time for the `/name` route. The delay time should be passed as a query parameter `delayTime`.

Example: `/delay?delayTime=1000` sets a delay of 1000 ms for the `/name` route.

## Configuration

### Delayed Response

To configure delayed response for any API, use the `delayResponse` middleware.

Example usage:

```javascript
const express = require('express');
const delayResponse = require('./middleware/delayResponse');

const app = express();

// Apply delayResponse middleware to specific route
app.use('/name', delayResponse);

// Define routes
app.get('/name', (req, res) => {
  res.send('Charles');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In the above example, the [`delayResponse`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2FI525969%2Fworkspace%2Flibrary-test%2Fmy-express-app%2Fsrc%2Fmiddleware%2FdelayResponse.js%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2FI525969%2Fworkspace%2Flibrary-test%2Fmy-express-app%2Fsrc%2Fmiddleware%2FdelayResponse.js%22%2C%22path%22%3A%22%2FUsers%2FI525969%2Fworkspace%2Flibrary-test%2Fmy-express-app%2Fsrc%2Fmiddleware%2FdelayResponse.js%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A2%2C%22character%22%3A0%7D%5D "src/middleware/delayResponse.js") middleware is applied only to the `/name` route. You can modify the delay duration by sending a GET request to the `/delay` route with the desired delay time.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

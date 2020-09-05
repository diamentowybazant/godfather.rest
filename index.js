require('dotenv').config();
const app = require('./config/express');
const quotes = require('./routes/quotes');

const port = process.env.APP_PORT || 3000;

app.use('/api/v1', quotes);

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server is up and running on port: ${port}`);
});

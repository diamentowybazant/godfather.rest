const express = require('express');

const QuotesHandler = require('../utils/quotesHandler');

const router = express.Router();

router.get('/quote', (_, res) => {
  const quote = QuotesHandler.getRandomQuote();

  res.json({
    quote: QuotesHandler.getWithoutAuthor(quote),
    author: QuotesHandler.getAuthor(quote),
  });
});

module.exports = router;

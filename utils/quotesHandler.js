const quotes = require('./quotes.json');

/**
 * Quotes delimiter.
 */
const DELIMITER = '——';

/**
 * Get the random number.
 *
 * @param {number} max
 * @returns {number}
 */
const getRandomNumber = (max) => Math.floor(Math.random() * max);

/**
 * Get the random quote.
 *
 * @returns {string}
 */
const getRandomQuote = () => quotes[getRandomNumber(quotes.length)];

/**
 * Get the author of the quote.
 *
 * @param {string} quote
 * @returns {string}
 */
const getAuthor = (quote) => {
  const [, quoteAuthor] = quote.split(DELIMITER);

  return quoteAuthor
    ? quoteAuthor.trim()
    : '';
};

/**
 * Get the quote without the author.
 *
 * @param {string} quote
 * @returns {string}
 */
const getWithoutAuthor = (quote) => {
  const [quoteWithoutAuthor] = quote.split(DELIMITER);

  return quoteWithoutAuthor
    ? quoteWithoutAuthor.trim()
    : '';
};

module.exports = {
  getAuthor,
  getRandomQuote,
  getWithoutAuthor,
};

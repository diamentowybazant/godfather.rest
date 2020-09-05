/* eslint-disable quotes */
const Random = require('jest-mock-random');

const QuotesHandler = require('../quotesHandler');

jest.mock('../quotes.json', () => ([
  "I'm gonna make him an offer he can't refuse. —— Vito Corleone",
  "Barzini is dead. So is Philip Tattaglia. Moe Greene. Stracci. Cuneo. Today I settled all family business so don't tell me that you're innocent. Admit what you did. —— Michael Corleone",
  "Women and children can afford to be careless, but not men. —— Vito Corleone",
  "NO_AUTHOR_QUOTE",
]));

test.each([
  [0.1, "I'm gonna make him an offer he can't refuse. —— Vito Corleone"],
  [0.4, "Barzini is dead. So is Philip Tattaglia. Moe Greene. Stracci. Cuneo. Today I settled all family business so don't tell me that you're innocent. Admit what you did. —— Michael Corleone"],
  [0.7, "Women and children can afford to be careless, but not men. —— Vito Corleone"],
])('returns the random quote = [%s] %p', (random, expected) => {
  Random.mockRandom(random);

  expect(QuotesHandler.getRandomQuote()).toBe(expected);

  Random.resetMockRandom();
});

test.each([
  [0.1, "Vito Corleone"],
  [0.4, "Michael Corleone"],
  [0.7, "Vito Corleone"],
  [0.9, ""],
])('returns the author of the quote = [%s] %p', (random, expected) => {
  Random.mockRandom(random);

  const quote = QuotesHandler.getRandomQuote();
  expect(QuotesHandler.getAuthor(quote)).toBe(expected);

  Random.resetMockRandom();
});

test.each([
  [0.1, "I'm gonna make him an offer he can't refuse."],
  [0.4, "Barzini is dead. So is Philip Tattaglia. Moe Greene. Stracci. Cuneo. Today I settled all family business so don't tell me that you're innocent. Admit what you did."],
  [0.7, "Women and children can afford to be careless, but not men."],
])('returns the quote without the author = [%s] %p', (random, expected) => {
  Random.mockRandom(random);

  const quote = QuotesHandler.getRandomQuote();
  expect(QuotesHandler.getWithoutAuthor(quote)).toBe(expected);

  Random.resetMockRandom();
});

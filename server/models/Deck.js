const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const deckSchema = new Schema({
  deckTitle: {
    type: String,
    required: 'You need to leave a deck!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  deckAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  cards: [
    {
      cardText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      cardAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Deck = model('Deck', deckSchema);

module.exports = Deck;

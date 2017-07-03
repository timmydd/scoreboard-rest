'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ScoreSchema = new Schema({
  gameId: {
    type: String,
    Required: 'Your name and game title separated with underscores'
  },
  playerName: {
    type: String,
    default: "John Doe"
  },
  playerScore: {
    type: Number,
    default: 0
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Scoreboard', ScoreSchema);
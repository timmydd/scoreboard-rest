'use strict';
module.exports = function(app) {
  var scoreBoard = require('../controllers/exampleController');


  // todoList Routes
  app.route('/scoreboard')
    .get(scoreBoard.list_all_scores)
    .post(scoreBoard.create_a_score);


  app.route('/scoreboard/edit')
    .get(scoreBoard.read_a_score)
    .put(scoreBoard.update_a_score)
    .delete(scoreBoard.delete_a_score);
};

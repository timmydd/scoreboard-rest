'use strict';


var mongoose = require('mongoose'),
  Scoreboard = mongoose.model('Scoreboard');

exports.list_all_scores = function(req, res) {
  Scoreboard.find({}, function(err, score) {
    if (err)
      res.send(err);
    res.json(score);
  });
};




exports.create_a_score = function(req, res) {
  var new_task = new Scoreboard(req.body);
  new_task.save(function(err, score) {
    if (err)
      res.send(err);
    res.json(score);
  });
};


exports.read_a_score = function(req, res) {
  Scoreboard.findById(req.params.taskId, function(err, score) {
    if (err)
      res.send(err);
    res.json(score);
  });
};


exports.update_a_score = function(req, res) {
  Scoreboard.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, score) {
    if (err)
      res.send(err);
    res.json(score);
  });
};


exports.delete_a_score = function(req, res) {


  Scoreboard.remove({
    _id: req.params.taskId
  }, function(err, score) {
    if (err)
      res.send(err);
    res.json({ message: 'Score successfully deleted' });
  });
};

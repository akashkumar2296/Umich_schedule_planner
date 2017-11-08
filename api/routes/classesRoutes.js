'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/classesController');

  // todoList Routes
  app.route('/classes')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
};
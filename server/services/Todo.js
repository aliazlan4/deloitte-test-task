const Todo = require('../models/Todo');

module.exports =  {
    async getAllTodos(req, res, next) {
      const todos = await Todo.find({
        user: req.user._id
      }).exec();
      res.json({
        status: true,
        todos: todos
      });
    },

    async addTodo(req, res, next) {
      const todo = new Todo();
      todo.text = req.body.new_todo;
      todo.user = req.user._id;

      await todo.save();
      
      res.json({
        status: true,
        todo: todo
      });
    },
    
    async deleteTodo(req, res, next) {
      await Todo.findOneAndRemove({
        _id: req.params.id,
        user: req.user._id
      }).exec();

      res.json({
        status: true
      });
    },
}
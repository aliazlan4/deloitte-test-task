const Todo = require('../models/Todo');

module.exports =  {
    async getAllTodos(req, res, next) {
        Todo.find()
          .exec()
          .then((todos) => res.json(todos))
          .catch((err) => next(err));
    },

    async addTodo(req, res, next) {
        const todo = new Todo();
        todo.text = req.body.new_todo;
        todo.user = '5c72b4f61d32823f7aeb50de';

        todo.save()
          .then(() => res.json(todo))
          .catch((err) => next(err));
    },
    
    async deleteTodo(req, res, next) {
        Todo.findOneAndRemove({
            _id: req.params.id
          })
          .exec()
          .then((Todo) => res.json())
          .catch((err) => next(err));
    },
}
const TodoService = require('../../services/Todo');

module.exports = (app) => {
  app.get('/api/todos', TodoService.getAllTodos);
  app.post('/api/todos', TodoService.addTodo);
  app.delete('/api/todos/:id', TodoService.deleteTodo);
};

const TodoService = require('../../services/Todo');
const authMiddleware = require('../auth_middleware');

module.exports = (app) => {
  app.get('/api/todos', authMiddleware, TodoService.getAllTodos);
  app.post('/api/todos', authMiddleware, TodoService.addTodo);
  app.delete('/api/todos/:id', authMiddleware, TodoService.deleteTodo);
};

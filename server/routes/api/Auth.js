const AuthService = require('../../services/Auth');

module.exports = (app) => {
  app.post('/api/auth/signup', AuthService.signup);
  app.post('/api/auth/login', AuthService.login);
};

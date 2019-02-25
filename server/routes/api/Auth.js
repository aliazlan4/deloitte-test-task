const AuthService = require('../../services/Auth');
const passport = require('../../passport');

module.exports = (app) => {
  app.get('/api/auth', AuthService.getUser);
  app.post('/api/auth/signup', AuthService.signup);
  app.post('/api/auth/login', passport.authenticate('local'), AuthService.login);
  app.post('/api/auth/logout', AuthService.logout);
};

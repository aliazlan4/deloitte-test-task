const User = require('../models/User')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy({
    usernameField: 'username' // not necessary, DEFAULT
  },
  function (username, password, done) {
    User.findOne({
      username: username
    }, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, {
          status: false,
          message: 'Incorrect username'
        })
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          status: false,
          message: 'Incorrect password'
        })
      }
      return done(null, user)
    })
  }
)

module.exports = strategy
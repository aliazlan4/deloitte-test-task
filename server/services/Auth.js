const User = require('../models/User');

module.exports =  {
    async signup(req, res, next) {
      const {username} = req.body;
      const {password} = req.body;

      const username_already_exists = await User.find({username: username}).count();

      if (username_already_exists > 0) {
        res.json({
          status: false,
          message: 'Username Already Exists'
        });
      } else if (username.length < 6) {
        res.json({
          status: false,
          message: 'Username should be atleast 6 characters long'
        });
      } else if (password.length < 6) {
        res.json({
          status: false,
          message: 'Password should be atleast 6 characters long'
        });
      } else {
        let new_user = new User();
        new_user.username = username;
        new_user.password = new_user.generateHash(password);
        await new_user.save();

        res.json({
          status: true,
          message: 'Signed Up Successfully'
        });
      }
    },

    async login(req, res, next) {

      res.json({
        status: true,
        message: 'Logged In Successfully'
      });

    },

    async logout(req, res, next) {
      if (req.user) {
        req.logout();
        res.json({
          status: true,
          message: 'Logged Out Successfully'
        });
      } else {
        res.json({
          status: false,
          message: 'No user to logout'
        });
      }

    },

    async getUser(req, res, next) {
      if (req.user) {
        let user = req.user;
        delete user.password;
        res.json({
          status: true,
          message: 'User is Logged In',
          user: user
        });
      } else {
        res.json({
          status: false,
          message: 'User is not Logged In'
        });
      }

    },
}
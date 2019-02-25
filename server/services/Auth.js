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
      const {username} = req.body;
      const {password} = req.body;

      const user = await User.findOne({username: username});

      if (!user) {
        res.json({
          status: false,
          message: 'User deosnt exist'
        });
      } else if (!user.validPassword(password)) {
        res.json({
          status: false,
          message: 'Incorrect Password'
        });
      } else {
        res.json({
          status: true,
          message: 'Logged In Successfully'
        });
      }
    },
}
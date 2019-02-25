module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json({
    status: false,
    message: 'User not logged in'
  });
}
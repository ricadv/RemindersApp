let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render('auth/login')
  },

  register: (req, res) => {
    res.render('auth/register', {email: req.query.email})
  },

  loginSubmit: (req, res) => {
    // implement
  },

  registerSubmit: (req, res) => {
    // implement
  }
}

module.exports = authController;

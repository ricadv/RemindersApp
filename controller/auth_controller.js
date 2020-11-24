let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render('auth/login')
  },

  register: (req, res) => {
    res.render('auth/register')
  },

  loginSubmit: (req, res) => {
    if (req.body.username && req.body.password) {
      if (database[req.body.username].password == req.body.password) {
        req.session["user"] = req.body.username
        res.redirect("/reminders");
      } else {
        res.redirect("/login");
      }
    } else {
      res.status(400);
      res.send('invalid user');
    }
  },

  registerSubmit: (req, res) => {
    if (req.body.username && req.body.password) {
      database[req.body.username] = {username: req.body.username, password: req.body.password, reminders: []}
      req.session["user"] = req.body.username
      res.redirect('/reminders');
    } else {
      res.status(400);
      res.send('missing input')
    }
  }
}

module.exports = authController;

let database = require("../database");

let authController = {
  login: (req, res) => {
    res.locals.title = "login"
    res.render('auth/login')
  },

  register: (req, res) => {
    res.locals.title = "register"
    res.render('auth/register')
  },

  loginSubmit: (req, res) => {
    if (req.body.username) {
      try{
        if (database[req.body.username].password == req.body.password) {
          req.session["user"] = req.body.username
          res.redirect("/reminders");
        } else {
          // Wrong Password
          req.body.warning = "badPassword"
          res.render("auth/login", { login: req.body });
        }
      } catch {
        // Email is not in database
        req.body.warning = "noUser"
        res.render("auth/login", { login: req.body });
      }
    } else {
      // No email address
      req.body.warning = "missingEmail"
      res.render("auth/login", { login: req.body })
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
  },

  //logout. Simply destroy the session. 
  logout: (req,res) => {
    req.session = null
    res.redirect('/');
  }
}

module.exports = authController;

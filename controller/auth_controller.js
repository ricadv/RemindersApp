let database = require("../database");

let authController = {
  login: (req, res) => {
    res.locals.page = "login"
    res.render('auth/login')
  },

  register: (req, res) => {
    res.locals.page = "register"
    res.render('auth/register', { email: req.query.email })
  },

  loginSubmit: (req, res) => {
    res.locals.page = "login"
    // Both fields completed
    if (req.body.email && req.body.password) {
      // Email is in database
      if (req.body.email == Object.keys(database).find(key => key == [req.body.email])) {
        // Password is correct
        if (database[req.body.email].password == req.body.password) {
          req.session["user"] = req.body.email
          res.redirect("/reminders");
        // Wrong Password
        } else {
          req.body.warning = "badPassword"
          res.render("auth/login", { login: req.body });
        }
      // Email is not in database
      } else {
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
    res.locals.page = "register"
    // All 3 fields completed
    if (req.body.email && req.body.password && req.body.confirmation) {
      // Email is not in database
      if (req.body.email != Object.keys(database).find(key => key == [req.body.email])) {
        // Password matches confirmation
        if (req.body.password == req.body.confirmation) {
          database[req.body.email] = {email: req.body.email, password: req.body.password, reminders: []}
          req.session["user"] = req.body.email
          res.redirect('/reminders');
        // Password does not match confirmation
        } else {
          req.body.warning = "badPassword"
          res.render("auth/register", { register: req.body });
        }
      // Email is already in database
      } else {
        req.body.warning = "registered"
        res.render("auth/register", { register: req.body });
      }
    } else {
      req.body.warning = "missingEmail"
      res.render("auth/register", { register: req.body });
    }
  },

  //logout. Simply destroy the session. 
  logout: (req,res) => {
    req.session = null
    res.redirect('/');
  }
}

module.exports = authController;

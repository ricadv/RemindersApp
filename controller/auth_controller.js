const fetch = require("node-fetch")
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

  registerSubmit: async (req, res) => {
    res.locals.page = "register"
    // All 4 fields completed
    if (req.body.email && req.body.username && req.body.password && req.body.confirmation) {
      console.log(Object.values(database).map(object => object.email))
      // Email is not in database
      if (req.body.email != Object.keys(database).find(item => item == req.body.email)) {
        // Password matches confirmation
        if (req.body.password == req.body.confirmation) {
          database[req.body.email] = {
            username: req.body.username, 
            email: req.body.email, 
            password: req.body.password,
            picture: await getImage(), 
            reminders: [], 
            friends: []
          };
          console.log(database)
          req.session["user"] = req.body.email;
          res.redirect('/reminders');
        // Password does not match confirmation
        } else {
          req.body.warning = "badPassword";
          res.render("auth/register", { register: req.body });
        }
      // Email is already in database
      } else {
        req.body.warning = "registered";
        res.render("auth/register", { register: req.body });
      }
    // Empty email field
    } else if (! req.body.email) {
      req.body.warning = "noEmail";
      res.render("auth/register", { register: req.body });
    // Email is already registered
    } else if (req.body.email == Object.keys(database).find(item => item == req.body.email)) {
      req.body.warning = "registered";
      res.render("auth/register", { register: req.body });
    // Empty username field
    } else if (! req.body.username) {
      req.body.warning = "noUsername";
      res.render("auth/register", { register: req.body });
    // Empty password or confirmation field
    } else {
      req.body.warning = "noPassword"
      res.render("auth/register", { register: req.body });
    }
  },

  //logout. Simply destroy the session. 
  logout: (req,res) => {
    req.session = null
    res.redirect('/');
  }
}

const getImage = async () => {
  const clientId = "6h1mm2ORwX898OU2Nz0_0PMPgUIkqPMvXS-ihZqjUXQ";
  const query = "cats"
  const url = `https://api.unsplash.com/photos/random?client_id=${clientId}&query=${query}&orientation=squarish`;
  const response = await fetch(url)
  .then(data => data.json())
  .then(newData => [newData.urls.regular, newData.urls.thumb])
  return response
}

module.exports = authController;

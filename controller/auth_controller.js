const fetch = require("node-fetch")
const { getAll, insertOne } = require("../test.js")

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
    const email = req.body.email
    const password = req.body.password
    getAll().then((data) => {
      // Both fields completed
      if (email && password) {
        // Email is in database
        if (data.find(user => user.email == email)) {
          const correct_password = (data.find(user => user.email == email).password)
          // Password is correct
          if (correct_password == password) {
            req.session["user"] = email
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
    }).catch()
  },

  registerSubmit: async (req, res) => {
    res.locals.page = "register"
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const confirmation = req.body.confirmation
    getAll().then((data) => {
      // All 4 fields completed
      if (email && username && password && confirmation) {
        // Email is not in database
        if (! data.find(user => user.email == email)) {
          // Password matches confirmation
          if (password == confirmation) {
            const picture = getImage()
            insertOne(username, email, password, picture).then(() => {
              req.session["user"] = email;
              res.redirect('/reminders');
            })
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
      } else if (! email) {
        req.body.warning = "noEmail";
        res.render("auth/register", { register: req.body });
      // Email is already registered
      } else if (data.find(user => user.email == email)) {
        req.body.warning = "registered";
        res.render("auth/register", { register: req.body });
      // Empty username field
      } else if (! username) {
        req.body.warning = "noUsername";
        res.render("auth/register", { register: req.body });
      // Empty password or confirmation field
      } else {
        req.body.warning = "noPassword"
        res.render("auth/register", { register: req.body });
      }
    }).catch()
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

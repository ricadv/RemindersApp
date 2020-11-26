let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.locals.page = "list"
    res.render('reminder/index', { reminders: req.user.reminders })
  },

  new: (req, res) => {
    res.locals.page = "create"
    res.render('reminder/create')
  },

  listOne: (req, res) => {
    console.log(req.user)
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: req.user.reminders })
    }
  },

  create: (req, res) => {
    let reminder = {
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false
    }
    database[req.user.username].reminders.push(reminder);
    res.redirect('/reminders');
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    res.render('reminder/edit', { reminderItem: searchResult })

  },

  update: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database[req.user.username].reminders.find(function (reminder) {
      if (reminder.id == reminderToFind) {
          reminder.title = req.body.title,
          reminder.description = req.body.description,
          reminder.completed = req.body.completed == "true"
      }
    });
    res.redirect('/reminder/' + reminderToFind)
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id;
    let reminderIndex = req.user.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    })
    database[req.user.username].reminders.splice(reminderIndex, 1);
    res.redirect('/reminders');
  }
}

module.exports = remindersController;

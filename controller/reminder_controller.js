let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.locals.title = "Reminders"
    res.render('reminder/index', {database: database, user: "cindy"})
  },

  new: (req, res) => {
    res.locals.title = "Create"
    res.render('reminder/create')
  },

  listOne: (req, res) => {
    res.locals.title = "View"
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  create: (req, res) => {
    res.locals.title = "Create"
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false
    }
    database.cindy.reminders.push(reminder);
    res.redirect('/reminders');
  },

  edit: (req, res) => {
    res.locals.title = "Edit"
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    res.render('reminder/edit', { reminderItem: searchResult })

  },

  update: (req, res) => {
    res.locals.title = "Update"
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      if (reminder.id == reminderToFind) {
        reminder.title = req.body.title,
          reminder.description = req.body.description,
          reminder.completed = req.body.completed == "true"
      }
    });
    res.redirect('/reminder/' + reminderToFind)
  },

  delete: (req, res) => {
    res.locals.title = "Delete"
    let reminderToFind = req.params.id;
    let reminderIndex = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    })
    database.cindy.reminders.splice(reminderIndex, 1);
    res.redirect('/reminders');
  }
}

module.exports = remindersController;

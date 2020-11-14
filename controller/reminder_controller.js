let database = require("../database");

let remindersController = {
  // Show a list of reminders
  list: (req, res) => { 
    res.render('reminder/index', { reminders: database.cindy.reminders })
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.render('reminder/create')
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.redirect("/reminders")
      // res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  // Create a reminder
  // ⚠️ TODO: Currently hardcoded to always create a reminder for Cindy only. You need to make this dynamic. 
  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false
    }
    database.cindy.reminders.push(reminder);
    res.redirect('/reminders');
  },

  // Show the Edit Reminder Page
  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/edit', { reminderItem: searchResult })
    } else {
      res.redirect("/reminders")
      // res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  // Edit the Reminder
  update: (req, res) => {
    let reminderToUpdate = req.params.id
    let updateIndex = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToUpdate;
    })
    const reminders = database.cindy.reminders;
    reminders[updateIndex].id = req.params.id;
    reminders[updateIndex].title = req.body.title;
    reminders[updateIndex].description = req.body.description;
    reminders[updateIndex].completed = (req.body.completed == "true");
    res.render('reminder/single-reminder', { reminderItem: database.cindy.reminders[updateIndex] })
  },

  // Delete the Reminder
  delete: (req, res) => {
    let reminderToDelete = req.params.id
    let updateIndex = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToDelete;
    })
    database.cindy.reminders.splice(updateIndex, 1)
    res.redirect('/reminders')
  }
}

module.exports = remindersController;

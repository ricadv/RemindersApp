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
      // res.redirect("/reminder",)
      res.render('reminder/index', { reminders: database.cindy.reminders })
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
    let reminder = {
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed == "true"
    }
    database.cindy.reminders.splice(reminder.id-1, 1, reminder);

    res.render('reminder/single-reminder', { reminderItem: database.cindy.reminders[reminder.id-1] })
  },

  // Delete the Reminder
  delete: (req, res) => {
    let reminderId = req.params.id;
    let updatedReminders = database.cindy.reminders.filter((reminder) => {
      return reminder.id != reminderId
    })
    updatedReminders.forEach((reminder, index) => {
      reminder.id = [index+1]
    })
    database.cindy.reminders = updatedReminders
    res.redirect('/reminders')
  }
}

module.exports = remindersController;

let database = require("../database");

let remindersController = {
  list: (req, res) => {
<<<<<<< HEAD
    res.render('reminder/index', {database: database, user: "cindy"})
=======
    res.locals.page = "list"
    res.render('reminder/index', { reminders: req.user.reminders })
>>>>>>> 74ba6bec49c1230df888f5d5f74371828914b926
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
    console.log(req.body)
    let subtasks = []
    for (let [item,value] of Object.entries(req.body)) {
      if (item.includes("subtask") && value != "") {
        subtasks.push({description: value, completed: false})
      }
    }
    let tags = []
    for (let [item,value] of Object.entries(req.body)) {
      if (item.includes("tag") && value != "") {
        tags.push(value)
      }
    }
    let reminder = {
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
      subtasks: subtasks,
      tags: tags
    }
    database[req.user.email].reminders.push(reminder);
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
    let subtasks = []
    for (let [item,value] of Object.entries(req.body)) {
      console.log(item, value)
      if (item.includes("subtask") && (value != "")) {
        let index = item.split("-")[1]
        subtasks.push({description: value, completed: req.body["subCompleted-" + index] == "true"})
      }
    }
    let tags = []
    for (let [item,value] of Object.entries(req.body)) {
      if (item.includes("tag") && value != "") {
        tags.push(value)
      }
    }
    let reminderToFind = req.params.id;
    let searchResult = database[req.user.email].reminders.find(function (reminder) {
      if (reminder.id == reminderToFind) {
        reminder.title = req.body.title,
        reminder.description = req.body.description,
        reminder.completed = req.body.completed == "true",
        reminder.subtasks = subtasks,
        reminder.tags = tags
      }
    });
    res.redirect('/reminder/' + reminderToFind)
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id;
    let reminderIndex = req.user.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    })
    database[req.user.email].reminders.splice(reminderIndex, 1);
    res.redirect('/reminders');
  }
}

module.exports = remindersController;

let database = require("../database");

let remindersController = {
  list: async (req, res) => {
    res.locals.page = "list"
    let allReminders = [{ friend: req.user.email, username: req.user.username, picture: req.user.picture[1], reminders: req.user.reminders }]
    let friendsList = database[req.user.email].friends
    friendsList.forEach((friend) => {
      allReminders.push({ friend: friend, username: database[friend].username, picture: database[friend].picture[1], reminders: database[friend].reminders })
    })
    res.render('reminder/index', { reminders: allReminders })
  },

  new: (req, res) => {
    res.locals.page = "create"
    res.render('reminder/create')
  },

  listOne: (req, res) => {
    if (req.user.email == req.params.username) {
      res.locals.id = "user"
    }
    let userToFind = req.params.username
    let userFriend = Object.keys(database).find(function (username) {
      return username == userToFind;
    })

    let reminderToFind = req.params.id;
    let searchResult = database[userFriend].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.redirect('/reminders')
    }
  },

  create: (req, res) => {
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
    res.redirect('/reminder/' + database[req.user.email].email + "&" + reminderToFind)
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id;
    let reminderIndex = req.user.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    })
    database[req.user.email].reminders.splice(reminderIndex, 1);
    res.redirect('/reminders');
  },

}

module.exports = remindersController;

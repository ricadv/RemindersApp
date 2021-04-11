const { getAll, getOne, updateOne } = require("../database");

let remindersController = {

  list: async (req, res) => {
    res.locals.page = "list"
    getAll().then((data) => {
      let userDoc = data.find(userObj => userObj.email == req.session.user)
      let friendsList = userDoc.friends
      let allReminders = [{friend: userDoc.email, username: userDoc.username, picture: userDoc.picture[1], reminders: userDoc.reminders}]
      data.forEach(userObj => {
        if (friendsList.includes(userObj.email)) {
          allReminders.push(
            {
              friend: userObj.email,
              username: userObj.username,
              picture: userObj.picture[1],
              reminders: userObj.reminders
            }
          )
        }
      })
      req.session["count"] = userDoc.reminders.length
      res.render('reminder/index', { reminders: allReminders })
    })
  },

  new: (req, res) => {
    res.locals.page = "create"
    res.render('reminder/create')
  },

  listOne: async (req, res) => {
    if (req.session.user == req.params.username) {
      res.locals.id = "user"
    }
    let target = req.params.username
    let reminderToFind = req.params.id;
    getOne(target).then((data) => {
      let targetReminder = data.reminders.find(function (reminder) {
        return reminder.id == reminderToFind;
      })
      if (targetReminder != undefined) {
        res.render('reminder/single-reminder', { reminderItem: targetReminder })
      } else {
        res.redirect('/reminders')
      }
    })
  },

  create: async (req, res) => {
    let email = req.session.user
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
      id: req.session.count + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
      subtasks: subtasks,
      tags: tags
    }
    getOne(email).then((data) => {
      data.reminders.push(reminder)
      updateOne(email, data).then(() =>{
        res.redirect('/reminders');
      })
    })

  },

  edit: async (req, res) => {
    let target = req.session.user
    let reminderToFind = req.params.id;
    getOne(target).then((data) => {
      let targetReminder = data.reminders.find(function (reminder) {
        return reminder.id == reminderToFind;
      })
      res.render('reminder/edit', { reminderItem: targetReminder })
    })
  },

  update: (req, res) => {
    let subtasks = []
    for (let [item,value] of Object.entries(req.body)) {
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

    let email = req.session.user
    let targetReminder = req.params.id;
    getOne(email).then((data) => {
      targetIndex = data.reminders.findIndex(reminder => reminder.id == targetReminder)
      
      data.reminders[targetIndex].title = req.body.title
      data.reminders[targetIndex].description = req.body.description
      data.reminders[targetIndex].completed = req.body.completed == "true"
      data.reminders[targetIndex].subtasks = subtasks
      data.reminders[targetIndex].tags = tags

      updateOne(email, data).then(() =>{
        res.redirect('/reminder/' + email + "&" + targetReminder)
      })
    })
  },

  delete: async (req, res) => {
    let email = req.session.user
    let targetReminder = req.params.id;
    getOne(email).then((data) => {
      targetIndex = data.reminders.findIndex(reminder => reminder.id == targetReminder)
      data.reminders.splice(targetIndex, 1)
      updateOne(email, data).then(() =>{
        res.redirect('/reminders');
      })
    })
  },

}

module.exports = remindersController;

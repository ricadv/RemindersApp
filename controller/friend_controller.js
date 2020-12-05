const fetch = require("node-fetch")
let database = require("../database");

let friendController = {
    list: (req, res) => {
        res.locals.page = "friends"
        user_list = Object.values(database).filter((user) => {
            if (user != req.user) {
                return user
            }
        })
        user_list.unshift(req.user)
        res.render('friend/friendlist', { users: user_list })
    },

    add: (req, res) => {
        friend = req.params.email
        database[req.user.email].friends.push(friend);
        res.redirect('/friends');
    },

    delete: (req, res) => {
        let friendToFind = req.params.email;
        let friendIndex = req.user.friends.findIndex(function (friend) {
          return friend == friendToFind;
        })
        database[req.user.email].friends.splice(friendIndex, 1);
        console.log(database[req.user.email].friends)
        res.redirect('/friends');
      },
}

module.exports = friendController;
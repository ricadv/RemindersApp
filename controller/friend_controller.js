const fetch = require("node-fetch")
let { getAll, getOne, updateOne } = require("../database");

let friendController = {

    list: async (req, res) => {
        res.locals.page = "friends"
        getAll().then((data) => {
            let user_list = data.filter((user) => {
                if (user.email != req.session.user) {
                    return user
                }
            })
            let sessionUser = data.find(userObj => userObj.email == req.session.user)
            user_list.unshift(sessionUser)
            res.render('friend/friendlist', { users: user_list })
        })
    },

    add: async (req, res) => {
        let email = req.session.user
        let friend = req.params.email
        getOne(email).then((data) => {
            data.friends.push(friend)
            updateOne(email, data).then(() => {
                res.redirect('/friends');
            })
        })
    },

    delete: (req, res) => {
        let email = req.session.user
        let friendToFind = req.params.email;
        getOne(email).then((data) => {
            let friendIndex = data.friends.findIndex(function (friend) {
                return friend == friendToFind;
            })
            data.friends.splice(friendIndex, 1)
            updateOne(email, data).then(() => {
                res.redirect('/friends');
            })
        })
      },
}

module.exports = friendController;
const fetch = require("node-fetch")
let database = require("../database");

let friendController = {
    list: (req, res) => {
        res.locals.page = "friends"
        res.render('friend/friendlist')
    },

    update: (req, res) => {
        res.locals.page = "friends"
        res.render('friend/friendlist')
    },

}


module.exports = friendController;
let database = require("../database");
const { getAll, insertOne } = require("../test.js")

let authCheck = (req, res, next) => {
    if (req.session.user) {
        next()
        // if (database[req.session.user]) {
        //     req.user = database[req.session.user];
        //     next();
        // };
    } else {
        res.redirect("/login");
    }
}

module.exports = authCheck;
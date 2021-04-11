let database = require("../database");

let exitCheck = (req, res, next) => {
    if (req.session.user) {
        if (database[req.session.user]) {
            req.user = database[req.session.user];
            res.redirect("/reminders");
        } else {
            next();
        }
    } else {
        next();
    }
}

module.exports = exitCheck;
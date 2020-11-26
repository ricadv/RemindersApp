const express = require("express");
const cookieSession = require('cookie-session')
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const authCheck = require("./middleware/auth")

const app = express();

app.use(cookieSession({
  name: "session",
  keys: ["abc", "def", "ghi"],
  maxAge: 10*24*3600*1000
}));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

app.set("view engine", "ejs");

// Routes start here

app.get("/reminders", authCheck, reminderController.list)

app.get("/reminder/new", authCheck, reminderController.new)

app.get("/reminder/:username&:id", authCheck, reminderController.listOne)

app.get("/reminder/:id/edit", authCheck, reminderController.edit)

app.post("/reminder/", authCheck, reminderController.create)

app.post("/reminder/update/:id", authCheck, reminderController.update)

app.post("/reminder/delete/:id", authCheck, reminderController.delete)


app.get("/register", authController.register);

app.get("/login", authController.login);

app.post("/register", authController.registerSubmit);
app.post("/login", authController.loginSubmit);

app.post('/logout', authController.logout);

app.listen(3001, function () {
  console.log("Server running. Visit: localhost:3001/reminders in your browser 🚀");
});

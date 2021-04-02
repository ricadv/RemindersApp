const { getAll, getOne, insertOne } = require("./test");

const stuff = { "email" : "hello@me.com", "username" : "Harrison"}
insertOne(stuff).then(() => {
    // const user_email = "cindy@cindy.com"
    // // console.log(data.find(user => user.email == user_email).username)
    // if (user_email == data.find(user => user.email == user_email).email) {
    //     console.log(data.find(user => user.email == user_email))
    // }
    console.log("ok")
}).catch()



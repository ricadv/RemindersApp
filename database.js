const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://joseph:mongodbpassword@remindersappmongodbclus.5lwzt.mongodb.net/remindersApp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function getAll() {
    try {
        await client.connect();
        const cursor = client.db("remindersApp").collection("database").find()
        const database = await cursor.toArray()
        return database
    }
    catch (e) {
        console.error(e);
    }
}

async function getOne(email) {
    try {
        await client.connect();
        const user = await client.db("remindersApp").collection("database").findOne({ email: email })
        return user
    }
    catch (e) {
        console.error(e);
    }
}

async function insertOne(username, email, password, picture) {
    try {
        await client.connect();
        const result = await client.db("remindersApp").collection("database").insertOne({
            "username": username,
            "email": email,
            "password": password,
            "picture": picture,
            "reminders": [],
            "friends": []
        })
    }
    catch (e) {
        console.error(e);
    }
}

async function updateOne(email, data) {
    try {
        await client.connect();
        const filter = { email: email }
        const updateDoc = {
            $set: {
                reminders: data.reminders,
                friends: data.friends,
            }
        }
        const result = await client.db("remindersApp").collection("database").updateOne(filter, updateDoc)
    }
    catch (e) {
        console.error(e);
    }
}

async function deleteOne(email) {
    try {
        await client.connect();
        const result = await client.db("remindersApp").collection("database").deleteOne({ email: email })
    }
    catch (e) {
        console.error(e);
    }
}

module.exports = { getAll, getOne, insertOne, updateOne, deleteOne }
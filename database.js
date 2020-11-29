let Database = {
    "cindy@cindy.com": {
        username: "cindy",
        email: "cindy@cindy.com",
        password: "cindy",
        reminders: [{id: 1, title: "Cindy 1", description: "hello cindy", completed: false, subtasks: [{description: "subtask 1", completed: false}], tags: ["Greeting", "Hello"]}],
        friends: ["bobby@bobby.com"]
    },
    "bobby@bobby.com": {
        username: "bobby",
        email: "bobby@bobby.com",
        password: "bobby",
        reminders: [{id: 1, title: "Bobby1", description: "hello bobby", completed: false, subtasks: [], tags: [] }],
        friends: []
    } 
}

module.exports = Database;
let Database = {
    "cindy@cindy.com": {
        email: "cindy@cindy.com",
        password: "cindy",
        reminders: [{id: 1, title: "Cindy 1", description: "hello cindy", completed: false, subtasks: [{description: "subtask 1", completed: false}], tags: ["Greeting", "Hello"]}],
    },
    "bobby@bobby.com": {
        email: "bobby@bobby.com",
        password: "bobby",
        reminders: [{id: 1, title: "Bobby1", description: "hello bobby", completed: false, subtasks: [], tags: [] }],

    } 
}

module.exports = Database;
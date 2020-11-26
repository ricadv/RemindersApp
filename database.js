let Database = {
<<<<<<< HEAD
    cindy: {
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}],
        friends: ["alex"]
    },
    alex: {
        reminders: [{id: 2, title: "Social Reminder",
        description: "Test the social reminder function",
        completed: false}],
        friends: ["cindy"]
=======
    "cindy@cindy.com": {
        email: "cindy@cindy.com",
        password: "cindy",
        reminders: [{id: 1, title: "Cindy 1", description: "hello cindy", completed: false, subtasks: [{description: "subtask 1", completed: false}], tags: ["Greeting", "Hello"]}],
    },
    "bobby@bobby.com": {
        email: "bobby@bobby.com",
        password: "bobby",
        reminders: [{id: 1, title: "Bobby1", description: "hello bobby", completed: false, subtasks: [], tags: [] }],

>>>>>>> 74ba6bec49c1230df888f5d5f74371828914b926
    } 
}

module.exports = Database;
let Database = {
    cindy: {
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}],
        friends: ["alex"]
    },
    alex: {
        reminders: [{
            id: 2,
            title: "Social Reminder",
            description: "Test the social reminder function",
            completed: false
        }],
        friends: []
    } 
}

module.exports = Database;
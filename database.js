let Database = {
    "cindy@cindy.com": {
        username: "cindy",
        email: "cindy@cindy.com",
        password: "cindy",
        picture: [
            'https://images.unsplash.com/photo-1509589130981-f70226276f6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NzE0OX0',
            'https://images.unsplash.com/photo-1509589130981-f70226276f6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE4NzE0OX0'
          ],
        reminders: [{id: 1, title: "Cindy 1", description: "hello cindy", completed: false, subtasks: [{description: "subtask 1", completed: false}], tags: ["Greeting", "Hello"]}],
        friends: ["bobby@bobby.com"]
    },
    "bobby@bobby.com": {
        username: "Bobby",
        email: "bobby@bobby.com",
        password: "bobby",
        picture: [
            'https://images.unsplash.com/photo-1570461121477-846eadb013b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NzE0OX0',
            'https://images.unsplash.com/photo-1570461121477-846eadb013b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE4NzE0OX0'
          ],
        reminders: [{id: 1, title: "Bobby1", description: "hello bobby", completed: false, subtasks: [], tags: [] }],
        friends: []
    } 
}

module.exports = Database;
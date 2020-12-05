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
        friends: ["bobby@bobby.com", "andy@andy.com"]
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
    },
    "andy@andy.com": {
      username: "Andy",
      email: "andy@andy.com",
      password: "andy",
      picture:  [
        'https://images.unsplash.com/photo-1548595152-f556f2d0fde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODcxNDl8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1548595152-f556f2d0fde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODcxNDl8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=200'
      ],
      reminders: [{id: 1, title: "Hi Nice to meet you", description: "My name is Andy", completed: false, subtasks: [{description: "Breakfast", completed: false}], tags: ["Greeting", "Hello"]}],
      friends: ["bobby@bobby.com", "cindy@cindy.com"]
  }, 
}

module.exports = Database;
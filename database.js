let Database = {
    "cindy@cindy.com": {
        username: "cindy",
        email: "cindy@cindy.com",
        password: "cindy",
        picture: [
            'https://images.unsplash.com/photo-1509589130981-f70226276f6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NzE0OX0',
            'https://images.unsplash.com/photo-1509589130981-f70226276f6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE4NzE0OX0'
          ],
        reminders: [{id: 1, title: "Dinner Party", description: "Celebrating the finished project!", completed: false, subtasks: [{description: "Get a gift for Bobby", completed: false}], tags: ["Fun", "Friends"]},
        {id: 2, title: "Yoga Class", description: "Monday night Yoga at the Y", completed: false, subtasks: [{description: "Bring water", completed: false}, {description: "Wash mat", completed: false}], tags: ["Exercise"]}
          ],
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
        reminders: [{id: 1, title: "Camping", description: "7 day trip to Banff :)", completed: false, subtasks: [{description: "TBD", completed: false}], tags: ["Vacation", "Outdoors", "Family"] }],
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
      reminders: [{id: 1, title: "Movie Night", description: "Open movie night at my house! Everyone welcome", completed: false, subtasks: [{description: "Get snacks", completed: false}], tags: ["Party", "Friends"]}],
      friends: ["bobby@bobby.com", "cindy@cindy.com"]
  }, 
}

module.exports = Database;
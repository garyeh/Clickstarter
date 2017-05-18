User.destroy_all
Project.destroy_all

guest = User.create(username: "Guest", password: "password")

yong = Project.create(title: "Linterest", url: "https://linterest.herokuapp.com/#/login", description: "Your catalog of ideas", end_date: "09/09/2017", funding_goal: 5000, creator_id: guest.id, category_id: 1)
aaron = Project.create(title: "Prana", url: "https://prana.herokuapp.com/#/", description: "Prana is a project management app that helps you organize your teams, projects, and tasks.", end_date: "08/08/2017", funding_goal: 10000, creator_id: guest.id, category_id: 2)
davidd = Project.create(title: "Yakety-slack", url: "https://yakety-slack.herokuapp.com/#/", description: "Where work happens.", end_date: "12/1/2017", funding_goal: 6000, creator_id: guest.id, category_id: 2)

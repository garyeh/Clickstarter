User.destroy_all
Project.destroy_all

guest = User.create(username: "Guest", password: "password")

yong = User.create(username: "Yong", password: "password")
aaron = User.create(username: "Aaron", password: "password")
dobrynin = User.create(username: "Dobrynin", password: "password")
miriam = User.create(username: "Miriam", password: "password")
brandon = User.create(username: "Brandon", password: "password")

linterest = Project.create(title: "Linterest", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/v1495418437/Stock/linterest.png",
url: "https://linterest.herokuapp.com/#/login", description: "Your catalog of ideas", end_date: "2018-09-09", funding_goal: 5000, creator_id: yong.id, category_id: 1)
prana = Project.create(title: "Prana", main_image_url: "https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg",
url: "https://prana.herokuapp.com/#/", description: "Prana is a project management app that helps you organize your teams, projects, and tasks.", end_date: "2020-08-08", funding_goal: 10000, creator_id: aaron.id, category_id: 2)
yakety = Project.create(title: "Yakety-slack", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161000/Yakety-slack_iajgln.jpg",
url: "https://yakety-slack.herokuapp.com/#/", description: "Where work happens.", end_date: "2018-12-01", funding_goal: 6000, creator_id: dobrynin.id, category_id: 2)
pantry = Project.create(title: "MyPantry", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161001/Pantry_adfpkv.jpg",
url: "https://git.heroku.com/mypantry.git", description: "For cooking enthusiasts - a website that keeps track of your pantry so you don't have to!", end_date: "2019-02-08", funding_goal: 10000, creator_id: miriam.id, category_id: 3)
open_gym = Project.create(title: "OpenGym", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161000/OpenGym_miycjc.jpg",
url: "https://opengymvolleyball.herokuapp.com/#/", description: "A Yelp...for gyms!", end_date: "2019-01-19", funding_goal: 100000, creator_id: brandon.id, category_id: 4)

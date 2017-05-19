User.destroy_all
Project.destroy_all

guest = User.create(username: "Guest", password: "password")

yong = User.create(username: "Yong", password: "password")
aaron = User.create(username: "Aaron", password: "password")
davidd = User.create(username: "David D.", password: "password")
miriam = User.create(username: "Miriam", password: "password")
brandonc = User.create(username: "Brandon C.", password: "password")

linterest = Project.create(title: "Linterest", main_image_url: "http://html5doctor.com/wp-content/uploads/2013/01/Pinterest-Home1.jpg",
url: "https://linterest.herokuapp.com/#/login", description: "Your catalog of ideas", end_date: "09/09/2017", funding_goal: 5000, creator_id: yong.id, category_id: 1)
prana = Project.create(title: "Prana", main_image_url: "https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg",
url: "https://prana.herokuapp.com/#/", description: "Prana is a project management app that helps you organize your teams, projects, and tasks.", end_date: "08/08/2017", funding_goal: 10000, creator_id: aaron.id, category_id: 2)
yakety = Project.create(title: "Yakety-slack", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161000/Yakety-slack_iajgln.jpg",
url: "https://yakety-slack.herokuapp.com/#/", description: "Where work happens.", end_date: "12/1/2017", funding_goal: 6000, creator_id: davidd.id, category_id: 2)
pantry = Project.create(title: "myPantry", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161001/Pantry_adfpkv.jpg",
url: "https://git.heroku.com/mypantry.git", description: "For cooking enthusiasts - a website that keeps track of your pantry so you don't have to!", end_date: "08/08/2017", funding_goal: 10000, creator_id: miriam.id, category_id: 3)
open_gym = Project.create(title: "OpenGym", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161000/OpenGym_miycjc.jpg",
url: "https://opengymvolleyball.herokuapp.com/#/", description: "A Yelp...for gyms!", end_date: "1/14/2018", funding_goal: 100000, creator_id: brandonc.id, category_id: 4)

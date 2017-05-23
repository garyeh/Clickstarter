User.destroy_all
Project.destroy_all
Reward.destroy_all

text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

guest = User.create(username: "Guest", password: "password")

yong = User.create(username: "Yong", password: "password")
aaron = User.create(username: "Aaron", password: "password")
dobrynin = User.create(username: "Dobrynin", password: "password")
miriam = User.create(username: "Miriam", password: "password")
brandon = User.create(username: "Brandon", password: "password")

linterest = Project.create(title: "Linterest", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/v1495418437/Stock/linterest.png",
url: "https://linterest.herokuapp.com/#/login", description: "Your catalog of ideas", end_date: "2018-09-09", funding_goal: 5000, creator_id: yong.id, category_id: 1, details: text)
prana = Project.create(title: "Prana", main_image_url: "https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg",
url: "https://prana.herokuapp.com/#/", description: "Prana is a project management app that helps you organize your teams, projects, and tasks.", end_date: "2020-08-08", funding_goal: 10000, creator_id: aaron.id, category_id: 2, details: text)
yakety = Project.create(title: "Yakety-slack", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161000/Yakety-slack_iajgln.jpg",
url: "https://yakety-slack.herokuapp.com/#/", description: "Where work happens.", end_date: "2018-12-01", funding_goal: 6000, creator_id: dobrynin.id, category_id: 2, details: text)
pantry = Project.create(title: "MyPantry", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161001/Pantry_adfpkv.jpg",
url: "https://mypantry.herokuapp.com/#/", description: "For cooking enthusiasts - a website that keeps track of your pantry so you don't have to!", end_date: "2019-02-08", funding_goal: 10000, creator_id: miriam.id, category_id: 3, details: text)
open_gym = Project.create(title: "OpenGym", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161000/OpenGym_miycjc.jpg",
url: "https://opengymvolleyball.herokuapp.com/#/", description: "A Yelp...for gyms!", end_date: "2019-01-19", funding_goal: 100000, creator_id: brandon.id, category_id: 4, details: text)

yong_reward1 = Reward.create(title: "1st Tier", amount: 10, limit: 500, description: "You get a personal thank you from me", project_id: linterest.id)
yong_reward2 = Reward.create(title: "2nd Tier", amount: 20, limit: 250, description: "You get 2 personal thank yous from me", project_id: linterest.id)
yong_reward3 = Reward.create(title: "3rd Tier", amount: 50, limit: 50, description: "You get 3 personal thank yous from me", project_id: linterest.id)

aaron_reward1 = Reward.create(title: "1st Tier", amount: 10, limit: 500, description: "You get a personal thank you from me", project_id: prana.id)
aaron_reward2 = Reward.create(title: "2nd Tier", amount: 20, limit: 250, description: "You get 2 personal thank yous from me", project_id: prana.id)
aaron_reward3 = Reward.create(title: "3rd Tier", amount: 50, limit: 50, description: "You get 3 personal thank yous from me", project_id: prana.id)

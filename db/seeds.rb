User.destroy_all
Project.destroy_all

guest = User.create(username: "Guest", password: "password")

yong = User.create(username: "Yong", password: "password")
aaron = User.create(username: "Aaron", password: "password")
davidd = User.create(username: "David D.", password: "password")
miriam = User.create(username: "Miriam", password: "password")

linterest = Project.create(title: "Linterest", main_image_url: "http://html5doctor.com/wp-content/uploads/2013/01/Pinterest-Home1.jpg",
url: "https://linterest.herokuapp.com/#/login", description: "Your catalog of ideas", end_date: "09/09/2017", funding_goal: 5000, creator_id: yong.id, category_id: 1)
prana = Project.create(title: "Prana", main_image_url: "https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg",
url: "https://prana.herokuapp.com/#/", description: "Prana is a project management app that helps you organize your teams, projects, and tasks.", end_date: "08/08/2017", funding_goal: 10000, creator_id: aaron.id, category_id: 2)
yakety = Project.create(title: "Yakety-slack", main_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg/1280px-Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg",
url: "https://yakety-slack.herokuapp.com/#/", description: "Where work happens.", end_date: "12/1/2017", funding_goal: 6000, creator_id: davidd.id, category_id: 2)
pantry = Project.create(title: "myPantry", main_image_url: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?dpr=2&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1079&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg=",
url: "https://git.heroku.com/mypantry.git", description: "For cooking enthusiasts - a website that keeps track of your pantry so you don't have to!", end_date: "08/08/2017", funding_goal: 10000, creator_id: miriam.id, category_id: 3)

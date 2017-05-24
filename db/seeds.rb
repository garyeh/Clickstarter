User.destroy_all
Project.destroy_all
Reward.destroy_all

text = "Lorem ipsum dolor sit amet, no vix altera fierent adversarium, no vidisse salutatus ius. Bonorum alienum blandit an mea, vel elitr decore tibique eu. Nec ad quodsi fierent indoctum, putent electram assueverit id vel. Id etiam legere principes pri, sit ne labores oporteat. Cu civibus quaestio mandamus eam.
Qui ne causae mollis, vis id lobortis sapientem hendrerit. Ex suas assueverit his, qui delectus mandamus ei. Ei amet nonumy vix. Pri animal concludaturque ex, solum timeam dolores mei ex. Atqui quaestio sensibus cu mei, facilisi maluisset at per. Eum te mutat dicat.
Malis utinam consetetur ne quo, eu vix animal omittantur. At saepe intellegam ullamcorper has, qui nonumes accusamus liberavisse ut, et mei oratio apeirian. Ius te utamur repudiandae, meliore assentior philosophia eos id, mel ex dicit vivendum. Te veri insolens reformidans usu.
Ad idque veniam timeam per, quo justo definitionem ad, est no tollit labore regione. Noster iuvaret id vim, dolorum antiopam vim in. Vis te conceptam intellegebat, et pro ornatus maluisset moderatius. Convenire dissentiunt philosophia vis ut.
No ius hinc lobortis mediocrem. Copiosae ponderum eu eam, affert persius cu sea, eu sed stet sonet. Nostrum ocurreret dignissim at vix, sit libris oblique in, pro no fugit definitiones. At paulo dicunt principes eum, erat contentiones ad eam. Exerci homero duo at. At facilisis iudicabit definitionem qui, an reque vidisse vim, quaeque voluptaria eam ne. Cum evertitur urbanitas an, regione suscipit ad usu."


guest = User.create(username: "Guest", password: "password")

yong = User.create(username: "Yong", password: "password")
aaron = User.create(username: "Aaron", password: "password")
dobrynin = User.create(username: "Dobrynin", password: "password")
miriam = User.create(username: "Miriam", password: "password")
brandon = User.create(username: "Brandon", password: "password")
mark = User.create(username: "Mark", password: "password")


linterest = Project.create(title: "Linterest", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/v1495418437/Stock/linterest.png",
url: "https://linterest.herokuapp.com/#/login", description: "Your catalog of ideas", end_date: "2018-09-09", funding_goal: 5000, creator_id: yong.id, category_id: 1, details: text)
prana = Project.create(title: "Prana", main_image_url: "https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg",
url: "https://prana.herokuapp.com/#/", description: "Prana is a project management app that helps you organize your teams, projects, and tasks.", end_date: "2020-08-08", funding_goal: 10000, creator_id: aaron.id, category_id: 2, details: text)
yakety = Project.create(title: "Yakety-slack", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161000/Yakety-slack_iajgln.jpg",
url: "https://yakety-slack.herokuapp.com/#/", description: "Where work happens.", end_date: "2018-12-01", funding_goal: 600, creator_id: dobrynin.id, category_id: 2, details: text)
pantry = Project.create(title: "MyPantry", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161001/Pantry_adfpkv.jpg",
url: "https://mypantry.herokuapp.com/#/", description: "For cooking enthusiasts - a website that keeps track of your pantry so you don't have to!", end_date: "2019-02-08", funding_goal: 10000, creator_id: miriam.id, category_id: 3, details: text)
open_gym = Project.create(title: "OpenGym", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161000/OpenGym_miycjc.jpg",
url: "https://opengymvolleyball.herokuapp.com/#/", description: "A Yelp...for gyms!", end_date: "2019-01-19", funding_goal: 100000, creator_id: brandon.id, category_id: 4, details: text)
unbottld = Project.create(title: "UNBOTTLD", main_image_url: "http://res.cloudinary.com/dcslgdwha/image/upload/v1495148251/bottles_d4suts.jpg",
url: "https://unbottld.herokuapp.com/#/", description: "Find your favorite bottle", end_date: "2020-03-30", funding_goal: 50000, creator_id: mark.id, category_id: 3, details: text)


yong_reward1 = Reward.create(title: "1st Tier", amount: 10, limit: 500, description: "You get a personal thank you from me", project_id: linterest.id, deliver_date: "2019-01-01")
yong_reward2 = Reward.create(title: "2nd Tier", amount: 20, limit: 400, description: "You get 2 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-01-01")
yong_reward3 = Reward.create(title: "3rd Tier", amount: 50, limit: 300, description: "You get 3 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-01-01")
yong_reward4 = Reward.create(title: "4th Tier", amount: 100, limit: 250, description: "You get 4 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-01-01")
yong_reward5 = Reward.create(title: "5th Tier", amount: 250, limit: 200, description: "You get 10 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-01-01")
yong_reward6 = Reward.create(title: "6th Tier", amount: 500, limit: 150, description: "You get 20 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-01-01")
yong_reward7 = Reward.create(title: "7th Tier", amount: 1000, limit: 100, description: "You get 30 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-01-01")

aaron_reward1 = Reward.create(title: "1st Tier", amount: 20, limit: 500, description: "You get a cat from me", project_id: prana.id, deliver_date: "2019-01-01")
aaron_reward2 = Reward.create(title: "2nd Tier", amount: 40, limit: 400, description: "You get 2 cats from me", project_id: prana.id, deliver_date: "2019-01-01")
aaron_reward3 = Reward.create(title: "3rd Tier", amount: 90, limit: 300, description: "You get 3 cats from me", project_id: prana.id, deliver_date: "2019-01-01")
aaron_reward4 = Reward.create(title: "4th Tier", amount: 199, limit: 250, description: "You get 4 cats from me", project_id: prana.id, deliver_date: "2019-01-01")
aaron_reward5 = Reward.create(title: "5th Tier", amount: 250, limit: 200, description: "You get 10 cats from me", project_id: prana.id, deliver_date: "2019-01-01")
aaron_reward6 = Reward.create(title: "6th Tier", amount: 999, limit: 150, description: "You get 20 cats from me", project_id: prana.id, deliver_date: "2019-01-01")
aaron_reward7 = Reward.create(title: "7th Tier", amount: 2500, limit: 100, description: "You get 30 cats from me", project_id: prana.id, deliver_date: "2019-01-01")

dobrynin_reward1 = Reward.create(title: "1st Tier", amount: 2, limit: 500, description: "You get a puppy from me", project_id: yakety.id, deliver_date: "2019-01-01")
dobrynin_reward2 = Reward.create(title: "2nd Tier", amount: 50, limit: 400, description: "You get 2 puppies from me", project_id: yakety.id, deliver_date: "2019-01-01")
dobrynin_reward3 = Reward.create(title: "3rd Tier", amount: 70, limit: 300, description: "You get 3 puppies from me", project_id: yakety.id, deliver_date: "2019-01-01")
dobrynin_reward4 = Reward.create(title: "4th Tier", amount: 129, limit: 250, description: "You get 4 puppies from me", project_id: yakety.id, deliver_date: "2019-01-01")
dobrynin_reward5 = Reward.create(title: "5th Tier", amount: 299, limit: 200, description: "You get 10 puppies from me", project_id: yakety.id, deliver_date: "2019-01-01")
dobrynin_reward6 = Reward.create(title: "6th Tier", amount: 550, limit: 150, description: "You get 20 puppies from me", project_id: yakety.id, deliver_date: "2019-01-01")
dobrynin_reward7 = Reward.create(title: "7th Tier", amount: 1000, limit: 100, description: "You get 30 puppies from me", project_id: yakety.id, deliver_date: "2019-01-01")

miriam_reward1 = Reward.create(title: "1st Tier", amount: 6, limit: 500, description: "You get a skype call from me", project_id: pantry.id, deliver_date: "2019-01-01")
miriam_reward2 = Reward.create(title: "2nd Tier", amount: 24, limit: 400, description: "You get 2 min skype call from me", project_id: pantry.id, deliver_date: "2019-01-01")
miriam_reward3 = Reward.create(title: "3rd Tier", amount: 60, limit: 300, description: "You get 3 min skype call from me", project_id: pantry.id, deliver_date: "2019-01-01")
miriam_reward4 = Reward.create(title: "4th Tier", amount: 100, limit: 250, description: "You get 4 min skype call from me", project_id: pantry.id, deliver_date: "2019-01-01")
miriam_reward5 = Reward.create(title: "5th Tier", amount: 249, limit: 200, description: "You get 10 min skype call from me", project_id: pantry.id, deliver_date: "2019-01-01")
miriam_reward6 = Reward.create(title: "6th Tier", amount: 1999, limit: 150, description: "You get 20 min skype call from me", project_id: pantry.id, deliver_date: "2019-01-01")
miriam_reward7 = Reward.create(title: "7th Tier", amount: 5000, limit: 100, description: "You get 30 min skype call from me", project_id: pantry.id, deliver_date: "2019-01-01")

brandon_reward1 = Reward.create(title: "1st Tier", amount: 1, limit: 500, description: "You get a personal letter from me", project_id: open_gym.id, deliver_date: "2019-01-01")
brandon_reward2 = Reward.create(title: "2nd Tier", amount: 59, limit: 400, description: "You get 2 personal letters from me", project_id: open_gym.id, deliver_date: "2019-01-01")
brandon_reward3 = Reward.create(title: "3rd Tier", amount: 200, limit: 300, description: "You get 3 personal letters from me", project_id: open_gym.id, deliver_date: "2019-01-01")
brandon_reward4 = Reward.create(title: "4th Tier", amount: 450, limit: 250, description: "You get 4 personal letters from me", project_id: open_gym.id, deliver_date: "2019-01-01")
brandon_reward5 = Reward.create(title: "5th Tier", amount: 999, limit: 200, description: "You get 10 personal letters from me", project_id: open_gym.id, deliver_date: "2019-01-01")
brandon_reward6 = Reward.create(title: "6th Tier", amount: 4000, limit: 150, description: "You get 20 personal letters from me", project_id: open_gym.id, deliver_date: "2019-01-01")
brandon_reward7 = Reward.create(title: "7th Tier", amount: 5000, limit: 100, description: "You get 30 personal letters from me", project_id: open_gym.id, deliver_date: "2019-01-01")

mark_reward1 = Reward.create(title: "1st Tier", amount: 15, limit: 500, description: "You get a fist bump from me", project_id: unbottld.id, deliver_date: "2019-01-01")
mark_reward2 = Reward.create(title: "2nd Tier", amount: 29, limit: 400, description: "You get 2 fist bumps from me", project_id: unbottld.id, deliver_date: "2019-01-01")
mark_reward3 = Reward.create(title: "3rd Tier", amount: 99, limit: 300, description: "You get 3 fist bumps from me", project_id: unbottld.id, deliver_date: "2019-01-01")
mark_reward4 = Reward.create(title: "4th Tier", amount: 299, limit: 250, description: "You get 4 fist bumps from me", project_id: unbottld.id, deliver_date: "2019-01-01")
mark_reward5 = Reward.create(title: "5th Tier", amount: 1600, limit: 200, description: "You get 10 fist bumps from me", project_id: unbottld.id, deliver_date: "2019-01-01")
mark_reward6 = Reward.create(title: "6th Tier", amount: 2900, limit: 150, description: "You get 20 fist bumps from me", project_id: unbottld.id, deliver_date: "2019-01-01")
mark_reward7 = Reward.create(title: "7th Tier", amount: 10000, limit: 100, description: "You get 30 fist bumps from me", project_id: unbottld.id, deliver_date: "2019-01-01")


yong_pledge1 = Pledge.create(reward_id: yong_reward7.id, backer_id: aaron.id)
yong_pledge2 = Pledge.create(reward_id: yong_reward7.id, backer_id: dobrynin.id)
yong_pledge3 = Pledge.create(reward_id: yong_reward7.id, backer_id: miriam.id)
yong_pledge4 = Pledge.create(reward_id: yong_reward5.id, backer_id: brandon.id)
yong_pledge5 = Pledge.create(reward_id: yong_reward6.id, backer_id: mark.id)

aaron_pledge1 = Pledge.create(reward_id: aaron_reward5.id, backer_id: yong.id)
aaron_pledge2 = Pledge.create(reward_id: aaron_reward5.id, backer_id: dobrynin.id)
aaron_pledge3 = Pledge.create(reward_id: aaron_reward3.id, backer_id: miriam.id)
aaron_pledge4 = Pledge.create(reward_id: aaron_reward6.id, backer_id: brandon.id)
aaron_pledge5 = Pledge.create(reward_id: aaron_reward2.id, backer_id: mark.id)

dobrynin_pledge1 = Pledge.create(reward_id: dobrynin_reward1.id, backer_id: yong.id)
dobrynin_pledge2 = Pledge.create(reward_id: dobrynin_reward5.id, backer_id: aaron.id)
dobrynin_pledge3 = Pledge.create(reward_id: dobrynin_reward1.id, backer_id: miriam.id)
dobrynin_pledge4 = Pledge.create(reward_id: dobrynin_reward3.id, backer_id: brandon.id)
dobrynin_pledge5 = Pledge.create(reward_id: dobrynin_reward3.id, backer_id: mark.id)

miriam_pledge1 = Pledge.create(reward_id: miriam_reward1.id, backer_id: yong.id)
miriam_pledge2 = Pledge.create(reward_id: miriam_reward2.id, backer_id: aaron.id)
miriam_pledge3 = Pledge.create(reward_id: miriam_reward7.id, backer_id: dobrynin.id)
miriam_pledge4 = Pledge.create(reward_id: miriam_reward3.id, backer_id: brandon.id)
miriam_pledge5 = Pledge.create(reward_id: miriam_reward3.id, backer_id: mark.id)

brandon_pledge1 = Pledge.create(reward_id: brandon_reward1.id, backer_id: yong.id)
brandon_pledge2 = Pledge.create(reward_id: brandon_reward2.id, backer_id: aaron.id)
brandon_pledge3 = Pledge.create(reward_id: brandon_reward3.id, backer_id: dobrynin.id)
brandon_pledge4 = Pledge.create(reward_id: brandon_reward7.id, backer_id: miriam.id)
brandon_pledge5 = Pledge.create(reward_id: brandon_reward3.id, backer_id: mark.id)

mark_pledge1 = Pledge.create(reward_id: mark_reward7.id, backer_id: yong.id)
mark_pledge2 = Pledge.create(reward_id: mark_reward2.id, backer_id: aaron.id)
mark_pledge3 = Pledge.create(reward_id: mark_reward6.id, backer_id: dobrynin.id)
mark_pledge4 = Pledge.create(reward_id: mark_reward1.id, backer_id: miriam.id)
mark_pledge5 = Pledge.create(reward_id: mark_reward3.id, backer_id: brandon.id)

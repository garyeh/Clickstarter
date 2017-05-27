User.destroy_all
Project.destroy_all
Reward.destroy_all
Pledge.destroy_all

yong_text = "Linterest is inspired by Pinterest and built using Ruby on Rails and React/Redux. Pins are organized using the React Masonry Components and are responsive when the window is resized with flex-wrap. A user can add a pin to their collection, which are categorized by 'boards'. A board cannot have duplicate pins. I check to see if a pin is already pinned to the current board, and does not map that as an option if that's true. A pin's show page is opened in a modal for a better view of the image in a pin. It's done using React Modal. From the modal, you can click on the user profile picture to go to the user who uploaded the pin. Users can upload images via drag'n'drop or by clicking in the zone, with react-dropzone. User's profile provides a live view of their boards, pins, followers and followings. Following a user adds the current user to the user's follower list instantly."
aaron_text = "Prana is a clone of the popular task management website Asana. It helps organizations arrange tasks into teams and projects. It is built with a RoR backend, PostgreSQL database, a React/Redux frontend architecture. The `team`, `project`, and `task` states all share some identical slices and presentational attributes. Prana takes advantage of this by using the same `index`, `show`, and `form` React presentational components to display all three. The differences are handled by duck-typing, conditional rendering based on `type`, and type-based class names for styling."
dobrynin_text = "Yak is a Slack-inspired full-stack web application. It utilizes the React.js and Redux libraries on the frontend with a Ruby on Rails backend and a PostgreSQL database.
Live Chat is implemented using Action Cable which seamlessly integrates WebSockets with the rest of the app. For each user, both a messages channel and a notifications channel are established.
Any messages that are sent to the the user's current channel will be supplied live through the messages channel. When a user receives a message in any channel other than the current channel, a notification is sent to the user through the notifications channel. Both of these actions are initiated in the Messages Controller create function.
Any user can create a channel. Upon channel creation, the current user is set to the moderator and the global channel list is updated. Other users are then able to select the channel and subscribe to it. 'Channels' and 'Users' are linked through 'Subscriptions', which serves as a joins table.
Users can also create Direct Messages. Direct Messages differ from Channels in that they are not public; they are accessible only by selected Users. When a user creates a new direct message group, a new entry is immediately added to the direct message list of each invited user. From then on, any new message will trigger a typical notification."
miriam_text = "myPantry is a web application for cooking enthusiasts. Inspired by RemembertheMilk, myPantry allows users to add items to their pantry, update and delete current pantry items, make grocery lists and update their pantry with purchased grocery items. Features: user accounts with secure authentication, adding, updating and deleting pantry/grocery items, generating grocery lists and adding items to 'Purchased' (and vice versa), auto-updating your pantry with 'Purchased' grocery items, and searching for items in your grocery list and pantry."
brandon_text = "OpenGym is a web application inspired by Yelp designed to help users find volleyball open gyms within the city of search. The application is built utilizing Ruby on Rails and PostgresSQL database in the back-end, and React/Redux in the front-end. OpenGym search results are filtered by the name of the city entered in the search field. The more specific the search, the more accurate the results. The google map is then populated with markers which will have links that can direct you to the Gym information page for you to learn more about the Gym or to leave a review. In the back-end, the search engine will search through all the gyms with the city similar or exactly like the entered search query. In the front-end, using Google Maps Api, the results from the search will be populated on the Map as well on page which the name, location, and rating of the gym. The gym show page includes all the information about the gym including days of the week and hours open gym is available, pictures with reference to the gym, and reviews/ratings other users left on the page."
mark_text = "UNBOTTLD is a single page web app that was inspired by UNTAPPD, where users can keep track of what beers they've tried by rating it and also see what other people are drinking. The first box in the sidebar holds the current user's profile picture, username, total checkins and unique checkins. The user's picture is stored on cloudinary and a link to the image is stored in a users table. The checkin stats are calculated on the back end by using active record to count the number of checkins and unique checkins the belong to the current user. The drinks table stores the average rating for each beer, and currently that average is updated on every checkin. Currently this method is fine for calculating averages but would not scale well when many users are creating many checkins. If the site gets large enough the averages will be changed to only update once a day instead of on every checkin. Updating the beer list in real time as the user types was implemented by sending an ajax request with the value of the search sent as a query parameter every time the search input field changes. The filtering is handled on the back end by the pg_search gem. This allows the search to check both the name of drinks and the name of the associated brewery."
winber_text = "Vibe is a full-stack web application inspired by Soundcloud. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend. Song information are all stored in one table in the database, which contains basic song information such as the artist, title, genre, and vice versa. Upon logging in, the user will be directed to his or her personal homepage which will show a list of songs from artists that the user follows, or just random songs from the database if the user follows no one or follows too little people. Each song is created by some user, which is stored in the database as the song's author_id. Of course, this relationship in the database was not hard to create, but passing the information properly, quickly, and responsively took a little effort, especially when it came to passing down the information to the right components. The sidebar was a tough feature to implemented properly, because in order for favorites and follows to work fluidly, both the sidebar and the main song index needed to be updated when a follow or favorite was created or destroyed. There was also the added problem of sending the correct user and song information to it from the state. The solution to this problem was through adding a nested key inside my songs slice of state, and adding a separate component state which kept track of which songs and users needed to be updated and passed down. A tricky problem getting this sidebar to work was the fact that either the follow button or favorite button would not update both the sidebar and the index, or if implemented incorrectly, favoriting a song would add an extra song onto the song listing. Using this method, despite having separate components render the song listings and the sidebar listings, users and songs would be updated on both components upon receiving some kind of prop without altering the songs or users that were already fetched for that state."
vu_text = "Artsie is a web app that showcases and sells artistic masterpieces. It was built using Ruby on Rails, React/Redux, and PostgreSQL. Products are rendered in polaroid-like objects with the image, product name, and price. Signed in users can add reviews and ratings to products. A cart is standard for e-commerce sites such as Etsy. "
jill_text = "EventsInTown is a web application inspired by Eventbrite allowing users to discover events that match their interests, bookmark events for later viewing, purchase tickets, or create and host their own events with online ticketing. EventsInTown was built using a PostgreSQL database, Ruby on Rails, and React, implementing Redux methodology. When users first navigates to EventsInTown, they are directed to the landing page. On the landing page, they are able to scroll through a carousel of a few events in the area. On clicking the event, they are directed to the event's detail page. They are able to sign up, log in or browse events through the navigation bar at the top of the page. When clicking sign up or log in, a modal opens. Events consist of the event details and category tags. The events can be filtered by individual categories by clicking either the corresponding image on the landing page or from the sidebar link on the category browse page. The categories are filtered on the back-end through association based on the current user who is signed in. Users are able to register or purchase tickets for an event through the event detail page. When clicked, a modal opens allowing the user to select an amount of tickets and checkout. The event is added to the user's profile page under the user's tickets. Users can bookmark events by click the bookmark icon. If users are not signed in, the bookmark opens the modal to allow users to sign up or log in. The functionality of the bookmark icon toggles between selected and unselected, filling in the bookmark if the user chooses to bookmark the event. The event is added to the user's bookmarked events, which they can view on his/her profile page. This is all handled through a bookmark join table connecting the event_id and the user_id. The user can host, bookmark, or register/purchase tickets to events. The user state holds arrays of events. The definition of variable events changes, as shown in the snippet above, and renders the different EventIndexItem components based on the slice of state."
ranelle_text = "ChillCloud is a web application modeled after SoundCloud and produced within a two-week timeline. It mainly utilizes Ruby on Rails, React/Redux, PostgreSQL database, and Amazon Web Services S3 storage. ChillCloud allows for continuous play while navigating throughout the entire website. The Audio Player operates with it's own separate slice of state that holds an array of song objects. Due to this separate slice of state and separate front-end redux/react loop, the user is able to add songs to the queue or immediately play and interrupt a currently playing song without losing what is currently in the queue, regardless of what current webpage they are on. Along with the Audio Playback, the Navigation Bar is rendered with every single page of the application. Notably, the navigation bar holds and renders almost every user form within the entire site and correctly re-renders the correct page after successful reload, regardless of what page the user is currently on. This allows for only 4 necessary routes for the entire site: the splash, song-view, user-view, and index page."
jon_text = "UPshift is a full-stack web application created by Jon Jaffe, who enjoys writing in the third person. On the front-end, it uses React.js and Redux. On the back-end, it utilizes Ruby on Rails, a PostgreSQL database and jBuilder to build the data feeds. The app's core features include: Encrypted account creation and login, car index view, instantly responsive searching and filtering, favoriting/unfavoriting, and test drive scheduling."
gary_text = "Clickstarter is a crowd-funding web application inspired by Kickstarter and built on Ruby on Rails and React-Redux. Users can create projects of their websites which other users can back at various reward levels. Site layout and styling is written in SCSS and located in the /app/assets/stylesheets directory. All images used are from either unsplash.com or directly from the website owner's assets with permission. Major fonts used include Open Sans and Roboto."
tyler_text = "Whenevernote is a full-stack web application inspired by Evernote built using Ruby on Rails and React/Redux with PostgreSQL. Whenevernote allows users to take notes, create to-do lists, and quickly write down their thoughts. These notes can be tagged and stored in notebooks for quick lookup whenever needed. Whenevernote was built using Ruby on Rails and is hosted on Heroku. The different rails controllers send back the proper JSON responses depending on which API route was hit. PostgreSQL is used to manage the database locally and remotely. Whenevernote's frontend was built using the React framework and Flux/Redux cycle. These design choices were made so there would be an unidirectional data flow and all necessary data is stored in one source."


guest = User.create(username: "Guest", password: "password")

yong = User.create(username: "Yong", password: "password")
aaron = User.create(username: "Aaron", password: "password")
dobrynin = User.create(username: "Dobrynin", password: "password")
miriam = User.create(username: "Miriam", password: "password")
brandon = User.create(username: "Brandon", password: "password")
mark = User.create(username: "Mark", password: "password")
winber = User.create(username: "Winber", password: "password")
vu = User.create(username: "Vu", password: "password")
jill = User.create(username: "Jill", password: "password")
ranelle = User.create(username: "Ranelle", password: "password")
jon = User.create(username: "Jon", password: "password")
gary = User.create(username: "Gary", password: "password")
tyler = User.create(username: "Tyler", password: "password")


linterest = Project.create(title: "Linterest", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/v1495418437/Stock/linterest.png",
url: "https://linterest.herokuapp.com/#/login", description: "Your catalog of ideas", end_date: "2018-09-09", funding_goal: 20000, creator_id: yong.id, category: "Photography", details: yong_text)
prana = Project.create(title: "Prana", main_image_url: "https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg",
url: "https://prana.herokuapp.com/#/", description: "Prana is a project management app that helps you organize your teams, projects, and tasks.", end_date: "2020-08-08", funding_goal: 10000, creator_id: aaron.id, category: "Productivity", details: aaron_text)
yakety = Project.create(title: "Yakety-slack", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161000/Yakety-slack_iajgln.jpg",
url: "https://yakety-slack.herokuapp.com/#/", description: "Where work happens.", end_date: "2018-12-01", funding_goal: 600, creator_id: dobrynin.id, category: "Productivity", details: dobrynin_text)
pantry = Project.create(title: "MyPantry", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161001/Pantry_adfpkv.jpg",
url: "https://mypantry.herokuapp.com/#/", description: "For cooking enthusiasts - a website that keeps track of your pantry so you don't have to!", end_date: "2019-02-08", funding_goal: 10000, creator_id: miriam.id, category: "Food", details: miriam_text)
open_gym = Project.create(title: "OpenGym", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/Stock/v1495161000/OpenGym_miycjc.jpg",
url: "https://opengymvolleyball.herokuapp.com/#/", description: "A Yelp...for volleyball gyms!", end_date: "2019-01-19", funding_goal: 100000, creator_id: brandon.id, category: "Sports", details: brandon_text)
unbottld = Project.create(title: "UNBOTTLD", main_image_url: "http://res.cloudinary.com/dcslgdwha/image/upload/v1495148251/bottles_d4suts.jpg",
url: "https://unbottld.herokuapp.com/#/", description: "Find your favorite bottle", end_date: "2020-03-30", funding_goal: 50000, creator_id: mark.id, category: "Food", details: mark_text)
vibe = Project.create(title: "Vibe", main_image_url: "https://res.cloudinary.com/winber1/image/upload/v1495573229/homepage_aatiwt.jpg",
url: "https://vibemusic.herokuapp.com/", description: "Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.", end_date: "2018-11-21", funding_goal: 14000, creator_id: winber.id, category: "Music", details: winber_text)
artsie = Project.create(title: "Artsie", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_1080/v1495691012/Stock/artsie_chzdl2.png",
url: "http://artsie.herokuapp.com/#/", description: "Original artworks from artists for artists", end_date: "2020-03-03", funding_goal: 7000, creator_id: vu.id, category: "Art", details: vu_text)
events_in_town = Project.create(title: "EventsInTown", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_1080/v1495692580/Stock/eventsintown_fcavw1.png",
url: "http://eventsintown.herokuapp.com/#/", description: "Find your next experience", end_date: "2021-07-01", funding_goal: 1500, creator_id: jill.id, category: "Entertainment", details: jill_text)
chill_cloud = Project.create(title: "ChillCloud", main_image_url: "https://s3-us-west-1.amazonaws.com/chillcloud-dev/albumDefault.png",
url: "https://chillcloud.herokuapp.com/#/", description: "Listen & chill", end_date: "2022-02-12", funding_goal: 2000, creator_id: ranelle.id, category: "Music", details: ranelle_text)
upshift = Project.create(title: "UpShift", main_image_url: "https://d2ppvlu71ri8gs.cloudfront.net/items/080X0N0j262f3c0E0Z1d/Screen%20Shot%202017-05-25%20at%201.39.51%20PM.png",
url: "https://upshiftapp.herokuapp.com/#/", description: "A new way to buy used cars", end_date: "2018-10-10", funding_goal: 8000, creator_id: jon.id, category: "Autos", details: jon_text)
clickstarter = Project.create(title: "Clickstarter", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_1080/v1495216601/Stock/Splash_emwijn.jpg",
url: "https://clickstarter-gy.herokuapp.com/#/", description: "Pursue bold ideas on your own terms - and make an impact on the world too", end_date: "2019-08-08", funding_goal: 35000, creator_id: gary.id, category: "Technology", details: gary_text)
whenevernote = Project.create(title: "Whenevernote", main_image_url: "http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_1080/v1495821840/Stock/whenevernote_zh2tbt.png",
url: "https://whenevernote.herokuapp.com/#/", description: "Whenevernote lets you capture and nurture ideas whenevever you have them.", end_date: "2018-10-05", funding_goal: 16000, creator_id: tyler.id, category: "Productivity", details: tyler_text)


yong_reward1 = Reward.create(title: "1st Tier", amount: 10, limit: 500, description: "You get a personal thank you from me", project_id: linterest.id, deliver_date: "2019-01-01")
yong_reward2 = Reward.create(title: "2nd Tier", amount: 20, limit: 400, description: "You get 2 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-01-02")
yong_reward3 = Reward.create(title: "3rd Tier", amount: 50, limit: 300, description: "You get 3 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-03-01")
yong_reward4 = Reward.create(title: "4th Tier", amount: 100, limit: 250, description: "You get 4 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-03-04")
yong_reward5 = Reward.create(title: "5th Tier", amount: 250, limit: 200, description: "You get 10 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-04-01")
yong_reward6 = Reward.create(title: "6th Tier", amount: 500, limit: 150, description: "You get 20 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-04-06")
yong_reward7 = Reward.create(title: "7th Tier", amount: 1000, limit: 100, description: "You get 30 personal thank yous from me", project_id: linterest.id, deliver_date: "2019-08-01")

aaron_reward1 = Reward.create(title: "1st Tier", amount: 20, limit: 500, description: "You get a cat from me", project_id: prana.id, deliver_date: "2019-01-06")
aaron_reward2 = Reward.create(title: "2nd Tier", amount: 40, limit: 400, description: "You get 2 cats from me", project_id: prana.id, deliver_date: "2019-04-01")
aaron_reward3 = Reward.create(title: "3rd Tier", amount: 90, limit: 300, description: "You get 3 cats from me", project_id: prana.id, deliver_date: "2019-04-01")
aaron_reward4 = Reward.create(title: "4th Tier", amount: 199, limit: 250, description: "You get 4 cats from me", project_id: prana.id, deliver_date: "2019-05-01")
aaron_reward5 = Reward.create(title: "5th Tier", amount: 250, limit: 200, description: "You get 10 cats from me", project_id: prana.id, deliver_date: "2019-06-01")
aaron_reward6 = Reward.create(title: "6th Tier", amount: 999, limit: 150, description: "You get 20 cats from me", project_id: prana.id, deliver_date: "2019-08-04")
aaron_reward7 = Reward.create(title: "7th Tier", amount: 2500, limit: 100, description: "You get 30 cats from me", project_id: prana.id, deliver_date: "2019-09-08")

dobrynin_reward1 = Reward.create(title: "1st Tier", amount: 2, limit: 500, description: "You get a puppy from me", project_id: yakety.id, deliver_date: "2019-01-01")
dobrynin_reward2 = Reward.create(title: "2nd Tier", amount: 50, limit: 400, description: "You get 2 puppies from me", project_id: yakety.id, deliver_date: "2019-01-04")
dobrynin_reward3 = Reward.create(title: "3rd Tier", amount: 70, limit: 300, description: "You get 3 puppies from me", project_id: yakety.id, deliver_date: "2019-01-11")
dobrynin_reward4 = Reward.create(title: "4th Tier", amount: 129, limit: 250, description: "You get 4 puppies from me", project_id: yakety.id, deliver_date: "2019-01-31")
dobrynin_reward5 = Reward.create(title: "5th Tier", amount: 299, limit: 200, description: "You get 10 puppies from me", project_id: yakety.id, deliver_date: "2019-11-01")
dobrynin_reward6 = Reward.create(title: "6th Tier", amount: 550, limit: 150, description: "You get 20 puppies from me", project_id: yakety.id, deliver_date: "2019-11-30")
dobrynin_reward7 = Reward.create(title: "7th Tier", amount: 1000, limit: 100, description: "You get 30 puppies from me", project_id: yakety.id, deliver_date: "2020-01-31")

miriam_reward1 = Reward.create(title: "1st Tier", amount: 6, limit: 500, description: "You get a 1 min skype call from me", project_id: pantry.id, deliver_date: "2019-01-01")
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

winber_reward1 = Reward.create(title: "1st Tier", amount: 2999, limit: 50, description: "You get a fist pump from me", project_id: vibe.id, deliver_date: "2019-01-01")
winber_reward2 = Reward.create(title: "2nd Tier", amount: 5000, limit: 50, description: "You get 2 fist pumps from me", project_id: vibe.id, deliver_date: "2019-01-01")

vu_reward1 = Reward.create(title: "1st Tier", amount: 1100, limit: 50, description: "You get a free hug from me", project_id: artsie.id, deliver_date: "2021-06-04")

jill_reward1 = Reward.create(title: "1st Tier", amount: 245, limit: 30, description: "You get a text from me", project_id: events_in_town.id, deliver_date: "2022-01-01")

ranelle_reward1 = Reward.create(title: "1st Tier", amount: 139, limit: 100, description: "You get a free drink from me", project_id: chill_cloud.id, deliver_date: "2022-02-16")
ranelle_reward2 = Reward.create(title: "2nd Tier", amount: 399, limit: 60, description: "You get 2 free drinks from me", project_id: chill_cloud.id, deliver_date: "2022-02-17")

jon_reward1 = Reward.create(title: "1st Tier", amount: 199, limit: 400, description: "You get a free ride from me", project_id: upshift.id, deliver_date: "2019-02-02")
jon_reward2 = Reward.create(title: "2nd Tier", amount: 800, limit: 300, description: "You get 2 free rides from me", project_id: upshift.id, deliver_date: "2019-02-02")
jon_reward3 = Reward.create(title: "3rd Tier", amount: 1500, limit: 200, description: "You get 3 free rides from me", project_id: upshift.id, deliver_date: "2019-02-02")

gary_reward1 = Reward.create(title: "1st Tier", amount: 12, limit: 500, description: "You get a personal shoutout from me", project_id: clickstarter.id, deliver_date: "2019-01-01")
gary_reward2 = Reward.create(title: "2nd Tier", amount: 25, limit: 400, description: "You get 2 personal shoutouts from me", project_id: clickstarter.id, deliver_date: "2019-01-02")
gary_reward3 = Reward.create(title: "3rd Tier", amount: 60, limit: 300, description: "You get 3 personal shoutouts from me", project_id: clickstarter.id, deliver_date: "2019-03-01")
gary_reward4 = Reward.create(title: "4th Tier", amount: 150, limit: 250, description: "You get 4 personal shoutouts from me", project_id: clickstarter.id, deliver_date: "2019-03-04")
gary_reward5 = Reward.create(title: "5th Tier", amount: 350, limit: 200, description: "You get 10 personal shoutouts from me", project_id: clickstarter.id, deliver_date: "2019-04-01")
gary_reward6 = Reward.create(title: "6th Tier", amount: 800, limit: 150, description: "You get 20 personal shoutouts from me", project_id: clickstarter.id, deliver_date: "2019-04-06")
gary_reward7 = Reward.create(title: "7th Tier", amount: 2000, limit: 100, description: "You get 30 personal shoutouts from me", project_id: clickstarter.id, deliver_date: "2019-08-01")
gary_reward8 = Reward.create(title: "8th Tier", amount: 6500, limit: 50, description: "You get 50 personal shoutouts from me", project_id: clickstarter.id, deliver_date: "2019-08-01")
gary_reward9 = Reward.create(title: "9th Tier", amount: 16000, limit: 10, description: "You get 100 personal shoutouts from me", project_id: clickstarter.id, deliver_date: "2019-08-01")

tyler_reward1 = Reward.create(title: "1st Tier", amount: 42, limit: 400, description: "You get a coffee from me", project_id: whenevernote.id, deliver_date: "2022-05-03")
tyler_reward2 = Reward.create(title: "2ns Tier", amount: 2200, limit: 100, description: "You get 2 coffees from me", project_id: whenevernote.id, deliver_date: "2022-05-03")


yong_pledge1 = Pledge.create(reward_id: yong_reward7.id, backer_id: aaron.id)
yong_pledge2 = Pledge.create(reward_id: yong_reward7.id, backer_id: dobrynin.id)
yong_pledge3 = Pledge.create(reward_id: yong_reward7.id, backer_id: miriam.id)
yong_pledge4 = Pledge.create(reward_id: yong_reward5.id, backer_id: brandon.id)
yong_pledge5 = Pledge.create(reward_id: yong_reward6.id, backer_id: mark.id)
yong_pledge6 = Pledge.create(reward_id: yong_reward1.id, backer_id: aaron.id)
yong_pledge7 = Pledge.create(reward_id: yong_reward1.id, backer_id: dobrynin.id)
yong_pledge8 = Pledge.create(reward_id: yong_reward1.id, backer_id: miriam.id)
yong_pledge9 = Pledge.create(reward_id: yong_reward2.id, backer_id: brandon.id)
yong_pledge10 = Pledge.create(reward_id: yong_reward3.id, backer_id: mark.id)
yong_pledge11 = Pledge.create(reward_id: yong_reward2.id, backer_id: aaron.id)
yong_pledge12 = Pledge.create(reward_id: yong_reward2.id, backer_id: dobrynin.id)
yong_pledge13 = Pledge.create(reward_id: yong_reward2.id, backer_id: miriam.id)
yong_pledge14 = Pledge.create(reward_id: yong_reward3.id, backer_id: brandon.id)
yong_pledge15 = Pledge.create(reward_id: yong_reward4.id, backer_id: mark.id)

aaron_pledge1 = Pledge.create(reward_id: aaron_reward6.id, backer_id: yong.id)
aaron_pledge2 = Pledge.create(reward_id: aaron_reward7.id, backer_id: dobrynin.id)
aaron_pledge3 = Pledge.create(reward_id: aaron_reward7.id, backer_id: miriam.id)
aaron_pledge4 = Pledge.create(reward_id: aaron_reward6.id, backer_id: brandon.id)
aaron_pledge5 = Pledge.create(reward_id: aaron_reward7.id, backer_id: mark.id)
aaron_pledge6 = Pledge.create(reward_id: aaron_reward1.id, backer_id: yong.id)
aaron_pledge7 = Pledge.create(reward_id: aaron_reward6.id, backer_id: dobrynin.id)
aaron_pledge8 = Pledge.create(reward_id: aaron_reward4.id, backer_id: miriam.id)

dobrynin_pledge1 = Pledge.create(reward_id: dobrynin_reward1.id, backer_id: yong.id)
dobrynin_pledge2 = Pledge.create(reward_id: dobrynin_reward5.id, backer_id: aaron.id)
dobrynin_pledge3 = Pledge.create(reward_id: dobrynin_reward1.id, backer_id: miriam.id)
dobrynin_pledge4 = Pledge.create(reward_id: dobrynin_reward3.id, backer_id: brandon.id)
dobrynin_pledge5 = Pledge.create(reward_id: dobrynin_reward3.id, backer_id: winber.id)

miriam_pledge1 = Pledge.create(reward_id: miriam_reward1.id, backer_id: yong.id)
miriam_pledge2 = Pledge.create(reward_id: miriam_reward1.id, backer_id: aaron.id)
miriam_pledge3 = Pledge.create(reward_id: miriam_reward1.id, backer_id: dobrynin.id)
miriam_pledge4 = Pledge.create(reward_id: miriam_reward1.id, backer_id: brandon.id)
miriam_pledge5 = Pledge.create(reward_id: miriam_reward3.id, backer_id: mark.id)
miriam_pledge6 = Pledge.create(reward_id: miriam_reward2.id, backer_id: yong.id)
miriam_pledge7 = Pledge.create(reward_id: miriam_reward2.id, backer_id: aaron.id)
miriam_pledge8 = Pledge.create(reward_id: miriam_reward2.id, backer_id: dobrynin.id)
miriam_pledge9 = Pledge.create(reward_id: miriam_reward2.id, backer_id: brandon.id)
miriam_pledge10 = Pledge.create(reward_id: miriam_reward4.id, backer_id: mark.id)
miriam_pledge11 = Pledge.create(reward_id: miriam_reward3.id, backer_id: yong.id)
miriam_pledge12 = Pledge.create(reward_id: miriam_reward5.id, backer_id: aaron.id)
miriam_pledge13 = Pledge.create(reward_id: miriam_reward3.id, backer_id: dobrynin.id)
miriam_pledge14 = Pledge.create(reward_id: miriam_reward4.id, backer_id: brandon.id)
miriam_pledge15 = Pledge.create(reward_id: miriam_reward6.id, backer_id: mark.id)
miriam_pledge16 = Pledge.create(reward_id: miriam_reward5.id, backer_id: yong.id)
miriam_pledge17 = Pledge.create(reward_id: miriam_reward4.id, backer_id: aaron.id)
miriam_pledge18 = Pledge.create(reward_id: miriam_reward6.id, backer_id: dobrynin.id)

brandon_pledge1 = Pledge.create(reward_id: brandon_reward1.id, backer_id: yong.id)
brandon_pledge2 = Pledge.create(reward_id: brandon_reward4.id, backer_id: winber.id)
brandon_pledge3 = Pledge.create(reward_id: brandon_reward7.id, backer_id: miriam.id)
brandon_pledge4 = Pledge.create(reward_id: brandon_reward3.id, backer_id: mark.id)

mark_pledge1 = Pledge.create(reward_id: mark_reward7.id, backer_id: yong.id)
mark_pledge2 = Pledge.create(reward_id: mark_reward2.id, backer_id: aaron.id)
mark_pledge3 = Pledge.create(reward_id: mark_reward6.id, backer_id: dobrynin.id)
mark_pledge4 = Pledge.create(reward_id: mark_reward1.id, backer_id: miriam.id)
mark_pledge5 = Pledge.create(reward_id: mark_reward4.id, backer_id: brandon.id)
mark_pledge6 = Pledge.create(reward_id: mark_reward2.id, backer_id: yong.id)
mark_pledge7 = Pledge.create(reward_id: mark_reward1.id, backer_id: aaron.id)
mark_pledge8 = Pledge.create(reward_id: mark_reward3.id, backer_id: dobrynin.id)
mark_pledge9 = Pledge.create(reward_id: mark_reward4.id, backer_id: miriam.id)
mark_pledge10 = Pledge.create(reward_id: mark_reward5.id, backer_id: brandon.id)
mark_pledge11 = Pledge.create(reward_id: mark_reward6.id, backer_id: miriam.id)
mark_pledge12 = Pledge.create(reward_id: mark_reward1.id, backer_id: brandon.id)
mark_pledge13 = Pledge.create(reward_id: mark_reward4.id, backer_id: yong.id)

winber_pledge1 = Pledge.create(reward_id: winber_reward1.id, backer_id: yong.id)
winber_pledge2 = Pledge.create(reward_id: winber_reward1.id, backer_id: miriam.id)

vu_pledge1 = Pledge.create(reward_id: vu_reward1.id, backer_id: winber.id)
vu_pledge2 = Pledge.create(reward_id: vu_reward1.id, backer_id: mark.id)
vu_pledge3 = Pledge.create(reward_id: vu_reward1.id, backer_id: brandon.id)

jill_pledge1 = Pledge.create(reward_id: jill_reward1.id, backer_id: dobrynin.id)

ranelle_pledge1 = Pledge.create(reward_id: ranelle_reward1.id, backer_id: winber.id)
ranelle_pledge2 = Pledge.create(reward_id: ranelle_reward1.id, backer_id: brandon.id)
ranelle_pledge3 = Pledge.create(reward_id: ranelle_reward2.id, backer_id: brandon.id)

jon_pledge1 = Pledge.create(reward_id: jon_reward1.id, backer_id: winber.id)
jon_pledge2 = Pledge.create(reward_id: jon_reward2.id, backer_id: winber.id)
jon_pledge3 = Pledge.create(reward_id: jon_reward2.id, backer_id: brandon.id)
jon_pledge4 = Pledge.create(reward_id: jon_reward3.id, backer_id: yong.id)

gary_pledge1 = Pledge.create(reward_id: gary_reward1.id, backer_id: winber.id)
gary_pledge2 = Pledge.create(reward_id: gary_reward2.id, backer_id: mark.id)
gary_pledge3 = Pledge.create(reward_id: gary_reward4.id, backer_id: brandon.id)
gary_pledge4 = Pledge.create(reward_id: gary_reward7.id, backer_id: yong.id)
gary_pledge5 = Pledge.create(reward_id: gary_reward9.id, backer_id: winber.id)
gary_pledge6 = Pledge.create(reward_id: gary_reward8.id, backer_id: ranelle.id)
gary_pledge7 = Pledge.create(reward_id: gary_reward1.id, backer_id: brandon.id)
gary_pledge8 = Pledge.create(reward_id: gary_reward1.id, backer_id: mark.id)
gary_pledge9 = Pledge.create(reward_id: gary_reward4.id, backer_id: yong.id)
gary_pledge10 = Pledge.create(reward_id: gary_reward5.id, backer_id: aaron.id)
gary_pledge11 = Pledge.create(reward_id: gary_reward9.id, backer_id: miriam.id)
gary_pledge12 = Pledge.create(reward_id: gary_reward4.id, backer_id: dobrynin.id)
gary_pledge13 = Pledge.create(reward_id: gary_reward3.id, backer_id: yong.id)

tyler_pledge1 = Pledge.create(reward_id: tyler_reward1.id, backer_id: yong.id)
tyler_pledge2 = Pledge.create(reward_id: tyler_reward1.id, backer_id: miriam.id)
tyler_pledge3 = Pledge.create(reward_id: tyler_reward2.id, backer_id: winber.id)

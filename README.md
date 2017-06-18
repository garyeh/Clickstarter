# Clickstarter

[Clickstarter][website] is a crowd-funding web application inspired by Kickstarter and built on Ruby on Rails and React-Redux. Users can create projects of their websites which other users can back at various reward levels.

Clickstarter is a personal project by Gary Yeh.

![Clickstarter splash][splash]
![Clickstarter home index][index]

## Features

- User accounts with secure authentication
- Creating, editing, and deleting projects
- Adding removing, and backing rewards in a project
- Image attachments for projects
- Filtering by category of projects
- Autocomplete search for projects (by title and description)

![Clickstarter project page][project page]

## Project Design

Clickstarter was designed and built in 2 weeks. View the original [proposal][proposal] and [database schema][schema].

## Implementation

### User Authentication

- Users must be logged in to create a project or make a pledge. Clicking these buttons while logged out will redirect you to the login page. All other navigation (viewing a project page, search, etc.) is available even when logged out.
- 'Edit' and 'delete' options for a project or its rewards are unavailable unless the project owner is signed in.
- Attempting to access the login page while already logged in causes a redirect to the index page.

This is achieved through my implementation of Auth routes (routes that cannot be visited once logged in) and Protected routes (routes that cannot be visited unless logged in). React DOM makes this easy by componentizing every route under a switch.

```ruby
<Switch>
  <AuthRoute path="/login" component={SessionFormContainer} />
  <AuthRoute path="/signup" component={SessionFormContainer} />
  <ProtectedRoute path="/projects/new" component={ProjectFormContainer} />
  <ProtectedRoute path="/projects/:projectId/edit" component={ProjectFormContainer} />
  <Route path="/projects/:projectId" component={ProjectDetailContainer} />
  <Route exact path="/" component={ProjectIndexContainer} />
</Switch>
```

### Projects

When fetching all the attributes of a project from the backend, a few important details ('current funds raised' and 'number of backers') can be retrieved through associations and a few mathematical operations. This obviates the need for projects to have these two columns at the model level.
```ruby
json.extract! project, :title, :url, :description,
  :main_image_url, :end_date, :funding_goal, :details,
  :creator, :category, :id
  json.rewards project.rewards do |reward|
    json.id reward.id
    json.project_id reward.project_id
    json.title reward.title
    json.amount reward.amount
    json.limit reward.limit
    json.description reward.description
    json.deliver_date reward.deliver_date
    json.pledges reward.pledges
  end
  json.raised project.rewards.map {|reward| reward.pledges.count * reward.amount}.reduce(:+)
  json.num_backers project.rewards.map {|reward| reward.pledges.count }.reduce(:+)
```

To calculate the number of days remaining, one takes the difference between the user-specified end date and the current date. Since the difference of two JS Date objects is an integer value in milliseconds, simply convert this to 'days' by dividing by the conversion factor of 86400000. Finally we can use a regex 'numberWithCommas' to insert commas for large numbers to enhance readability.

```js
let endDate = new Date(detail.end_date);
let currentDate = new Date();
const remaining = numberWithCommas(
                  Math.ceil(
                  (endDate - currentDate) / 86400000));

const numberWithCommas = (x) => (
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);
```

## Technology

Clickstarter is a single-page application built on the following technologies:

### Backend
- Ruby on Rails
- PostgreSQL database
- Hosting on Heroku platform
- Cloudinary for image upload and storage
- BCrypt for password-salting and hashing for a secure authentication system

### Frontend
- React / Redux
- React DOM
- React Router
- jQuery to make AJAX calls to the Rails server.
- Nuka Carousel
- React Modal
- React Component Progress (for the progress bar)
- Webpack as the bundler for all frontend components. The bundled file is located in `/app/assets/javascripts` and is included in `application.js`.

### Styling & Seed Data

Site layout and styling is written in SCSS and located in the `/app/assets/stylesheets` directory. All images used are from either unsplash.com or directly from the website owner's assets with permission. Major fonts used include Open Sans and Roboto.

Seed data is sourced from other projects with the creator's permission.

## Future Implementations

#### User profile

Users can view and edit their profile which includes a list of their pledges.

#### Likes

Users can "like" projects, and view all "liked" projects in the user profile.

#### Credit card payments

Users must pay to submit a pledge, via credit card API.


[splash]: ./docs/images/splash.png "Clickstarter splash"
[index]: ./docs/images/home_index.png
[project page]: ./docs/images/project_page.png "Clickstarter project page"
[website]: http://clickstarter.me
[proposal]: docs/README.md
[schema]: docs/schema.md

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

## Technology

Clickstarter is a single-page application built on the following technologies:

- Ruby on Rails backend
- React / Redux frontend
- PostgreSQL database
- Hosting on Heroku platform
- Cloudinary for image upload and hosting
- React DOM
- React Router
- BCrypt for password-salting and hashing for a secure authentication system
- jQuery to make AJAX calls to the Rails server.
- React Component Progress (for the progress bar)
- Nuka Carousel
- React Modal
- React Redux
- Redux Thunk
- Babel
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

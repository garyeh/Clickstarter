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

Clickstarter is a single-page application built on a Rails backend and React.js frontend.

- [Backend technology][backend]
- [Frontend technology][frontend]

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
[backend]: docs/backend.md
[frontend]: docs/frontend.md
[website]: https://clickstarter-gy.herokuapp.com/
[proposal]: docs/README.md
[schema]: docs/schema.md

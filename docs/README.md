# Clickstarter

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://clickstarter-gy.herokuapp.com/
[trello]: https://trello.com/b/7iEXyCqX/clickstarter

## Minimum Viable Product

Clickstarter is a web application inspired by Kickstarter built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Projects
- [ ] Backing projects & rewards
- [ ] Search
- [ ] Categories / Discover feature
- [ ] Production README [sample](../README.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Projects

**Objective:** Projects can be created, viewed, edited, and destroyed through the API. Stats include '% funded', '$ pledged', and 'days remaining'.

### Phase 3: Backing projects & rewards

**Objective:** Users can back projects and receive rewards. Each pledge will increment the project's total funds raised.

### Phase 4: Search

**Objective:** Search bar which loads the top results dynamically.

### Phase 5: Categories

**Objective:** Display project categories via nav-bar menu. Selecting a category displays all related projects, under a sorting criterion.

### Bonus Features (TBD)
- [ ] Likes
- [ ] Credit card payments

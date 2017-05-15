# API Endpoints

## HTML API

### Root
Loads React web app

- `GET /`

## JSON API

### Users
User Sign Up

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Projects

- `GET /api/projects`
- `POST /api/projects`
- `GET /api/projects/:projectId`
- `PATCH /api/projects/:projectId`
- `DELETE /api/projects/:projectId`

// TODO: add API for filtered projects by category

### Rewards
- `GET /api/projects/:projectId/rewards`
- `POST /api/projects/:projectId/rewards`
- `DELETE /api/projects/:projectId/rewards/:rewardId`

### Categories
- `GET /api/categories`
- `POST /api/categories`

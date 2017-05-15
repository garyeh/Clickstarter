## Containers

### AuthFormContainer
  - AuthForm

### HomeContainer
  - Navbar Container
    + CategoriesContainer
    + NewProject
    + Search
      - SearchResultsContainer
  - Featured projects
    + ProjectIndex

### ProjectContainer
  - Author
  - Description
  - Rewards

### SearchResultsContainer
  - Search results

### CategoriesContainer
  - Categories
    + ProjectsInCategoryContainer

### ProjectsInCategoryContainer
  - Category results

## Routes

|Path                      | Component                     |
|--------------------------|-------------------------------|
| "/sign-up"               | "AuthFormContainer"           |
| "/log-in"                | "AuthFormContainer"           |
| "/"                      | "HomeContainer"               |
| "/project/:projectId"    | "ProjectContainer"            |
| "/categories/            | "CategoriesContainer"         |
| "/categories/:categoryId | "ProjectsInCategoryContainer" |
| "/project/new"	         | "NewProject"                  |
| "/search"                | "Search"                      |
| "/search-results"        | "SearchResultsContainer"      |

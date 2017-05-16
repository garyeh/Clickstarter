```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },

  errors: {
    signUp: {errors: []},
    logIn: {errors: []},
    createProject: {errors: []}
  },

  projects: {
    1: {
      id: 1,
      title: "Linterest",
      creator_name: "Yong",
      main_image_url: "linterest.png",        
      description: "pinterest clone",
      category_id: 1
      }
    }
    2: {
      id: 2,
      title: "UpShift",
      creator_name: "JJ",
      main_image_url: "upshift.png",
      description: "shift clone"
      category_id: 2
  },

  projectDetail: {
    id: 1,
    title: "Linterest",
    creator_name: "Yong",
    main_image_url: "lin.png",
    url: "linterest.io",
    description: "pinterest clone",
    category_id: 1,
    details: "",
    end_date: "06/15/2017",
    funding_goal: 5000,
    rewards: {
      1: {
        id: 1,
        title: "dinner on me",
        amount: 10,
        limit: 50,
        description: "oasis only",
        deliver_date: "06/15/2017",
        pledges: {
          1: {
            id: 1,
            backer_name: "Gary"
          },
          2: {
            id: 2,
            backer_name: "Sam"
          }
        }
      }
    }
  },

  categories: {
    1: {
      id: 1,
      name: "collections"
    },
    2: {
      id: 2,
      name: "cars"
    }
  }
}
```

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
      creator_name: "Yong Lin",
      main_image_url: "linterest.png",        
      description: "pinterest clone",
      category: "collections"
      }
    }
    2: {
      id: 2,
      title: "UpShift",
      creator_name: "Jon Jaffe",
      main_image_url: "upshift.png",
      description: "shift clone"
      category: "cars"
  },

  projectDetail: {
    id: 1,
    title: "Linterest",
    creator_name: "Yong Lin",
    main_image_url: "lin.png",
    description: "pinterest clone",
    category: "collections",
    details: "lorem ipsum",
    end_date: "06/15/2017",
    funding: 3000,
    funding_goal: 5000,
    rewards: {
      1: {
        title: "dinner on me",
        amount: 10,
        limit: 50,
        description: "oasis only",
        deliver_date: "06/15/2017",
        pledges: {
          1: {
            backer_name: "vu"
          },
          2: {
            backer_name: "sam"
          }
        }
      }
    }
  },
  
  categories: {
    1: {
      name: "collections"
    },
    2: {
      name: "cars"
    }
  }
}
```

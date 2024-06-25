# Todo App as a Single Page Application

<img src="https://imgur.com/FJBGuEj.jpg" title="Todo App"/>

The SPA with 5 pages (routes):

- A Homepage to ask Signup or Signin to the application,
- Register page for users to register to be able to use the app,
- Login page for users to authenticated in the app to access private pages,
- A Dashboard page which shows authenticated/registered user todos and actions
- Notfound page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Demo

Online Deployment of this project is available at [Todo App](https://tv2z-app.herokuapp.com/).

You can use below credentials to test pagination and search functions of the app. The database is populated by fakerjs library.

```
email: john@gmail.com
password: 123456
```

### Getting Started

To get started you can simply clone the repo and install the dependencies in the root folder

| Steps   |with [NPM](https://www.npmjs.com/) |
| ------- | --------------------------------- | 
| Install |`npm install`                      |
| Run     |`npm run dev`                      |

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/)


### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/MERN-Todo-App.git
   cd MERN-Todo-App
  ```

2. **Install server dependencies**:

```sh

npm install
Install client dependencies:

cd client
npm install
cd ..
Create a .env file in the root directory:

touch .env
Add the following to the .env file:

PORT=3000
MONGO_URI="mongodb+srv://salih123:salih123@cluster0.ngbtu.mongodb.net/<dbname>?retryWrites=true&w=majority"
JWT_SECRET="secret"

```

### Test Suites

**MacBook**
("https://drive.google.com/file/d/1ACxo9LaTOF1RMN5Q6eBmfza980oJPzmF/view?usp=drivesdk")

**xlsx**
("https://docs.google.com/file/d/1oUt0-68DDnThJIfyxpsbvTtgN77W1y40/edit?usp=docslist_api&filetype=msexcel")




<div style="display: flex; justify-content: center">
<img src="https://drive.google.com/file/d/1jOXRbigXCxF_a3gC6mx4CePGuY2CLMsb/view?usp=sharing" width="600" />
</div>



### Directory Layout and Tree

```

.
├── client                              # Front end part of application
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── atoms                       # Reusable small components
│       │   ├── Button.js
│       │   ├── Dropdown.js
│       │   ├── FlexTable.css
│       │   ├── FlexTable.js
│       │   ├── Icon.js
│       │   ├── Input.js
│       │   ├── Modal.css
│       │   ├── Modal.js
│       │   ├── Pagination.css
│       │   ├── Pagination.js
│       │   └── Spinner.js
│       ├── helpers
│       │   ├── formatDate.js
│       │   └── setAuthToken.js
│       ├── img
│       │   └── todo_cover.jpg
│       ├── index.js
│       ├── pages                       # Front end pages and components
│       │   ├── auth
│       │   │   ├── Login.js
│       │   │   └── Register.js
│       │   ├── dashboard
│       │   │   ├── Dashboard.js
│       │   │   ├── PageSize.js
│       │   │   ├── Search.js
│       │   │   ├── Todo.js
│       │   │   └── TodoList.js
│       │   ├── Homepage.js
│       │   ├── layout
│       │   │   ├── Navbar.js
│       │   │   └── NavLinks.js
│       │   ├── NotFound.js
│       │   └── routing
│       │       ├── PrivateRoute.js
│       │       └── Routes.js
│       └── redux
│           ├── actions
│           │   ├── auth.js
│           │   ├── pagination.js
│           │   ├── search.js
│           │   ├── tag.js
│           │   ├── todo.js
│           │   └── types.js
│           ├── hooks.js                # Redux custom hooks
│           ├── reducers
│           │   ├── auth.js
│           │   ├── index.js
│           │   ├── pagination.js
│           │   ├── search.js
│           │   ├── tag.js
│           │   └── todo.js
│           └── store.js                # Redux Store for state management
├── config
│   ├── db.js
│   ├── default.json
│   └── production.json
├── middleware
│   └── auth.js
├── models                  #Database Models
│   ├── Tag.js
│   ├── Todo.js
│   └── User.js
├── package.json
├── package-lock.json
├── Readme.md
├── routes                  # Api routes folder
│   └── api
│       ├── auth.js
│       ├── tags.js
│       ├── todos.js
│       └── users.js
└── server.js               # Server file


```


### Running the Application

Run the server:

```sh

npm run server
Run the client:

npm run client
Run both client and server concurrently:


npm run dev
The application will be available at http://localhost:3000.

Running Tests
This project uses WebdriverIO for end-to-end testing and Mocha for unit testing.

End-to-End Testing with WebdriverIO

Install WDIO CLI:


npm install @wdio/cli
Configure WDIO:

npx wdio config
Follow the prompts to set up your WDIO configuration.

Run WDIO Tests:


npx wdio run wdio.conf.js
Unit Testing with Mocha

Run Unit Tests:

npm test

```











#### ES6 + Features

- Arrow Functions
- Template Literals
- Destructuring Assignment
- Block-Scoped Variables Let and Const
- async await with try/catch
- Spread operator
- Modules export/import
- New Built-In Methods
- Default Parameters

#### Libraries/Frameworks

- react: UI library
- react-router-dom: The router components of react
- redux react-redux: Global State Management framework
- redux-thunk: Middleware for async calls
- react-bootstrap: React integration for bootstrap css framework
- react-toastify: A library for react to have app level notification
- axios: to make HTTP requests
- nodejs: JS runtime for backend
- express: server/web framework for nodejs to create server
- express-validator: validator library for express framework
- mongoose: mongodb database library for nodejs
- bcryptjs: hashing library which is used to hash passwords in this project
- jsonwebtoken: JWT implementation library

#### Flow

##### Component Hierarchy

```
  App
│ │
│ ├── Navbar
│ │
│ ├── ToastContainer
│ │
│ ├── Homepage
│ │
│ ├── Register
│ │
│ ├── Login
│ │
│ ├── Notfound
│ │
│ ├── Dashboard
│ │ ├── PageSize
│ │ ├── Search
│ │ └── TodoList
          └── Todo
                 ├── FlexTable
                 │
                 ├── Modal
                 │
                 └── Pagination

```

### Tesing Results
## Unit Testing

<img src="https://drive.google.com/file/d/11lelhQ4fNRUCDOK0BMqODqWLKdOOaaRs/view?usp=share_link">

## E2E Testing

<img src="https://drive.google.com/file/d/1tvTAuXtZhgUQC0KjYj9BC5fCoBJMlByB/view?usp=sharing">


### Application Screenshots

<img src="https://drive.google.com/file/d/1xtEAfU_-HdkzDz0EDuiDhNyC8uGRWCXi/view?usp=sharing">

<img src="https://drive.google.com/file/d/1g8QrYSBPv1V-H9mhYTszNqWz2MDysZBt/view?usp=sharing">

<img src="https://drive.google.com/file/d/1Ff4buAkorLR2C-4n3b7xzDXG5-sfsXRG/view?usp=sharing">

<img src="https://drive.google.com/file/d/1KGvpHrga22Q4OfxVJnJk4ZWnuBRqh5OU/view?usp=sharing">







##### Global State Flow

- auth: stores authentication states
- todo: stores todo states
- tag: stores todo tag states
- search: stores search states and results
- pagination: stores pagination states and items

```
{
  auth: {
    token: null,
    isAuthenticated: false,
    loading: false,
    user: null
  },
  todo: {
    todos: [],
    todo: {},
    loading: false,
    error: {}
  },
  tag: {
    tags: [],
    loading: false,
    error: {}
  },
  search: {
    isActive: null,
    searchTerm: '',
    filtered: []
  },
  pagination: {
    activePage: null,
    pageSize: 10,
    pageOfItems: [],
    pageReset: true
  }
}

```

#### Api Calls

1. Post - Register User

```
`../api/users`,

```

2. Post - Login User

```
`../api/auth`,

```

3. Get - Get todo tags

```
`../api/tags`,

```

4. Get/Post/Put/Delete Todos (Add/Update/Complete/Uncomplete/Delete/Get)

```
`../api/todos`,

```

### Built With
React - Frontend library
Redux - State management
Node.js - Backend runtime
Express - Backend framework
MongoDB - Database
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

### License
This project is licensed under the MIT License.



##### NOTE: Local Storage

JWT token for authentication is stored in the local storage of the browser and added to header of the request by setAuthToken function.

### Author

- [salih18](https://github.com/salih18)

### Acknowledgments
Special thanks to the contributors and the open-source community for their support and resources.






<pre>
_____._.______  .____/\ .___.__  .___ 
\__ _:|:      \ :   /  \:   |  \ : __|
  |  :||   .   ||.  ___/|   :   || : |
  |   ||   :   ||     \ |   .   ||   |
  |   ||___|   ||      \|___|   ||   |
  |___|    |___||___\  /    |___||___|
                     \/               
├── src
│   ├── handlers
│   │   └── todoHandler.js
│   ├── models
│   │   └── TodoModel.js
│   ├── routes
│   │   └── todoRoute.js
│   ├── dbConnect.js
│   └── server.js
├── README.md
└── package.json

| API                    | Description        | Request body | Response body  |
|------------------------|--------------------|--------------|----------------|
| GET /v1/api/todo       | Get all todos      | none         | Array of todos |
| GET /v1/api/todo/:user | Get all user todos | none         | Array of todos |
| POST /v1/api/todo      | Add new todo       | todo         | todo           |
| PUT /v1/api/todo/:id   | Set todo as done   | none         | todo           |
</pre>                                      

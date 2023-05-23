# Todo List API

This is a Node.js API for To-do List applications using Express.js, PostgreSQL, Sequelize, and npm. 

## Setup
1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository and `cd` into it. 
3. Run `npm install` to install all of the dependencies. 
4. Create a database, if not yet exist.
5. Create your environment file `cp .env.sample .env`.
6. Update the environment variables for your setup.
7. Run `npx sequelize-cli db:migrate`, for database migration.
8. Run `pm2 start index.js --name todolist-api ` to start the server.
9. You can now make requests to the API.

## Endpoints

The API currently has 5 endpoints:

* **GET /todo?page=1&pageSize=5&sortName=createdAt&sortOrder=desc** - Get all of the current todos in the database
* **GET /todo/:id** - Get a single todo from the database
* **POST /todo** - Create a new todo and store it in the database
* **PUT /todo/:id** - Update the specified todo in the database
* **DELETE /todo/:id** - Delete the specified todo from the database
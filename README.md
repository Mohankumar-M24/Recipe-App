# Recipe CRUD App

This is a simple CRUD application to manage recipes using Node.js, Express.js, and MongoDB.

## Features

- Create, Read, Update, Delete recipes
- Follows MVC architecture
- Uses MongoDB and Mongoose
- API tested with Postman

## Setup

1. Clone the repo and run `npm install`
2. Create a `.env` file inside the `config` folder with your MongoDB URI:
    ```
    MONGO_URI=mongodb://localhost:27017/recipeDB
    ```
3. Run the server with `npm start` or `npm run dev` (for nodemon)

## API Endpoints

- `POST /api/recipes` - Create a new recipe
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a recipe by ID
- `PUT /api/recipes/:id` - Update a recipe by ID
- `DELETE /api/recipes/:id` - Delete a recipe by ID

Test using Postman with appropriate JSON body.
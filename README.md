# Recipe CRUD App

This is a simple CRUD application to manage recipes using Node.js, Express.js, and MongoDB.

## Features

- Create, Read, Update, Delete recipes
- Follows MVC architecture
- Uses MongoDB and Mongoose
- API tested with Postman

## Setup

1. Opening CMD to run all the package - `npm install`
2. Created a `.env` file inside the `config` folder with your MongoDB URI:

    MONGO_URI=mongodb://localhost:27017/recipeDB

3. Run the server with `npm run dev` for live server

## API Endpoints

- get('/getdata', recipeController.getAllRecipes);
- get('/getdata/:id', recipeController.getRecipeById);
- post('/create', recipeController.createRecipe);
- put('/update/:id', recipeController.updateRecipe);
- delete('/delete/:id', recipeController.deleteRecipe);

## POSTMAN LINK - https://documenter.getpostman.com/view/45520113/2sB2x3pZag
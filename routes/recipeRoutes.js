const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');


router.get('/getdata', recipeController.getAllRecipes);
router.get('/getdata/:id', recipeController.getRecipeById);
router.post('/create', recipeController.createRecipe);
router.put('/update/:id', recipeController.updateRecipe);
router.delete('/delete/:id', recipeController.deleteRecipe);

module.exports = router;
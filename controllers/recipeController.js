const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res
        .status(400)
        .json({ error: error.message });
    }
};

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res
        .status(500)
        .json({ error: error.message });
    }
};

exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (error) {
        res
        .status(500)
        .json({ error: error.message });
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (error) {
        res
        .status(400)
        .json({ error: error.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json({ message: 'Recipe deleted' });
    } catch (error) {
        res
        .status(500)
        .json({ error: error.message });
    }
};
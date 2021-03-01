module.exports = {
    findRecipes: async function(req, res){
        const ingredientsIds = req.query.ids.split(',');
        const junctor = sails.models['ingredient_recipes__recipe_ingredients'];

        const allRelations = await junctor.find({
            ingredient_recipes: {in: ingredientsIds}
        });

        const unwantedRelations = await junctor.find({
            recipe_ingredients: _.pluck(allRelations, "recipe_ingredients"),
            ingredient_recipes: {nin: ingredientsIds}
        });

        const allRecipeIds = _.pluck(allRelations, 'recipe_ingredients');
        const unwantedRecipeIds = _.pluck(unwantedRelations, 'recipe_ingredients');
        const recipeIds = allRecipeIds.filter(x => !unwantedRecipeIds.includes(x));

        const recipes = await Recipe.find({
            id: recipeIds
        }).populate('ingredients', {
            where: {
                id: {in: ingredientsIds}
            }
        });

        
        return res.send(recipes);
    }
}
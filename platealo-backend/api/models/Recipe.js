module.exports = {
    attributes: {
        name: { type: 'string', required: true},
        credit: { type: 'string', required: true},
        ingredients: { collection: 'ingredient', via: 'recipes'},
        recipeDescription: { type: 'string', required: true},
        recipeSteps: { type: 'string', required: true}

    }
}
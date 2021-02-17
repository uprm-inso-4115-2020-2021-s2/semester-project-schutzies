module.exports = {
    attributes: {
        id: { type: 'number', autoIncrement: true, required: true},
        name: { type: 'string', required: true},
        credit: { type: ' string', required: true},
        ingredients: { collection: 'ingredient', via: 'recipes', required: true},
        recipeDescription: { type: ' string', required: true},
        recipeSteps: { type: ' string', required: true},
        dateAdded: { type: ' string', required: true},

    }
}
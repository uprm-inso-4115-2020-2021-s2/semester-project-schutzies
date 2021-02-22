module.exports = {
    attributes: {
        name: { type: 'string', required: true},
        recipes: {
            collection: 'recipe',
            via: 'ingredients'
        }
    }
}
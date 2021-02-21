module.exports = {
    attributes: {
        id: { type: 'number', autoIncrement: true, required: true},
        name: { type: 'string', required: true},
        recipes: {
            collection: 'recipe',
            via: 'ingredients'
        }
    }
}
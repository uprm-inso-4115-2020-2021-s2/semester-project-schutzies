module.exports = {
    returnAll: async function(req,res){
        var ingredients = await Ingredient.find();
        return res.send(ingredients);
    }
}
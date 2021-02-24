module.exports = {
    returnAll: function(req,res){
        var ingredients = Ingredient.find({collection:'ingredient'});
        return res.send(ingredients);
    }
}
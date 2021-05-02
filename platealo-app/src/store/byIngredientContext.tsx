import React from 'react'
import Ingredient from '../models/Ingredient'
import Recipe from '../models/Recipe'

const ByIngredientContext = React.createContext({
  ingredientBasket: [],
  recipes: [],
  addIngredientToBasket: (ingredient: Ingredient) => { }, // functions defined to enable autocompletion
  removeIngredientToBasket: (ingredient: Ingredient) => { },
  searchRecipes: (recipe: Recipe) => { }
})

export default ByIngredientContext
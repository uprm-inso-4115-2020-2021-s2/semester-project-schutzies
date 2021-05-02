import { useReducer } from 'react'
import Ingredient from '../models/Ingredient'
import Recipe from '../models/Recipe'
import ByIngredientContext from './byIngredientContext'

const initialByIngredientState = {
  ingredientBasket: [],
  recipes: [],
}

const byIngredientReducer = (state: any, action: any) => {
  switch (action.type) {
    // case 'ADD': {
    // 
    // }
    // case 'REMOVE': {
    // 
    // }
    // case 'SEARCH_RECIPES': {
    // 
    // }
    default:
      return initialByIngredientState;
  }
}

const ByIngredientProvider = ({ children }) => {
  const [byIngredientState, dispatchByIngredientAction] = useReducer(byIngredientReducer, initialByIngredientState)

  const addIngredientToBasketHandler = (ingredient: Ingredient) => {
    dispatchByIngredientAction({
      type: 'ADD',
      ingredient
    })
  }

  const removeIngredientToBasketHandler = (ingredient: Ingredient) => {
    dispatchByIngredientAction({
      type: 'REMOVE',
      ingredient
    })
  }

  const searchRecipesByIngredientHandler = (recipe: Recipe) => {
    dispatchByIngredientAction({
      type: 'SEARCH_RECIPES',
      recipe
    })
  }

  const byIngredientContext = {
    ingredientBasket: byIngredientState.ingredientBasket,
    recipes: byIngredientState.recipes,
    addIngredientToBasket: addIngredientToBasketHandler,
    removeIngredientToBasket: removeIngredientToBasketHandler,
    searchRecipes: searchRecipesByIngredientHandler
  }

  return <ByIngredientContext.Provider value={byIngredientContext}>
    {children}
  </ByIngredientContext.Provider>
}

export default ByIngredientProvider
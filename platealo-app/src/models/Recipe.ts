import Ingredient from './Ingredient'

export default interface Recipe {
  id: number,
  name: string,
  recipeSteps: string,
  recipeDescription: string,
  ingredients: Ingredient[]
  updatedAt: number,
  credit: string,
  createdAt: number
}
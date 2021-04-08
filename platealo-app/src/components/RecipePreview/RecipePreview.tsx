import React from 'react'
import './RecipePreview.css'
import Card from 'react-bootstrap/Card'
import Ingredient from '../../models/Ingredient'
import Recipe from '../../models/Recipe'

export interface RecipePreviewProps {
  recipe: Recipe;
  handleRecipeView: any
}

const ingredients = [
  'Cheddar Cheese',
  'Eggs',
  'Ground Beef',
  'Italian Sauce',
  'Mozzarela Cheese',
  'Oregano',
  'Garlic',
  'Cheddar Cheese',
  'Eggs',
  'Ground Beef',
  'Italian Sauce',
  'Mozzarela Cheese',
  'Oregano',
]

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam justo, scelerisque non felis porta, placerat vestibulum nisi. Vestibulum ac elementum massa. In rutrum quis risus quis sollicitudin. Pellentesque non eros ante. Vestibulum sed tristique massa. Quisque et feugiat risus, eu tristique felis. Pellentesque habitant...'

// const RecipePreview = ({ recipe }: any) => {
const RecipePreview = ({ recipe, handleRecipeView }: RecipePreviewProps) => {
  const truncate = (str: string) => {
    return (str === undefined) ? '' : str.substr(0, 181) + '...';
  }

  return (
    <Card className='recipePreview' onClick={() => handleRecipeView(recipe)}>
      <div className='recipePreview__left'>
        <p className='text-center mt-3'>
          Ingredients
        </p>
        <div className="recipePreview__amountBar" style={{ width: '67%', background: '#00AA77', paddingLeft: '-1px' }}>
          <span>{(recipe?.ingredients.length)} of 9</span>
          {/* <span>5 of 9</span> */}
        </div>
        <div className="recipePreview__ingredientList">
          {recipe?.ingredients.map((ingredient: Ingredient, i: number) => {
            return (
              <div key={i} className="recipePreview__ingredient">
                <span>{ingredient.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='recipePreview__right'>
        <p className='recipePreview__descriptionHeader text-center mt-3'>
          {recipe?.name}
        </p>
        <hr />
        <p className='recipePreview__description'>
          {truncate(recipe?.recipeDescription)}
          {/* {truncate("Description boknjs faof aisjfajf lkasd flkasdjflj aklsj fl kasj ksjn fkajshfkja fjkasndfjaks fkjd")} */}
        </p>
      </div>
    </Card>
  )
}

export default RecipePreview

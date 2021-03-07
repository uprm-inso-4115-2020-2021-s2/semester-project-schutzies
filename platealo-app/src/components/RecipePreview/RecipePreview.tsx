import React from 'react'
import './RecipePreview.css'
import Card from 'react-bootstrap/Card'

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

const RecipePreview = () => {

  const truncate = (str: string) => {
    return str.substr(0, 181) + '...';
  }

  return (
    <Card className='recipePreview'>
      <div className='recipePreview__left'>
        <p className='text-center mt-3'>
          INGREDIENTS
        </p>
        <div className="recipePreview__amountBar" style={{ width: '67%', background: '#00AA77', paddingLeft: '-1px' }}>
          <span>6 of 9</span>
        </div>
        <div className="recipePreview__ingredientList">
          {ingredients.map(ingredient => {
            return (
              <div className="recipePreview__ingredient">
                <span>{ingredient}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='recipePreview__right'>
        <p className='text-center mt-3'>
          DESCRIPTION
        </p>
        <p className='recipePreview__description'>
          {truncate(description)}
        </p>
      </div>
    </Card>
  )
}

export default RecipePreview

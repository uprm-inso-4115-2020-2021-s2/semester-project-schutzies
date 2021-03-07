import React from 'react'
import './SearchRecipes.css'
import RecipePreview from '../../../components/RecipePreview/RecipePreview'

const SearchRecipes = () => {
  return (
    <div className='searchRecipes'>
      <h2>SEARCH RECIPES</h2>
      <hr style={{ marginTop: '-6px' }} />
      <RecipePreview />
    </div>
  )
}

export default SearchRecipes

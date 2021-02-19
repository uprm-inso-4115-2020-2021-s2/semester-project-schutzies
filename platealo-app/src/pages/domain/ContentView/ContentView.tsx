import React from 'react'
import './ContentView.css'
import { useParams } from "react-router-dom";
import ByIngredient from '../ByIngredient/ByIngredient';
import SearchRecipes from '../SearchRecipes/SearchRecipes';

const View = (view: any) => {
  if (view === 'search-recipes')
    return <SearchRecipes />
  else if (view === 'byingredient')
    return <ByIngredient />
}

const ContentView = () => {
  let { view } = useParams<{ view: string }>();

  return (
    <div className='contentView'>
      {View(view)}
    </div>
  )
}

export default ContentView

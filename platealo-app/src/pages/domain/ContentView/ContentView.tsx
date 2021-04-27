import React, { useEffect, useState } from 'react'
import './ContentView.css'
import { useParams } from "react-router-dom";
import SearchRecipes from '../SearchRecipes/SearchRecipes';
import ByIngredient from '../ByIngredient/ByIngredient';
import { urlSlug } from '../../../util/util'
import { useRouteMatch, useHistory } from 'react-router-dom'


/** returns the component to be viewed */
const handleView: any = (view: string) => {
  switch (view) {
    case 'search-recipes':
      return <SearchRecipes />
    case 'byingredient':
      return <ByIngredient />
    case 'recipe-details':
      return <ByIngredient />
  }
}

const ContentView = () => {
  let { url } = useRouteMatch();
  console.log(url, urlSlug(url))

  return (
    <div className='contentView'>
      {/* {handleView(selectedView)} */}
      {handleView(urlSlug(url))}
    </div>
  )
}

export default ContentView

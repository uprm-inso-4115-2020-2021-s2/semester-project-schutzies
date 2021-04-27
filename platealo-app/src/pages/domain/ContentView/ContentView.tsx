import React, { useEffect, useState } from 'react'
import './ContentView.css'
import { useParams } from "react-router-dom";
import SearchRecipes from '../SearchRecipes/SearchRecipes';
import ByIngredient from '../ByIngredient/ByIngredient';
import { urlSlug } from '../../../util/util'
import { useRouteMatch, useHistory } from 'react-router-dom'

export interface ContentViewProps {
  views: any;
}

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

const ContentView = ({ views }: ContentViewProps) => {
  let { url } = useRouteMatch();
  console.log(url, urlSlug(url))

  // the selected component to view from sidebar
  // const [selectedView, setSelectedView] = useState('byingredient');
  let { view } = useParams<{ view: string }>();

  // the information about the content view
  const contentObj = views.find(({ contentView }: any) => contentView === view)

  // useEffect(() => {
  //   setSelectedView(contentObj['contentView'])
  //   // console.log('- selectedView', selectedView)
  //   // console.log('- CV view', contentObj)
  // })


  return (
    <div className='contentView'>
      {/* {handleView(selectedView)} */}
      {handleView(urlSlug(url))}
    </div>
  )
}

export default ContentView

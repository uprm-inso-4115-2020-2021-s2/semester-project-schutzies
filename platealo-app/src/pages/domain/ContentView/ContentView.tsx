import React, { useEffect, useState } from 'react'
import './ContentView.css'
import { useParams } from "react-router-dom";
import SearchRecipes from '../SearchRecipes/SearchRecipes';
import ByIngredient from '../ByIngredient/ByIngredient';

export interface ContentViewProps {
  views: any;
}

/** returns the component to be viewed */
const handleComponent: any = (view: string) => {
  switch (view) {
    case 'search-recipes':
      return <SearchRecipes />
    case 'byingredient':
      return <ByIngredient />
  }
}

const ContentView = ({ views }: ContentViewProps) => {
  // the selected component to view from sidebar
  const [selectedView, setSelectedView] = useState('search-recipes');
  let { view } = useParams<{ view: string }>();

  // the information about the content view
  const contentObj = views.find(({ contentView }: any) => contentView === view)

  useEffect(() => {
    setSelectedView(contentObj['contentView'])
    console.log('- selectedView', selectedView)
    console.log('- CV view', contentObj)
  })


  return (
    <div className='contentView'>
      {handleComponent(selectedView)}
    </div>
  )
}

export default ContentView

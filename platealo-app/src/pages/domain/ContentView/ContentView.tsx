import React, { useEffect, useState } from 'react'
import './ContentView.css'
import { RouteComponentProps, useParams, useRouteMatch } from "react-router-dom";
import ByIngredient from '../ByIngredient/ByIngredient';
import SearchRecipes from '../SearchRecipes/SearchRecipes';

// type Props = {}
export interface ContentViewProps {
  views: any;
  handleSelected: any;
  // selectedView: string;
}

// type ContentViewProps = {
//   // match: any;
//   selected: any;
// }
// type ContentViewProps = Props & RouteComponentProps<{
//   selected: any
// }>

// const View = (view: any) => {
//   console.log('view', view)
//   if (view.includes('search-recipes'))
//     return <SearchRecipes />
//   else if (view.includes('byingredient'))
//     return <ByIngredient />
// }
// { props }: any

const ContentView = ({ handleSelected, views }: ContentViewProps) => {
  // const [selectedView, setSelectedView] = useState('search-recipes');
  const [selectedView, setSelectedView] = useState('search-recipes');

  let { contentView } = useParams<{ contentView: string }>();
  let { url, path } = useRouteMatch();


  const view = views.find(({ view }: any) => view === contentView)

  useEffect(() => {
    console.log(' ')

    console.log('selectedView', selectedView)
    console.log('CV view', view.view)
    setSelectedView(view.view)
    console.log('- selectedView', selectedView)
    console.log('- CV view', view.view)
  })


  handleSelected(view.view)

  // console.log('CV url', url)
  // console.log('CV path', path)
  console.log('selectedView', selectedView)
  // console.log('CV view', view)
  console.log('CV params_contentView', contentView)

  return (
    <div className='contentView'>
      <h2>{selectedView}</h2>
      {/* {() => handleSelected(view.view)} */}
      {/* <SearchRecipes /> */}
      {/* <> */}
    </div>
  )
}

export default ContentView

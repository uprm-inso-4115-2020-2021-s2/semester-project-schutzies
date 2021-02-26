// import React, { Component, useState } from 'react'
// import './Layout.css'
// import Navbar from '../../components/Navbar/Navbar'
// import Sidebar from '../../pages/domain/Sidebar/Sidebar'
// import SideProfile from '../../pages/domain/SideProfile/SideProfile'
// import ContentView from '../../pages/domain/ContentView/ContentView'
// import { BrowserRouter as Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
// import SearchRecipes from './SearchRecipes/SearchRecipes'
// import ByIngredient from './ByIngredient/ByIngredient'
// import Navlink from '../../components/Navbar/Navlink'


// // interface ContentViewProps {
// //   view: any;
// // }

// const byingredientComponent = () => <ByIngredient />;
// const selected: any = (view: string): any => {
//   console.log('view', view)
//   if (view.includes('search-recipes'))
//     return <SearchRecipes />
//   else if (view.includes('byingredient'))
//     return <ByIngredient />
//   else
//     return <SearchRecipes />
// }



// class Layout extends Component {
//   componentDidMount() {
//     console.log('mmm', this.props);
//     // const { handle} = this.props
//   }

//   state = {
//     selected: ''
//   }
//   // const [load, setLoad] = useState()
//   // let { path, url } = useRouteMatch();
//   // let { view } = useParams<{ view: string }>();


//   // console.log('path', path)
//   // console.log('L view', view, path)
//   // console.log('- ' + path, url)

//   render() {
//     console.log('L props', this.props)

//     return (
//       <div className="layout">
//         <Navbar />
//         <div className="layout__sideProfile">
//           <SideProfile />
//         </div>
//         <aside className="layout__sidebar">
//           {/* <Sidebar /> */}
//           {/* <Sidebar render={(props: any) => <Sidebar {...this.props} />} /> */}
//           <div className='sidebar'>
//             <ul>
//               <li>
//                 <Navlink path={`app/search-recipes`}>
//                   {/* <Navlink path={`${url}/search-recipes`}> */}
//                   Search Recipes Component
//                 </Navlink>
//               </li>
//               <li>
//                 <Navlink path={`app/byingredient`}>
//                   {/* <Navlink path={`${url}/byingredient`}> */}
//                   By Ingredient
//                 </Navlink>
//               </li>
//             </ul>
//           </div>
//         </aside>
//         <main className="layout__contentView">
//           <Switch>
//           <Route path={`app/byingredient`}>
//             <ContentView selected={selected} />
//           </Route>

//             {/* <Route
//               path={`app/byingredient`}
//               render={(props: any) =>
//                 <ContentView selected={selected} />
//               } /> */}
//           </Switch>
//         </main>
//       </div>
//     )
//   }
// }

// export default Layout


















































import React, { useState } from 'react'
import './Layout.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../pages/domain/Sidebar/Sidebar'
import SideProfile from '../../pages/domain/SideProfile/SideProfile'
import ContentView from '../../pages/domain/ContentView/ContentView'
import { BrowserRouter as Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import SearchRecipes from './SearchRecipes/SearchRecipes'
import ByIngredient from './ByIngredient/ByIngredient'
import Navlink from '../../components/Navbar/Navlink'


// interface ContentViewProps {
//   view: any;
// }

const byingredientComponent = () => <ByIngredient />;



const contentViews = [
  {
    id: 0,
    view: 'search-recipes'
  },
  {
    id: 1,
    view: 'byingredient'
  }
]

const Layout = () => {
  // const [selectedView, setSelectedView] = useState('search-recipes');
  // const [load, setLoad] = useState()
  let { url, path } = useRouteMatch();
  // let { view } = useParams<{ view: string }>();

  // useEffect(() => {

  // }, [])

  const handleSelected: any = (view: any): any => {
    // console.log('------------view', view)
    // setSelectedView(view.view)
    // console.log('selectedView', selectedView)
    // console.log(' ')
    return view.view
    // if (view.includes('search-recipes'))
    //   return <SearchRecipes />
    // else if (view.includes('byingredient'))
    //   return <ByIngredient />
    // else
    //   return <SearchRecipes />
  }

  console.log('L url', url)
  console.log('L path', path)
  // console.log('- ' + path, url)

  return (
    <div className="layout">
      <Navbar />
      <div className="layout__sideProfile">
        <SideProfile />
      </div>
      <aside className="layout__sidebar">
        {/* <Sidebar /> */}
        <div className='sidebar'>
          <ul>
            <li>
              <Navlink path={`${url}/search-recipes`}>
                {/* <Navlink path={`${path}/:contentView`}> */}
                Search Recipes Component
              </Navlink>
            </li>
            <li>
              <Navlink path={`${url}/byingredient`}>
                {/* <Navlink path={`${path}/:contentView`}> */}
                By Ingredient
              </Navlink>
            </li>
          </ul>


        </div>
      </aside>
      <main className="layout__contentView">
        <Route path={`${path}/:contentView`}>
          {/* <ByIngredient /> */}
          {/* <ContentView handleSelected={handleSelected} selectedView={selectedView} views={contentViews} /> */}
          <ContentView handleSelected={handleSelected} views={contentViews} />
        </Route>
        {/* <Switch>
          <Route path={`${url}/:view`}>
            <ContentView selected={selected} />
          </Route>
        </Switch> */}
      </main>
    </div>
  )
}

export default Layout

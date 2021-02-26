import React from 'react'
import './Layout.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../pages/domain/Sidebar/Sidebar'
import SideProfile from '../../pages/domain/SideProfile/SideProfile'
import ContentView from '../../pages/domain/ContentView/ContentView'
import { Route, useRouteMatch } from 'react-router-dom'


const contentViews = [
  {
    id: 0,
    contentView: 'search-recipes'
  },
  {
    id: 1,
    contentView: 'byingredient'
  }
]

const Layout = () => {
  let { path } = useRouteMatch();

  return (
    <div className="layout">
      <Navbar />
      <div className="layout__sideProfile">
        <SideProfile />
      </div>
      <aside className="layout__sidebar">
        <Sidebar />
      </aside>
      <main className="layout__contentView">
        <Route path={`${path}/:view`}>
          <ContentView views={contentViews} />
        </Route>
      </main>
    </div>
  )
}

export default Layout

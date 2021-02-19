import React from 'react'
import './Layout.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../pages/domain/Sidebar/Sidebar'
import SideProfile from '../../pages/domain/SideProfile/SideProfile'
import ContentView from '../../pages/domain/ContentView/ContentView'
import { BrowserRouter as Switch, Route, useRouteMatch } from 'react-router-dom'

const Layout = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="layout">
      <Navbar />
      <div className="layout__sideProfile">
        <SideProfile />
      </div>
      <aside className="layout__sidebar">
        <Sidebar url={url} />
      </aside>
      <main className="layout__contentView">
        <Switch>
          <Route exact path={path}>
            <h3>DEFAULT ONE</h3>
          </Route>
          <Route path={`${path}/:view`}>
            <ContentView />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default Layout

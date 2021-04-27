import React from 'react'
import './Layout.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../pages/domain/Sidebar/Sidebar'
import SideProfile from '../../pages/domain/SideProfile/SideProfile'
import ContentView from '../../pages/domain/ContentView/ContentView'
import { useRouteMatch } from 'react-router-dom'




const Layout = () => {
  let { path } = useRouteMatch();
  console.log(path)

  return (
    <div className="layout">
      {/* <Navbar /> */}
      <div className="layout__sideProfile">
        <SideProfile />
      </div>
      <aside className="layout__sidebar">
        <Sidebar />
      </aside>
      <main className="layout__contentView">
        <ContentView />
      </main>
    </div>
  )
}

export default Layout

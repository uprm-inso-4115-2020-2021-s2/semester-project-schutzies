import React from 'react'
import './Layout.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../pages/domain/Sidebar/Sidebar'
import SideProfile from '../../pages/domain/SideProfile/SideProfile'
import ByIngredient from '../../pages/domain/ByIngredient/ByIngredient'

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__sideProfile">
        <SideProfile />
      </div>
      <aside className="layout__sidebar">
        <Sidebar />
      </aside>
      <main className="layout__view">
        <ByIngredient />
      </main>
    </div>
  )
}

export default Layout

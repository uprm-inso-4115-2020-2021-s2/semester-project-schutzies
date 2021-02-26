import React from 'react'
import './Sidebar.css'
import Navlink from '../../../components/Navbar/Navlink'
import { useRouteMatch } from 'react-router-dom'
import { ReactComponent as ListIcon } from '../../../assets/svg/icon_list.svg'
import { ReactComponent as SearchIcon } from '../../../assets/svg/icon_search.svg'

interface MenuItem {
  title: string,
  path: string,
  iconName: string
}

const menuItems: MenuItem[] = [
  {
    title: 'Search Recipes',
    path: 'search-recipes',
    iconName: 'search',
  },
  {
    title: 'By Ingredient',
    path: 'byingredient',
    iconName: 'list',
  }
]

/** returns the icon component given the icon names */
const handleIcon = (iconName: string) => {
  switch (iconName) {
    case 'search':
      return <SearchIcon width='40' height='40' />;
    case 'list':
      return <ListIcon width='40' height='40' />
  }
}

const Sidebar = () => {
  let { url } = useRouteMatch();

  return (
    <div className='sidebar'>
      <ul className='sidebar__ul'>
        {menuItems.map(({ title, path, iconName }, key) =>
          <li key={key} className='sidebar__li'>
            <Navlink path={`${url}/${path}`}>
              {handleIcon(iconName)}
              <span>{title}</span>
            </Navlink>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Sidebar

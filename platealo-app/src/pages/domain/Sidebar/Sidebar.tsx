import React from 'react'
import './Sidebar.css'
import Navlink from '../../../components/Navbar/Navlink'
import { useRouteMatch } from 'react-router-dom'
import { ReactComponent as ListIcon } from '../../../assets/svg/icon_list.svg'
import { ReactComponent as SearchIcon } from '../../../assets/svg/icon_search.svg'
import { Search, ListCheck } from 'react-bootstrap-icons';
import { domainUrl } from '../../../util/util'

interface MenuItem {
  title: string,
  slug: string,
  iconName: string
}

const menuItems: MenuItem[] = [
  {
    title: 'By Ingredient',
    slug: 'byingredient',
    iconName: 'list',
  },
  {
    title: 'Search Recipes',
    slug: 'search-recipes',
    iconName: 'search',
  },
]

/** returns the icon component given the icon names */
const handleIcon = (iconName: string) => {
  switch (iconName) {
    case 'list':
      return <ListCheck width='70' height='70' />
    case 'search':
      return <Search width='70' height='70' />;
  }
}

const Sidebar = () => {
  let { url } = useRouteMatch();

  return (
    <div className='sidebar'>
      <ul className='sidebar__ul'>
        {menuItems.map(({ title, slug, iconName }, key) =>
          <li key={key} className='sidebar__li'>
            <Navlink path={`${domainUrl(url)}/${slug}`}>
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

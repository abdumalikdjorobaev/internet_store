import React from 'react'
import { Header } from '../../components/header'
import { Products } from '../../components/products'
import { Link, Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div className='menu'>
      <div className='menu_inner'>
        <div className='menu_sidebar'>
          <div className='logo'>Logo</div>
          <div className='nav'>
            <Link to='/main' className='nav_bar'>
              <div>Главная</div>
              <div>Icon</div>
            </Link>
            <Link to='/category' className='nav_bar'>
              <div>Категории</div>
              <div>Icon</div>
            </Link>
            <Link to='/users' className='nav_bar'>
              <div>Пользователи</div>
              <div>Icon</div>
            </Link>
          </div>
        </div>
        <div className='menu_mainlayout'>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

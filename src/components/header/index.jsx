import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getUsers } from '../../redux/slices/users'

export const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { trash, users } = useSelector((state) => state)
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const Logout = () => {
        localStorage.removeItem('token')
        window.location.replace('/auth')
    }
    console.log(users);
    return (
        <div className='header'>
            <div className='header_inner'>
                <div className='logo'>{users?.results?.results?.[0]?.username}</div>

                <div style={{ display: 'flex', gap: '10px', }} className='header_btn'>
                    <button onClick={() => navigate(-1)}>Назад</button>
                    <Link style={{ textDecoration: 'none', fontSize: '20px' }} to='/trash'><button style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>Корзина <div style={{ fontSize: '20px' }}>{trash?.results?.length}</div></button></Link>
                    <button onClick={Logout}>Выйти</button>
                </div>
            </div>
        </div>
    )
}

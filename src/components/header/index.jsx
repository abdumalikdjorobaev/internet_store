import React from 'react'
import { useDispatch } from 'react-redux'

export const Header = () => {
    const Logout = () => {
        localStorage.removeItem('token')
        window.location.replace('/auth')
    }


    return (
        <div className='header'>
            <div className='header_inner'>
                <div className='logo'>Logo</div>
                <div className='nav'>
                    <div className='nav_bar'>Main</div>
                    <div className='nav_bar'>Profile</div>
                    <div className='nav_bar'>Example</div>
                </div>
                <div className='header_btn'>
                    <button onClick={Logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Header } from '../../components/header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUsers, getUsersUrl } from '../../redux/slices/users'

export const Users = () => {
    const dispatch = useDispatch()
    const {users} = useSelector((state) => state)

    useEffect(() => {
        dispatch(getUsers())

        


    },[])

    const nextGetUsers = () => {
        dispatch(getUsersUrl(users?.results?.next))
    }

    const prevGetUsers = () => {
        dispatch(getUsersUrl(users?.results?.previous))
    }

    const removeUser = (id) => {
        dispatch(removeUser(id))
    }



  return (
    <div>
        <Header/>

        <div className='users'>
            {
                users?.results?.results?.map((item, index) => 
                    <div key={index} className='user'>
                        <div className='user_item'>
                        <div className='user_id'><div className='span'>id:</div> {item.id}</div>
                        <div className='user_username'><div className='span'>username:</div> {item.username}</div>
                        <div className='user_email'><div className='span'>email:</div> {item.email}</div>
                        </div>
                        <div>
                            <button>edit</button>
                            <button onClick={() => removeUser}>remove</button>
                        </div>
                    </div>
                )
            }
             <div>
            {
                users?.results.previous ? <button onClick={prevGetUsers}>prev</button> : null
            }
           {
            users?.results?.next ? <button onClick={nextGetUsers}>next</button> : null
           } 
        </div>
        </div>

       
    </div>
  )
}

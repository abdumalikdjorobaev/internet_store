import React, { useEffect } from 'react'
import { Header } from '../../components/header'
import { addCategory, getCategory, getCategoryUrl } from '../../redux/slices/categories'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";

export const Category = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const dispatch = useDispatch()
    const {category} = useSelector((state) => state)

    useEffect(() => {
        dispatch(getCategory())
    },[])

    const postCategory = (data) => {
        dispatch(addCategory(data))
    }

    const nextGetCategory = () => {
        dispatch(getCategoryUrl(category?.results?.next))
    }

    const prevGetCategory= () => {
        dispatch(getCategoryUrl(category?.results?.previous))
    }


  return (
    <div>
        <div className='category'>
            <div className='category_add'>
                <input type="text" {...register("title", { required: true })}/>
                <input type="text" {...register("description", { required: true })}/>
                <button onClick={handleSubmit(postCategory)}>add</button>
            </div>
            {
                category?.results?.results?.map((item, index) => 
                    <div key={index} className='user'>
                        <div className='user_item'>
                        <div className='user_id'><div className='span'>id:</div> {item?.id}</div>
                        <div className='user_username'><div className='span'>title:</div> {item?.title}</div>
                        <div className='user_email'><div className='span'>description:</div> {item?.description}</div>
                        </div>
                        <div>
                            <button>edit</button>
                            <button>remove</button>
                        </div>
                    </div>
                )
            }
            {
                category?.results?.previous ? <button onClick={nextGetCategory}>prev</button> : null
            }
           {
            category?.results?.next ? <button onClick={prevGetCategory}>next</button> : null
           } 
        </div>
    </div>
  )
}

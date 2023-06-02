import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../redux/slices/auth';

export const LogIn = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const {auth} = useSelector((state) => state)

  const onSubmit = data => {
    dispatch(Login(data))
  };

  console.log(auth);

  return (
    <div className='login'>
        <div className='login_inner'>
            <h1>LogIn</h1>
            <div><input {...register("username", { required: true })}  placeholder='Username' type="text" /></div>
            <div><input {...register("password", { required: true })}  placeholder='Password' type="password" /></div>
            <div>{auth?.error?.non_field_errors?.map((i) => <div className='error_text'>{i}</div>)}</div>
            <div><button onClick={handleSubmit(onSubmit)}>login</button></div>
            <Link to="/register">Register</Link>
        </div>
    </div>
  )
}

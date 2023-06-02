import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, getProducts } from '../../redux/slices/products'
import { Modal } from '../Modal'
import { useForm } from "react-hook-form";
import { ProductItem } from './item';

export const Products = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state)

    const [atributes, setAtributes] = useState([])
    const [photos, setPhotos] = useState([])

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        dispatch(addProduct({
            title: data.title,
            description: data.description,
            price: data.price,
            category: data.category,
            atributes: atributes,
            photos: photos,
        }))

        setAtributes([])
        setPhotos([])

        reset({
            title: '',
            description: '',
            price: '',
            category: '',
        })
    };

    const [modal, setModal] = useState(false)

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    return (
        <div className='products'>
            <div className='add_buttom'>
                <button onClick={() => setModal(true)}>Add product +</button>
            </div>
            <div className='products_inner'>
                <div className='items'>
                    {
                        products?.results?.results?.map((i, index) =>
                            <div key={index} className='item'>
                                <div className='item_img'>
                                    {
                                        i?.photos.map((img, index) =>
                                            <img key={index} src={img.photo} alt="" />
                                        )
                                    }
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='item_items'>
                                        <div className='item_text'>{i.title}</div>
                                        <div className='item_text'>{i.description}</div>
                                        <div className='item_text'>{i.price}$</div>
 31                                   </div>
                                    <div className='item_btns'>
                                        <button style={{ width: '100%' }}>remove</button>
                                        <div style={{ paddingTop: '10px' }}><button style={{ width: '100%' }}>edit</button></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Modal title={'Add Products'} setModal={setModal} modal={modal} element={
                <div className='inputs_add'>
                    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
                        <div>
                            <div className='input_add'><input placeholder='title' type="text" {...register("title", { required: true })} /></div>
                            <div className='input_add'><input placeholder='description' type="text" {...register("description", { required: true })} /></div>
                            <div className='input_add'><input placeholder='price' type="number" {...register("price", { required: true })} /></div>
                            <div className='input_add'><input placeholder='category' type="number" {...register("category", { required: true })} /></div>
                        </div>
                        <div>
                            {
                                atributes.map((i, index) => <div key={index} style={{ paddingBottom: '20px' }} className='input_add'>
                                    <div>{index + 1}atribute</div>
                                    <input placeholder='atribut title' onChange={(e) => i.title = e.target.value} />
                                    <input placeholder='atribut value' onChange={(e) => i.value = e.target.value} />
                                    <input type='number' placeholder='product number' onChange={(e) => i.product = e.target.value} />
                                </div>)
                            }
                            <button onClick={() => setAtributes(atributes => [...atributes, {
                                title: "",
                                value: "",
                                product: 1
                            }])}>add atribute +</button>
                            {
                                atributes.length !== 0 ? <button style={{ marginTop: '10px' }} onClick={() => setAtributes(atributes => atributes.filter((i, index) => index !== 0))}>remove atribute -</button> : null
                            }
                        </div>
                        <div>

                            {
                                photos.map((photo, index) => <ProductItem photo={photo} index={index} key={index} />)
                            }
                            <button onClick={() => setPhotos(photos => [...photos, {
                                photo: "",
                                product: 20
                            }])}>add photo +</button>
                            {
                                photos.length !== 0 ? <button style={{ marginTop: '10px' }} onClick={() => setPhotos(photos => photos.filter((i, index) => index !== 0))}>remove atribute -</button> : null
                            }
                        </div>
                    </div>
                    <button style={{ marginTop: '20px' }} onClick={handleSubmit(onSubmit)}>add products +</button>
                </div>
            } />
        </div>
    )
}

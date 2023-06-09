import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, getProducts, removeItem, removeProduct } from '../../redux/slices/products'
import { Modal } from '../Modal'
import { useForm } from "react-hook-form";
import { ProductItem } from './item';
import Select from 'react-select';
import { getCategory } from '../../redux/slices/categories';
import { addItemOrder } from '../../redux/slices/trash';

export const Products = () => {
    const dispatch = useDispatch()
    const { products, category, trash } = useSelector((state) => state)

    const [atributes, setAtributes] = useState([])
    const [photos, setPhotos] = useState([])
    const [productCategory, setProductCategory] = useState()

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(photos, data,atributes);
        dispatch(addProduct({
            title: data.title,
            description: data.description,
            price: data.price,
            category: productCategory.id,
            atributes: atributes,
            photos: photos,
        }))

        setAtributes([])
        setPhotos([])
        setProductCategory()

        reset({
            title: '',
            description: '',
            price: '',
        })
    };

    console.log(trash?.sendResults);

    const remove = (id) => {
        dispatch(removeProduct(id))
    }
    const MoveToTrash = (i) => {
        const find = trash?.results?.filter((item) => item === i);
        if (find.length == 0) {
          dispatch(addItemOrder(i));
        }
      };

    const [modal, setModal] = useState(false)

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategory())
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
                                    </div>
                                    <div className='item_btns'>
                                        {/* <button onClick={() => remove(i.id)} style={{ width: '100%' }}>remove</button> */}
                                        {/* <div style={{ paddingTop: '10px' }}><button style={{ width: '100%' }}>edit</button></div> */}
                                        <div onClick={() => MoveToTrash(i)} style={{ paddingTop: '10px' }}><button style={{ width: '100%' }}>trash</button></div>
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
                            <Select onChange={(e) => setProductCategory(e)} options={category?.results?.results?.map((i) => ({ value: i.title, label: i.title, id: i.id}))} />
                        </div>
                        <div>
                            {
                                atributes.map((i, index) => <div key={index} style={{ paddingBottom: '20px' }} className='input_add'>
                                    <div>{index + 1}atribute</div>
                                    <input placeholder='atribut title' onChange={(e) => i.title = e.target.value} />
                                    <input placeholder='atribut value' onChange={(e) => i.value = e.target.value} />
                                </div>)
                            }
                            <button onClick={() => setAtributes(atributes => [...atributes, {
                                title: "",
                                value: "",
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

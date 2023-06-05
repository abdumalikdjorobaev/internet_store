import React, { useState } from 'react'

export const ProductItem = ({ photo, index }) => {
    const [img, setImg] = useState('')
    const editImage = (e) => {
        console.log(e);
        photo.photo = e.target.files[0]
        setImg(URL.createObjectURL(e.target.files[0]))
    }
    console.log(photo);
    return (
        <div>
            <div style={{ paddingBottom: '20px' }}>
                <div style={{ width: '100px', height: '100px', borderColor: 'black', borderWidth: '1px', borderStyle: 'solid' }}>
                    <img style={{ width: '100%', height: '100%' }} src={img} alt="" />
                </div>
                <label style={{ cursor: 'pointer' }} htmlFor={index}>selec product photo</label>
            </div>


            <input hidden id={index} type='file' onChange={(e) => editImage(e)} />
        </div>
    )
}

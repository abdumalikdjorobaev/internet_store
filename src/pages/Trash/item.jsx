import React from 'react'

export const TrashItem = ({item, remove, index}) => {
  return (
    <div key={index} className='item'>
                                <div className='item_img'>
                                    {
                                        item?.photos.map((img, index) =>
                                            <img key={index} src={img.photo} alt="" />
                                        )
                                    }
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='item_items'>
                                        <div className='item_text'>{item.title}</div>
                                        <div className='item_text'>{item.description}</div>
                                        <div className='item_text'>{item.price}$</div>
                                    </div>
                                    <div className='item_btns'>
                                        <button onClick={() => remove(item.id)} style={{ width: '100%' }}>remove</button>

                                        {

                                        }
                                    </div>
                                </div>
                            </div>
  )
}

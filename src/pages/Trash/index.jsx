import React, { useState } from 'react'
import { Header } from '../../components/header'
import { useDispatch, useSelector } from 'react-redux'
import { addTrash, removeItemOrder } from '../../redux/slices/trash'
import { TrashItem } from './item'

export const Trash = () => {

    const dispatch = useDispatch()
    const { trash } = useSelector((state) => state)

    const remove = (id) => {    
        dispatch(removeItemOrder(id))
        setSendItems(trash?.results?.filter((item) => item.id !== id).map((i) => ({
            item: i,
            product: i.id,
            quantity: 1,
            status: "АК"
        })))
    }

    const [sendItems, setSendItems] = useState(trash?.results?.map((i) => ({
        item: i,
        product: i.id,
        quantity: 1,
        status: "АК"
    })))

    const sendOrders = () => {
        dispatch(addTrash({
            ordered_date: "2023-06-05T13:13:28.787Z",
            shipping_address: "string",
            payment: true,
            items: sendItems.map((item) => ({
                product: item?.item?.id,
                quantity: item.quantity,
                status: item.status
            })),
        }), setSendItems)
        setSendItems([])
    }

    return (
        <div>
            <Header />
            <div>
                <div className='items'>
                    {
                        sendItems?.map((item, index) =>
                            <TrashItem item={item.item} remove={remove} index={index} />
                        )
                    }
                    {
                        trash?.results?.length == 0 ? <h1 style={{ display: 'flex', justifyContent: 'center', width: '100%', fontSize: '100px' }}>Poka pusto!!!</h1> : null
                    }


                </div>
            </div>

          {
            trash?.results?.length == 0 ? null : <button onClick={sendOrders} style={{ marginLeft: '20px' }}>Send orders</button>
          }  


        </div>
    )
}

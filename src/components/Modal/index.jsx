import React from 'react'

export const Modal = ({modal, setModal, element, title}) => {
  return (
    <div onClick={() => setModal(false)} style={{
        display: modal ? 'flex': 'none',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.277)',
        position: 'fixed',
        top: '0',
        right: '0',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:'10001'
    }}>
        <div onClick={(e) => e.stopPropagation()} style={{
            width: 'fit-content',
            height: 'fit-content',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
        }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '30px'}}>
                <h2>{title}</h2>
                <div><button onClick={() => setModal(false)} sx={{cursor: 'pointer', height: '20px'}}>Закрыть</button></div>
            </div>
            {element}
        </div>
    </div>
  )
}

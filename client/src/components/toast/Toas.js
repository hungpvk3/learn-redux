import React from 'react'
import { PostContext } from '../../context/PostContext'
import { Toast } from 'react-bootstrap'
import user from '../../assets/img/usersvg.svg'
import './toast.css'

const ToastModal = () => {
   

    const { showToast } = React.useContext(PostContext)

    return (
        <>
            <Toast style={{position: 'fixed', top: '55px', right: '15px', width: '13%'}} show={showToast.show}>
            <Toast.Header>
                <img src={user} className="rounded mr-2" alt="" />
                <strong className="mr-auto"></strong>
                <small className="time">1 mins ago</small>
            </Toast.Header>
            <Toast.Body style={{backgroundColor: 'green', color: 'white'}}>{showToast.message}</Toast.Body>
            </Toast> 
        </>
    )
}

export default ToastModal
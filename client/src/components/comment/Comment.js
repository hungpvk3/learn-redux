import React, { useState } from 'react'
import user from '../../assets/img/usersvg.svg'
import { commentPost } from '../../features/post/PostSlice'
import { useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import './comment.css'

const Comment = ({ _id }) => {
    const dispatch = useDispatch()
    const [commentData, setComment] = useState({
        comment: ''
    })

    const onChangeComment = (event) => {
        setComment({ ...commentData, [event.target.name]: event.target.value })
    }

    const handleComment = (event) => {
        event.preventDefault()
        
        try {
            dispatch(commentPost({_id, commentData}))
            setComment({ comment: '' })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="comment__header">
            <Form onSubmit={handleComment}>
                <div className="row comment__header-form mt-4 mb-4" >
                    <img src={user} alt="" className="col-3 comment-user"/>
                    <input type="text" name="comment" placeholder=" Comments" className="col-9 comment__header-input" onChange={onChangeComment} value={commentData.comment}/>
                </div>
            </Form>
        </div>
    )
}

export default Comment

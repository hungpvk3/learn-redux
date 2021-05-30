import React from 'react'
import { deleteComment } from '../../features/post/PostSlice'
import { useDispatch } from 'react-redux'
import user from '../../assets/img/usersvg.svg'
import { Form, Button } from 'react-bootstrap'
import './comment.css'

const CommentText = ({ cmt, _id }) => {

    const dispatch = useDispatch()

    const handleDeleteComment = (event) => {
        event.preventDefault()

        dispatch(deleteComment({ cmtId: cmt._id, postId: _id }))
    }

    return (
        <div className="comment__text mt-3">
            <img src={user} alt="user" className="comment__text-user"/>
            <div className="comment__text-cmt"><span>{cmt.text}</span></div>
            <Form onSubmit={handleDeleteComment}>
                <Button className="comment__text-delete" type="submit">Xoa</Button>
            </Form>
        </div>
    )
}

export default CommentText

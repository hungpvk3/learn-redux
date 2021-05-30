import React from 'react'
import { PostContext } from '../../../context/PostContext'
import { useDispatch } from 'react-redux'
import { deletePost, likePost, likePostOnPayload, deletePostPayLoad } from '../PostSlice'
import user from '../../../assets/img/usersvg.svg'
import likeimg from '../../../assets/img/like.svg'
import comment from '../../../assets/img/comment.svg'
import share from '../../../assets/img/share.svg'
import more from '../../../assets/img/more.svg'
import Comment from '../../../components/comment/Comment'
import CommentText from '../../../components/comment/CommentText'
import './ContentPost.css'


const ContenntPost = ({ _id, title, content, image, like, comments }) => {
    const dispatch = useDispatch()
    const { setShowToast } = React.useContext(PostContext)

    const handleDeletePost = (postId) => {
        try {
            dispatch(deletePostPayLoad(postId))
            dispatch(deletePost(postId))
            setShowToast({ show: true, message: 'Xoá bài viết thành công' })
            setTimeout(() => setShowToast({ show: false, message:'' }), 5000)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLikePost = (postId) => {
        dispatch(likePostOnPayload(postId))
        dispatch(likePost(postId))
    }

    return (
        <div>
            <div className="row content__app">

                <div className="col-12 mt-4">
                    <div className="card" style={{width: '80%', margin: '0 auto'}}>
                        <div className="card-header" >
                            <div className="card-header-title">
                                <div>
                                    <img src={user} alt="" style={{height: '36px', width: '36px', marginRight: '10px'}}/>
                                    <span>{title}</span>
                                </div>
                                <div className="dropdown">
                                <img src={more} className="dropbtn" alt="" />
                                    <div className="dropdown-content">
                                        <p>Update Post</p>
                                        <p onClick={handleDeletePost.bind(this, _id)}>Delete Post</p>
                                    </div>
                                </div>
                            </div>
                            <span>{content}</span>
                        </div>
                        <img className="card-img-top" src={image} alt="Card" />
                        <div className="card-footer content__card-footer">
                            <div className="row">
                                <div className="col-4 footer__item" onClick={handleLikePost.bind(this, _id)}>
                                    <img src={likeimg} alt="" /> 
                                    <span>Like {like}</span>
                                </div>
                                <div className="col-4 footer__item" >
                                    <img src={comment} alt=""/> 
                                    <span>Comments {comments.length}</span>                               
                                </div>
                                <div className="col-4 footer__item">
                                    <img src={share} alt=""/> 
                                    <span>Share</span>                               
                                </div>
                            </div>
                        </div>
                        <Comment _id={_id} />

                        <div className="over__flow">
                            {comments.map(cmt => <CommentText key={cmt._id} cmt={cmt} _id={_id}/>)}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ContenntPost

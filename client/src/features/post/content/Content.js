import React, { useEffect } from 'react';
import ContentTop from '../../../components/contentTop/ContentTop';
import { useSelector, useDispatch } from 'react-redux';
import { postSelector, getPosts } from '../PostSlice';
import { Spinner } from 'react-bootstrap';
import ContentPost from './ContentPost';
import Toast from '../../../components/toast/Toas';
import AddPost from '../../../components/modal/AddPost';


const Content = () => {
    let body;
    const dispatch = useDispatch();
    const PostState = useSelector(postSelector);

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    if (PostState.posts.length === 0) {
        body = (
            <div className="spinner-none">
                <Spinner animation="border" />
            </div>
        )
    } else if (PostState.isLoading) {
        body = (
            <div className="spinner-none">
                <Spinner animation="border" />
            </div>
        )
    } else if (!PostState.isLoading) {
        body = (
            PostState.posts.map(post => <ContentPost key={post._id} title={post.title} content={post.content} image={post.image} like={post.like} _id={post._id} comments={post.comment} />)
        )
    }

    return (
        <>
            <ContentTop />
            { body }
            <Toast />
            <AddPost />
        </>
    )
}

export default Content;

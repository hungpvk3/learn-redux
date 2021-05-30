import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from './api';


export const getPosts = createAsyncThunk('posts/getPosts', async () => {

    const response = await axios.get(api);

    return response.data;
})

export const createPost = createAsyncThunk('posts/createPost', async (dataPost) => {

    const response = await axios.post(`${api}/create`, dataPost);

    return response.data;
})

export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {

    const response = await axios.delete(`${api}/delete/${postId}`);

    return response.data;
})

export const likePost = createAsyncThunk('posts/likePost', async (postId) => {

    const response = await axios.patch(`${api}/like/${postId}`)

    return response.data;
})

export const commentPost = createAsyncThunk('posts/commentPost', async (commentData) => {

    const response = await axios.patch(`${api}/comment/${commentData._id}`, commentData.commentData);

    return response.data;
})

export const deleteComment = createAsyncThunk('posts/deleteComment', async (dataPostComment) => {
    
    const response = await axios.patch(`${api}/comment/delete/${dataPostComment.postId}/${dataPostComment.cmtId}`)

    return response.data;
})

const postSlice = createSlice({
    name: 'post',
    initialState: {
        isLoading: true,
        posts: [],
    },
    reducers: {
        likePostOnPayload (state, action)  {
            state.posts = state.posts.map(post => {
                if (post._id === action.payload)
                    post.like +=1;
                return post;
            })
        },
        deletePostPayLoad (state, action) {
            state.posts = state.posts.filter(post => post._id !== action.payload)
        }
    },
    extraReducers: {
        // [GET] /api/posts
        [getPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.posts
        },

        // [POST] api/posts/create
        [createPost.fulfilled]: (state, action) => {
            state.posts.unshift(action.payload.newPost)
        },

        // [DELETE] api/posts/delete/:id
        // [deletePost.fulfilled]: (state, action) => {
        //     state.posts = state.posts.filter(post => post._id !== action.payload.post._id)
        //     state.message = action.payload.message
        // },

        // [PATCH] api/posts/comment/:id
        [commentPost.fulfilled]: (state, action) => {
            state.posts = state.posts.map(post => post._id === action.payload.post._id ? action.payload.post : post)
        },

        // [PATCH] api/posts/comment/delete/:postId/cmtId
        [deleteComment.fulfilled]: (state, action) => {
            state.posts = state.posts.map(post => post._id === action.payload.post._id ? action.payload.post : post)
        },

    }
});

export const postReducer = postSlice.reducer;

export const { likePostOnPayload, deletePostPayLoad } = postSlice.actions;

// Selector
export const postSelector = state => state.postReducer;
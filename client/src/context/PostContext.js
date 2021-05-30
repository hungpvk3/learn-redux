import React, { createContext, useState } from 'react'

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {

    // State
    const [addModal, setAddModal] = useState(false)
    const [showToast, setShowToast] = useState({
        show: false,
        message: undefined
    })

    const PostContextData = {
        addModal,
        showToast,
        setAddModal,
        setShowToast
    }

    return (
        <PostContext.Provider value={PostContextData}>
            { children }
        </PostContext.Provider>
    )
}

export default PostContextProvider

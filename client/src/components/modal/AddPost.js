import React, { useContext, useState } from 'react'
import { PostContext } from '../../context/PostContext'
import { createPost } from '../../features/post/PostSlice'
import { useDispatch } from 'react-redux'
import { Form, Modal, Button } from 'react-bootstrap'
import FileBase64 from 'react-file-base64'

const AddPost = () => {
    const dispatch = useDispatch()
    const { addModal, setAddModal, setShowToast } = useContext(PostContext)
    const [dataPost, setDataPost] = useState({
        title: '',
        content: '',
        image: ''
    })

    const resset = () => {
        setDataPost({
            title: '',
            content: '',
            image: ''
        })
    }

    const onChangeInput = (event) => {
        setDataPost({ ...dataPost, [event.target.name]: event.target.value })
    }

    const handleClose = () => {
        setAddModal(false)
        resset()
    }

    const onSubmitCreate = (event) => {
        event.preventDefault()

        try {
            setAddModal(false)
            dispatch(createPost(dataPost))
            resset()
            setTimeout(() => setShowToast({ show: true, message:'Đăng bài viết thành công' }), 2000)
            setTimeout(() => setShowToast({ show: false, message:'' }), 5000)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Modal show={addModal} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Bạn đang nghĩ gì </Modal.Title>
                </Modal.Header>
                <Form onSubmit={onSubmitCreate}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Text id='title-help' muted>
                                Title
                            </Form.Text>
                            <Form.Control
                                type='text'
                                placeholder='Title'
                                name='title'
                                required
                                aria-describedby='title-help'
                                onChange={onChangeInput}
                                value={dataPost.title}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text id='title-help' muted>
                                Description
                            </Form.Text>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                placeholder='Description'
                                name='content'
                                onChange={onChangeInput}
                                value={dataPost.content}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text id='title-help' muted>
                                Image
                            </Form.Text>
                            <FileBase64
                                accept='image/*'
                                multiple={false}
                                type='file'
                                value={dataPost.image}
                                onDone={({ base64 }) => setDataPost({ ...dataPost, image: base64 })}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant='primary' type='submit'>
                            Đăng
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default AddPost

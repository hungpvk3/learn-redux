import React, { useContext } from 'react'
import { PostContext } from '../../context/PostContext'
import './contentTop.css'
import user from '../../assets/img/usersvg.svg'
import image from '../../assets/img/image.svg'
import people from '../../assets/img/people.svg'
import happy from '../../assets/img/happy.svg'


const ContentTop = () => {

    const { setAddModal } = useContext(PostContext)

    const handleOnpen = () => {
        setAddModal(true)
    }

    return (
        <div>
            <div className="row header__content-top">
                <div className="col-12 mt-4">
                    <div className="header__top" onClick={handleOnpen}>
                        <img src={user} alt="" className="header__top-user"/>
                        <div className="header__top-alert">Hùng ơi, Bạn đang nghĩ gì thế?</div>
                    </div>
                    <div className="header__bottom mt-1">
                        <div>
                            <img src={image} alt="" className="header__bottom-image" />
                            <span>Image/Video</span>
                        </div>
                        <div>
                            <img src={people} alt="" className="header__bottom-image" />
                            <span>Gắn thẻ bạn</span>
                        </div>
                        <div>
                            <img src={happy} alt="" className="header__bottom-image" />
                            <span>Cảm xúc/Hoạt động</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentTop

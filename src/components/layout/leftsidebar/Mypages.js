import React, { useState } from 'react'

import PageImg from '../../../assets/img/ellipse-95-1@1x.png'
import PinIcon from '../../../assets/icons/icon-metro-pin@1x.png'
import GoldPinIcon from '../../../assets/icons/icon-metro-pin-4@1x.png'
import EditIcon from '../../../assets/icons/icon-material-edit@1x.png'
function Mypages() {
  const [isMenuIconClicked, setIsMenuIconClicked] = useState(true)

  const toggleMenuIconState =()=>{
    setIsMenuIconClicked(!isMenuIconClicked)
  }
  return (
    <div className="mypage">
      <div className="mypage__action">
        <h3>My Pages</h3>
        <div className="create-new__btn">
          <i className="fa fa-plus-circle"></i>
          <div>Create new</div>
        </div>
      </div>
      <div className="search_page">
      <i className="fa fa-search"></i>
        <input type="text" className="search_page_input" placeholder="search page"/>
      </div>
      <div className="search_page_items_container">
        <div className="page_items">
          <img src={PageImg} className="page_img" alt="img"/>
          <div className="page_name">
            <h4>Buisness name</h4>
            <p>private seller</p>
          </div>
          <div className="clicked">
            <i onClick={toggleMenuIconState} className="fa fa-ellipsis-h my_page_icon"></i>
            <img src={PinIcon} className="my_page_icon" alt="icon"/>

            <div style={{display: isMenuIconClicked ? 'block' : 'none'}} className="side_popup">
              <div className="side_popup__item border_btm">
                <img src={GoldPinIcon}  alt="icon"/> 
                <p>Pin</p>
              </div>
              <div className="side_popup__item">
                <img src={EditIcon} alt="icon"/> 
                <p>Edit Page</p>
              </div>
            </div>
          </div>
        </div>
        <div className="page_items">
          <img src={PageImg} className="page_img" alt="img"/>
          <div className="page_name">
            <h4>Buisness name</h4>
            <p>private seller</p>
          </div>
          <div>
            <i className="fa fa-ellipsis-h my_page_icon"></i>
            <img src={PinIcon} className="my_page_icon" alt="icon"/>
          </div>
        </div>
        <div className="page_items">
          <img src={PageImg} className="page_img" alt="img"/>
          <div className="page_name">
            <h4>Buisness name</h4>
            <p>private seller</p>
          </div>
          <div>
            <i className="fa fa-ellipsis-h my_page_icon"></i>
            <img src={PinIcon} className="my_page_icon" alt="icon"/>
          </div>
        </div>
        <div className="page_items">
          <img src={PageImg} className="page_img" alt="img"/>
          <div className="page_name">
            <h4>Buisness name</h4>
            <p>private seller</p>
          </div>
          <div>
            <i className="fa fa-ellipsis-h my_page_icon"></i>
            <img src={PinIcon} className="my_page_icon" alt="icon"/>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Mypages
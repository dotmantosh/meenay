import React from 'react'

import UserImage from '../../assets/img/ellipse-4@1x.png'
import Icon from '../../assets/icons/icon-ionic-ios-arrow-back@1x.png'
import MessageIcon from '../../assets/icons/path-106@1x.png'
import BellIcon from '../../assets/icons/path-193@1x.png'
import CountryIcon from '../../assets/img/image-1@1x.png'
import SearchIcon from '../../assets/icons/path-99-1@1x.png'
import Logo from '../../assets/img/Banner 1 7x13.5 Asset 3@300x.png'

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__left">
          <div className="user-info__img">
          {<img src={UserImage} className="user_img" alt="user"/>}
          </div>
          <div className="user-info__name">
            {<img src={Icon} className="user_icon" alt="icon"/>}
            <p>Jonathan Deo</p>
          </div>
        </div>

        <div className="header__middle">
          <div className="notification_icon_div">
            <img src={CountryIcon} className="country header__icons" alt="country"/>
          </div>
          <div className="notification_icon_div">
            <div className="notification_icon_msg">20</div>
            <img src={MessageIcon} className="message header__icons" alt="message"/>
          </div>
          <div className="notification_icon_div">
            <div className="notification_icon_msg">50+</div>
            <img src={BellIcon} className="bell header__icons" alt="bell"/>
          </div>
        </div>
        <div className="header__right search-bar-container">
            <img src={SearchIcon} width='20px' className="search_icon" alt="icon"/>
            <input type="text" className="search-input" placeholder="Search"/>
        </div>
        <div className="logo-div">
          <img src={Logo} width="50px" className="logo" alt="logo"/>
        </div>
      </div>
    </header>
  )
}

export default Header
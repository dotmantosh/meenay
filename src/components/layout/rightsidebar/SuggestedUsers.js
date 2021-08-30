import React from 'react'
import ProfileImg from '../../../assets/img/ellipse-32-1@1x.png'
import SaveIcon from '../../../assets/icons/icon-feather-bookmark-1@1x.png'

function SuggestedUsers() {
  return (
    <div>
      <div className="tab">
          <div className="tab_items_sm">
              Suggested Users
          </div>
          <div className="tab_items_sm tab-active_sm">
              Suggested Pages
          </div>
      </div>

      <div className="suggested__pages">
        <div className="suggested__pages__content">
          <img src={ProfileImg} className="suggested__page__img" alt="profile_img"/>
          <div className="suggested__page__info">
            <h3>Rose Kooto</h3>
            <p>Abuja</p>
          </div>
          <button>Support</button>
          <img src={SaveIcon} className="suggested__page__save__icon" alt="icon"/>
        </div>
        <div className="suggested__pages__content">
          <img src={ProfileImg} className="suggested__page__img" alt="profile_img"/>
          <div className="suggested__page__info">
            <h3>Rose Kooto</h3>
            <p>Abuja</p>
          </div>
          <button>Support</button>
          <img src={SaveIcon} className="suggested__page__save__icon" alt="icon"/>
        </div>
        <div className="suggested__pages__content">
          <img src={ProfileImg} className="suggested__page__img" alt="profile_img"/>
          <div className="suggested__page__info">
            <h3>Rose Kooto</h3>
            <p>Abuja</p>
          </div>
          <button>Support</button>
          <img src={SaveIcon} className="suggested__page__save__icon" alt="icon"/>
        </div>
        <div className="suggested__pages__content">
          <img src={ProfileImg} className="suggested__page__img" alt="profile_img"/>
          <div className="suggested__page__info">
            <h3>Rose Kooto</h3>
            <p>Abuja</p>
          </div>
          <button>Support</button>
          <img src={SaveIcon} className="suggested__page__save__icon" alt="icon"/>
        </div>
        <div className="suggested__pages__content">
          <img src={ProfileImg} className="suggested__page__img" alt="profile_img"/>
          <div className="suggested__page__info">
            <h3>Rose Kooto</h3>
            <p>Abuja</p>
          </div>
          <button>Support</button>
          <img src={SaveIcon} className="suggested__page__save__icon" alt="icon"/>
        </div>
        <div className="suggested__pages__content">
          <img src={ProfileImg} className="suggested__page__img" alt="profile_img"/>
          <div className="suggested__page__info">
            <h3>Rose Kooto</h3>
            <p>Abuja</p>
          </div>
          <button>Support</button>
          <img src={SaveIcon} className="suggested__page__save__icon" alt="icon"/>
        </div>
        
      </div>
    </div>
      
  )
}

export default SuggestedUsers
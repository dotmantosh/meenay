import React from 'react'
import FeedIcon from '../../../assets/icons/rss-feed-24px@1x.png'
import SettingsIcon from '../../../assets/icons/path-110@1x.png'
import SavedIcon from '../../../assets/icons/path-112@1x.png'
function SideNav() {
    return (
        <div className="side-nav">
            <div className="side-nav__item">
                <img src={FeedIcon} alt="feed_icon" className="side-nav__icon"/>
                <p className="active-color">Feeds</p>
            </div>
            <div className="side-nav__item">
                <img src={SettingsIcon} alt="feed_icon" className="side-nav__icon"/>
                <p>Gallery</p>
            </div>
            <div className="side-nav__item">
                <img src={SettingsIcon} alt="feed_icon" className="side-nav__icon"/>
                <p>Settings</p>
            </div>
            <div className="side-nav__item">
                <img src={SavedIcon} alt="feed_icon" className="side-nav__icon"/>
                <p>Referrals</p>
            </div>
            <div className="side-nav__item">
                <img src={SavedIcon} alt="feed_icon" className="side-nav__icon"/>
                <p>Saved</p>
            </div>
        </div>
    )
}

export default SideNav
import React from 'react'

import ImageIcon from '../../../assets/icons/icon-awesome-images@1x.png'
import VideoIcon from '../../../assets/icons/icon-awesome-video@1x.png'
import LocationIcon from '../../../assets/icons/icon-material-location-on@1x.png'
import TagIcon from '../../../assets/icons/icon-ionic-ios-pricetag@1x.png'

function ShareYourMoment() {
    return (
        <div className="share_ur_tots">
          <div className="share_ur_tots__top">
						<input type="text" className="share_ur_tots__input" placeholder="Share your Moments"/>
						<button>Post</button>
          </div>
          <div className="share_ur_tots__buttom">
						<div className="share_ur_tots__actions">
							<img src={ImageIcon} alt="icon" className="share_ur_tots__icon"/>
							<p>Image</p>
						</div>
						<div className="share_ur_tots__actions">
							<img src={VideoIcon} alt="icon" className="share_ur_tots__icon"/>
							<p>Video</p>
						</div>
						<div className="share_ur_tots__actions">
							<img src={LocationIcon} alt="icon" className="share_ur_tots__icon"/>
							<p>Location</p>
						</div>
						<div className="share_ur_tots__actions">
							<img src={TagIcon} alt="icon" className="share_ur_tots__icon"/>
							<p>Tags</p>
						</div>
          </div>

        </div>
    )
}


export default ShareYourMoment
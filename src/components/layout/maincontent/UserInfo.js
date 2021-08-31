import React, {useState} from 'react'

import CopyLinkIcon from '../../../assets/icons/path-205@1x.png'
import ReportIcon from '../../../assets/icons/icon-material-report@1x.png'

import UserPhoto from '../../../assets/img/ellipse-267@1x.png'
function UserInfo() {
	const [isMenuIconClicked, setIsMenuIconClicked] = useState(true)

	const toggleMenuIconState =()=>{
		setIsMenuIconClicked(!isMenuIconClicked)
	}

	return (
		<div className="user-info">

			<div className="user-info__content">
				<div className="user-info__info">
					<img src={UserPhoto} className="user-img" alt="profilepic"/>

					<div className="user-info__detail">
						<h2>Rose Kooto</h2>
						<h4>User name</h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p>
					</div>
				</div>
				<div className="user-info__stats">
					<div className="user__stats">
						<div className="user__stats__item">
							<h4>105</h4>
							<p>Posts</p>
						</div>
						<div className="user__stats__item">
							<h4>7,000</h4>
							<p>Followers</p>
						</div>
						<div className="user__stats__item">
							<h4>1,500</h4>
							<p>following</p>
						</div>
						<div className="user__stats__item">
							<h4>1,500</h4>
							<p>Supporting</p>
						</div>
					</div>
					<button>Following</button>
					<p className="other_pages">Other pages</p>
					<ul>
						<li>Buisness One</li>
						<li>Buisness One longer name</li>
						<li>Buisness One</li>
						<li>Buisness One</li>
						<li>Buisness One</li>
					</ul>
				</div>
			</div>
			<div className="menu_icon">
				<i onClick={toggleMenuIconState} className="fa fa-ellipsis-h"></i>
			</div>
			<div style={{display: isMenuIconClicked ? 'block' : 'none'}} className="menu_options">
				<div className="menu_option__item border_btm">
					<img src={CopyLinkIcon} alt="icon"/>
					<p>Copy Link</p>
				</div>
				<div className="menu_option__item">
					<img src={ReportIcon} alt="icon"/>
					<p>Report Post</p>
				</div>
			</div>
		</div>
	)
}


export default UserInfo
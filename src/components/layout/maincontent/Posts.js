import React from 'react'

import PostPic from '../../../assets/img/highres-488961989-1@1x.png'
import PostProfilePic from '../../../assets/img/ellipse-32-1@1x.png'
import CommentProfilePic from '../../../assets/img/ellipse-357@1x.png'

import LikeIcon from '../../../assets/icons/icon-awesome-heart-1@1x.png'
import SaveIcon from '../../../assets/icons/icon-feather-bookmark-1@1x.png'
import CommentIcon from '../../../assets/icons/icon-feather-message-circle-1@1x.png'
import ShareIcon from '../../../assets/icons/icon-ionic-md-share-alt-1@1x.png'
import HideIcon from '../../../assets/icons/icon-awesome-eye@1x.png'
import CopyLinkIcon from '../../../assets/icons/path-205-1@1x.png'
import PinIcon from '../../../assets/icons/icon-metro-pin@1x.png'
import ReportIcon from '../../../assets/icons/icon-material-report-1@1x.png'
import DeleteIcon from '../../../assets/icons/icon-material-delete-sweep@1x.png'
import { div } from 'prelude-ls'

function Posts() {
  return (
    <div>

      <div className="post_container">
      
        <div className="post">
          <div className="post__picture">
            <img src={PostPic} width="40px" alt="post_img"/>
          </div>

          <div className="post__content">
            <div className="post__content__userinfo">
              <img src={PostProfilePic}  alt="profilepic"/>
              <div className="post__content__userinfo--item">
                <h3>Rose Kooto</h3>
                <div className="post__content__userinfo--item__buttom">
                  <p>Abuja</p>
                  <p>11hr ago</p>
                  <p>200 Likes</p>
                  <p>20 Replies</p>
                </div>
              </div>
            </div>
            <p className="post__content__post">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            
            <div className="post__content__comment--container">
              <h6>View all comments</h6>
              <div className="view__comment__userinfo">
                <img src={CommentProfilePic} className="view__comment__userimg" alt="profilepic"/>

                <div className="view__comments">
                  <h4>Rose Kooto</h4>
                  <h6>last seen 11hr</h6>
                  <p>
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Read more....
                  </p>
                </div>
              </div>
            </div>

            <div className="comment__actions">
              <div className="comment__actions__likes">
                <img src={LikeIcon} alt="like_icon"/>
                <img src={CommentIcon} alt="comment_icon"/>
                <img src={SaveIcon} alt="save_icon"/>
              </div>
              <div className="comment__action__share">
                <img src={ShareIcon} alt="share_icon"/>
              </div>
            </div>
          </div>
        </div>

        <div className="menu_icon">
				  <i className="fa fa-ellipsis-h"></i>
			  </div>
        
        <div className="menu_options menu_options_post">
          <div className="menu_option__item">
            <img src={HideIcon} alt="icon"/>
            <p>Hide</p>
          </div>
          <div className="menu_option__item">
            <img src={CopyLinkIcon} alt="icon"/>
            <p>Copy Link</p>
          </div>
          <div className="menu_option__item">
            <img src={PinIcon} alt="icon"/>
            <p>Pin</p>
          </div>
          <div className="menu_option__item">
            <img src={ReportIcon} alt="icon"/>
            <p>Report Post</p>
          </div>
          <div className="menu_option__item">
            <img src={DeleteIcon} alt="icon"/>
            <p>Delete Post</p>
          </div>
			  </div>
      </div>
      
      <div className="post_container">
        <div className="post">
          <div className="post__picture">
            <img src={PostPic} width="40px" alt="post_img"/>
          </div>

          <div className="post__content">
            <div className="post__content__userinfo">
              <img src={PostProfilePic}  alt="profilepic"/>
              <div className="post__content__userinfo--item">
                <h3>Rose Kooto</h3>
                <div className="post__content__userinfo--item__buttom">
                  <p>Abuja</p>
                  <p>11hr ago</p>
                  <p>200 Likes</p>
                  <p>20 Replies</p>
                </div>
              </div>
            </div>
            <p className="post__content__post">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            
            <div className="post__content__comment--container">
              <h6>View all comments</h6>
              <div className="view__comment__userinfo">
                <img src={CommentProfilePic} className="view__comment__userimg" alt="profilepic"/>

                <div className="view__comments">
                  <h4>Rose Kooto</h4>
                  <h6>last seen 11hr</h6>
                  <p>
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Read more....
                  </p>
                </div>
              </div>
            </div>

            <div className="comment__actions">
              <div className="comment__actions__likes">
                <img src={LikeIcon} alt="like_icon"/>
                <img src={CommentIcon} alt="comment_icon"/>
                <img src={SaveIcon} alt="save_icon"/>
              </div>
              <div className="comment__action__share">
                <img src={ShareIcon} alt="share_icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}


export default Posts
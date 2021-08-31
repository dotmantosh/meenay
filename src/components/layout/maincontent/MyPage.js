import React from 'react'
import UserInfo from './UserInfo'
import ShareYourMoment from './ShareYourMoment'
import Posts from './Posts'
function MyPage() {
    return (
        <div>
            <UserInfo/>
           <ShareYourMoment/>
           <Posts/>
        </div>
    )
}

export default MyPage
import React from 'react'

import Tab from './Tab'
import UserInfo from './UserInfo'
import ShareYourMoment from './ShareYourMoment'
import Posts from './Posts'

function MainContent() {
    return (
        <div className="main_content">
           <Tab/>
           <UserInfo/>
           <ShareYourMoment/>
           <Posts/>
        </div>
    )
}

export default MainContent
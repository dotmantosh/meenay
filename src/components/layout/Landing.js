import React from 'react'
import LeftSidebar from './leftsidebar/LeftSidebar'
import RightSidebar from './rightsidebar/RightSidebar'
import MainContent from './maincontent/MainContent'
function Landing() {
  return (
    <div className="container landing_layout">
      <div className="left">
        <LeftSidebar/>
      </div>
      <div className="content">
        <MainContent/>
      </div>
      <div className="right">
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Landing
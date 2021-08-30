import React from 'react'
import SwitchAccount from './SwitchAccount'
import SideNav from './SideNav'
import Mypages from './Mypages'
function LeftSidebar() {
  return (
    <div className="left_sidebar">
      <SwitchAccount/>
      <SideNav/>
      <Mypages/>
    </div>
  )
}

export default LeftSidebar
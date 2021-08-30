import React from 'react'

import SuggestedListings from './SuggestedListings'
import SuggestedUsers from './SuggestedUsers'

function RightSidebar() {
  return (
    <div>
      <SuggestedListings/>
      <SuggestedUsers/>
    </div>
  )
}

export default RightSidebar
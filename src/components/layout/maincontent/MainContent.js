import React, {useState} from 'react'

import Tab from './Tab'


import MyPage from './MyPage'
import Community from './Community'
import Trending from './Trending'
import { div } from 'prelude-ls'

function MainContent() {
    const [key, setKey] = useState('mypage')
    let component;

    if(key === "community"){
        component = <Community/>
    }else if( key === "trending"){
        component = <Trending/>
    }else if ( key === "mypage") {
        component = <MyPage/>
    }
    return (
        <div className="main_content">
            <Tab setKey={setKey}/>
            {component}
            
        </div>
      
    );
  }

export default MainContent 

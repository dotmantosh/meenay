import React, {useState} from 'react'

function Tab({setKey}) {
	const [component, setComponent]= useState('mypage')

	const setComponentToMount = (value)=>{
		setComponent(value)
		setKey(value)
	}
	return (
		<div className="tab">
			<div onClick={()=>setComponentToMount('community')} className={`tab_items ${component === 'community' ?  'tab-active' : '' }`}>
				Community
			</div>
			<div onClick={()=>setComponentToMount('trending')} className={`tab_items ${component === 'trending' ?  'tab-active' : '' }`}>
				See What's Trending
			</div>
			<div onClick={()=>setComponentToMount('mypage')} className={`tab_items ${component === 'mypage' ?  'tab-active' : '' }`}>
				My Page
			</div>
		</div>
	)
}

export default Tab
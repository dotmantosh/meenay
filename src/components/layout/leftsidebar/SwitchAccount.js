import React from 'react'

function SwitchAccount() {
  return (
    <div className="switch__account">
      <h3>Switch Account</h3>

      <div className="switch__account--btns">
        <div className="switch__account--button social active-acc">
          <div className="social_notf">50+</div> 
          Social
        </div>
        <div className="switch__account--button buisness">
          <div className="buisness_notf">50+</div>
          Business
          </div>
      </div>
    </div>
  )
}


export default SwitchAccount
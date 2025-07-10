import React from 'react'
import PropTypes from 'prop-types'


function Header({text="Feedback UI"}) {
  return (
      <div className='Header'>
          <h2>{text}</h2>
      
    </div>
  )
}



export default Header

import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <div className="section-left">
        <div className="title">EdYoda</div>
        <div>Courses</div>
        <div>Programs</div>
      </div>
      <div className="section-right">
        <div className="search"></div>
        <div>Login</div>
        <button className='join'>JOIN NOW</button>
      </div>
    </nav>
  )
}

export default Nav
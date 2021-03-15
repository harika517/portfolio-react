import React from 'react';
import Typed from "react-typed";

const Header = () => {
  return (
    <div className = "header-wraper">
      {/* <div className = "main-info"> */}
      <div className="home-content">
          <div className="text-1">Hello, my name is </div>
          <div className="text-2">Harika Andugula </div>
          <div className="text-3">I am a <span>Software Engineer</span>
            , <span>Full-Stack application developer</span>, and a <span>Data Science Engineer</span>
          </div>
          <a href="#" className = "btn-main-offer" > Please view my details</a>
        </div>
        

      </div>
    // </div>
  )
}

export default Header

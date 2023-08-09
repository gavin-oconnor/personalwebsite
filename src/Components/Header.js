import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="header-container">
        <h1 className="header-text">
            Gavin O'Connor
        </h1>
    </div>
    <div className="links-container">
        <div className="link-container">
            <Link className="link" to="/">
            Home
            </Link>
                
        </div>
        <div className="link-container">
            <Link className="link" to="/projects">
                Projects
            </Link>
        </div>
    </div>
    </>
  )
}

export default Header
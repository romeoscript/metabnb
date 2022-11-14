import React from 'react'
import '../Assets/css/navbar.scss'
import logo from '../Assets/images/Group.png'
import { Link } from 'react-router-dom'

const NavBar = ({onclick}) => {
  return (
    <div className='navbar__container'>
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav__links">
       <Link to='/'> <li>Home</li></Link>
       <Link to='place'> <li>Place to stay</li></Link>
        <li>NFTs</li>
        <li>Community</li>
      </ul>
      <div className="navbar__connet-wallet" onClick={onclick}>
      Connect wallet
      </div>
    </div>
  )
}

export default NavBar

import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo1} alt="logo" />
        <img className='profile' src={assets.profile_image} alt="profile-image" />
    </div>
  )
}

export default Navbar;
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'
const Header = () => {
  const handleViewMenuClick = () => {
    window.location.href = "/#explore-menu";
  };
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order you favourite food here</h2>
        <p>Choose from a diverse menu that includes a range of dishes made with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and enhance your dining experience, a famous fine dining</p>
     <button onClick={handleViewMenuClick} >View menu</button>
      </div>

    </div>
  )
}

export default Header
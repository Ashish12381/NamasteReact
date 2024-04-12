import React from 'react'
import './Header.css';
import Nav from './Nav/Nav';

function Header() {
  return (
  <div className='container-fluid headerContainer'>
    <div className='container'>
    <div className='row align-items-center'>
        <div className='col-lg-5'>
            <div className='logo'>
                <img src={require('../../assets/swiggylogo.jpg')} alt='logo'/>
            </div>
        </div>
        <div className='col-lg-6 d-flex justify-content-end'>
            <Nav/>
        </div>
        </div>
    </div>
  </div>
  )
}

export default Header
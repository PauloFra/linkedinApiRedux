import React from 'react'
import Nav from '../footer/nav/Nav'
import styled from './header.module.css'
import logo from './Logo.png'
import retangle from './Rectangle.png'
function Header() {
  return (
    <header className={styled.header}>
      <div>
        <img src={logo} alt="" />
      </div>
       <div className={styled.borderToNav}>
        <Nav />
       </div>
       <div className={styled.divDoInput}>
         <input type="text" placeholder='Search' />
       </div>
       <div className={styled.userPicName}>
         <img src={retangle} alt="" />
         <div className={styled.infos}> 
            <h3>Name : User Name <span>You</span></h3>
            <p>Views <span>32</span></p>
         </div>
        
       </div>
        <div className={styled.others}>
           <a href="">OTHER</a>
         </div>
    </header>
   
  )
}

export default Header
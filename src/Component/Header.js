import React from 'react'
import classes from '../css/header.module.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import vector from '../assests/vectore.png'
 import noification from '../assests/icons/notification.svg'
import downarrow from '../assests/icons/arrow.svg'
 import imageHeader from '../assests/imageheader.png'
function Header() {
  return (
    <div>
    <div  className={classes.main}>

    <div  className={classes.imgicon}>
<img src={vector}   alt='vector'  />
<h3>Project M.</h3>
<KeyboardDoubleArrowLeftIcon/>
   </div>
      
      <div className={classes.input}>
      <div className={classes.svg}>
      <svg fill="none" height="17.42" viewBox="0 0 24 24" width="17.42" xmlns="http://www.w3.org/2000/svg"><g fill="#292d32"><path d="m11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25s4.6-10.25 10.25-10.25 10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75z"/><path d="m22.0004 22.7499c-.19 0-.38-.07-.53-.22l-2-2c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/></g></svg>
      </div>

      
      
       
        <input type='text' placeholder='Search for anything...'/>
      </div>

     <div className={classes.notification}>
      <img src={noification}  alt="notification"/>
     </div>
<div className={classes.headertext}>
  <h6>Anima Agrawal</h6>
  <p>U.P, India</p>
</div>

<div className={classes.imageheader}>
  <img src={imageHeader} alt="imageHaeader"/>
</div>
<div className={classes.downarrow}>
<img src={downarrow} alt=" arrow"/>
</div>

      </div> 
      {/* **************** */}
      <div className={classes.headerborder}></div>
      <div className={classes.sidebarborder}></div>


      
    </div>
  )
}

export default Header

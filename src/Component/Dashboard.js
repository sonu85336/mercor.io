import React from 'react'
import classes from '../css/Dashboard.module.css'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import pluscard  from '../assests/icons/pluscard.png' 
function Dashboard() {
  return (
    <div>
     
 <div className={classes.todo}>
   <div>
   <span className={classes.todosvg}>
            <FiberManualRecordIcon />
            <section>To Do</section>
           <span><p>4</p></span> 
           <small>...</small>
           <img src={pluscard} alt="plus"/>
          </span>


          <div className={classes.line1}></div>
   </div>

<div className={classes.card}>
    <div className={classes.cardheader}>
      <section>Low</section>
      <span>...</span>  
    </div>
    
    <h6>Brainstorming</h6>
    <p>Brainstorming brings team members' diverse experience into play</p>

    <div>
        10 comments
    </div>
</div>



 </div> {""}
 <div className={classes.onProgress}>
    
 <div>
   <span className={classes.todosvg}>
            <FiberManualRecordIcon />
            <section>On Progress</section>
            <span><p>3</p></span>
          </span>
          <div className={classes.line2}></div>
   </div>
 </div> {""}
 <div className={classes.done}>
 <div>
   <span className={classes.todosvg}>
            <FiberManualRecordIcon />
            <section>Done</section>
            <span><p>2</p></span>
          </span>

          <div className={classes.line3}></div>
   </div>
 </div>    
    
     
    </div>
  )
}

export default Dashboard

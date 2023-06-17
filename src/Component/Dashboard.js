import React from 'react'
import classes from '../css/Dashboard.module.css'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Dashboard() {
  return (
    <div>
     
 <div className={classes.todo}>
   <div>
   <span className={classes.todosvg}>
            <FiberManualRecordIcon />
            <section>To Do</section>
           <span><p>4</p></span> 
          </span>
          <div className={classes.line1}></div>
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

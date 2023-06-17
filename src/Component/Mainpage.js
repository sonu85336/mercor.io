import React from "react";
import classes from "../css/Mianpage.module.css";
import avtartgroup from "../assests/icons/avtartgroup.svg";
import dotgrid from "../assests/icons/dotgrid.png";
import filter from "../assests/icons/filter.svg";
import link from "../assests/icons/link.png";
import pencil from "../assests/icons/pencil.png";
import downarrow from "../assests/icons/arrow.svg";
import calendar8 from "../assests/icons/calendar8.svg";
import gruoppencil from "../assests/icons/grouppencil.svg";
import groupicon from "../assests/icons/groupicon.svg";
import equal from "../assests/icons/equalsign.svg";
function Mainpage() {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.mainheader}>
          <div className={classes.header}>
          <h1>Mobile App </h1>
          <div  style={{marginTop:"60px",marginLeft:'313px'}}>
          <img src={pencil} alt="pencil" />
          </div>
          <div   style={{marginTop:"60px",marginLeft:'10px'}}>
            <img src={link} alt="link" />
          </div>
            
          </div>
          <div className={classes.avtar}>
            <img src={avtartgroup} alt="avtart" />
          </div>
        </div>

        <div className={classes.midheader}>
          <div className={classes.downarrow}>
            <img src={downarrow} alt=" arrow" />
          </div>

          <div className={classes.filter}>
            <img src={filter} alt="filter" />

            <button className="btn btn-default btn-sm">Filter</button>
          </div>
          <div className={classes.today}>
            <img src={calendar8} alt="calendar" />

            <button className="btn btn-default btn-sm">Today</button>
            <span className={classes.downarrowtoday}>
              <img src={downarrow} alt=" arrow" />
            </span>
          </div>

          <div className={classes.share}>
            <img src={groupicon} alt="calendar" />

            <button className="btn btn-default btn-sm">Share</button>
          </div>

          <div className={classes.line}></div>

<div  className={classes.equal}   >
<div>

</div>
<img src={equal} alt="eqaul" />
</div>
<div  className={classes.dotgrid}>

<img src={dotgrid} alt="dotgrid" />
</div>

        </div>
        
        

      </div>
    </div>
  );
}

export default Mainpage;

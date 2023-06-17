import React from "react";
import classes from "../css/sidebar.module.css";

import gridicon from "../assests/icons/gridicon.svg";
import messageicon from "../assests/icons/message.svg";
import checklisticon from "../assests/icons/checklist.svg";
import groupicon from "../assests/icons/groupicon.svg";

import settingicon from "../assests/icons/setting.svg";
import bulb from "../assests/icons/bulb.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function SidebarPage() {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.optionmenu}>
          <span style={{ position: "absolute", marginTop: "119px" }}>
            <img src={gridicon} alt="grid" />
            <section>Home</section>
          </span>
          <span style={{ marginTop: "168px" }}>
            <img src={messageicon} alt="message" />
            <section>Messages</section>
          </span>
          <span style={{ marginTop: "217px" }}>
            <img src={checklisticon} alt="checklist" />
            <section>Tasks</section>
          </span>
          <span style={{ marginTop: "268px" }}>
            <img src={groupicon} alt="group" />
            <section>Members</section>
          </span>
          <span style={{ marginTop: "317px" }}>
            <img src={settingicon} alt="setting" />
            <section>Settings</section>
          </span>
        </div>

        <div className={classes.menuborder}></div>
        <div>
          <span className={classes.secondhead}>
            <section>MY PROJECTS</section>
            <button className="btn btn-default btn-sm">+</button>
          </span>
        </div>

        <div className={classes.secondoptionmenu}>
          <span className={classes.svg1}>
            <FiberManualRecordIcon />
            <section>Mobile App</section>
            <p>...</p>
          </span>
          <span className={classes.svg2}>
            <FiberManualRecordIcon />
            <section>Website Redesign</section>
          </span>
          <span className={classes.svg3}>
            <FiberManualRecordIcon />
            <section>Design System</section>
          </span>
          <span className={classes.svg4}>
            <FiberManualRecordIcon />
            <section>WireFrames</section>
          </span>
        </div>
        <div className={classes.footer}>
          
         
         
          <section className={classes.footersection}>Thoughts Time</section>
         <div  className={classes.p}>

        
          <p>
            We don't have any notice for you, till then you can share your
            thoughts with your peers.{" "}
          </p>
          </div>
          <div className={classes.message}>
            <h5>Write a message</h5>
          </div>
          
        </div>
        <div className={classes.bulb}></div>
        <div className={classes.spotlight}>
         <img src={bulb} alt="bulb" />
        </div>
        <span className={classes.footerspan}></span>
        
      </div>
    </div>
  );
}

export default SidebarPage;

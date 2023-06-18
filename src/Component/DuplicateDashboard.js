import React from "react";
// import ItemTypes from "./ItemTypes";
import classes from "../css/Dashboard.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import eclips12 from "../assests/img/Ellipse 12.png";
import eclips15 from "../assests/img/Ellipse15.png";
import eclips13 from "../assests/img/Ellipse13.png";
import pluscard from "../assests/icons/pluscard.png";

import messageicon from "../assests/icons/message.svg";
import { useDrag, useDrop } from 'react-dnd'
function Dashboard() {
  // const [{isDragging}, drag] = useDrag(() => ({
  //   type: ItemTypes.CARD,
  //   collect: monitor => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }))

  // const [{isDragging2}, drag2] = useDrag(() => ({
  //   type: ItemTypes.CARD,
  //   collect: monitor => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }))

  // const [{isOver},addToRef]  = useDrop({
  //   accept:"Card",
  //   collect:(monitor)=>({isOver:!!monitor.isOver()}),
  // });

  // const [{isOver:isCardOver},removeFromRef]  = useDrop({
  //   accept:"Card2",
  //   collect:(monitor)=>({isOver:!!monitor.isOver()}),
  // });
  return (
    <div>
    
      <div className={classes.todo}>
        <div>
          <span className={classes.todosvg}>
            <FiberManualRecordIcon />
            <section>To Do</section>
            <span>
              <p>4</p>
            </span>
            <small>...</small>
            <img src={pluscard} alt="plus" />
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

          <div className={classes.todoavatar}>
            <div
              style={{ position: "absolute", zIndex: "3", marginLeft: "20px" }}
            >
              <img src={eclips12} alt="eclips12" />
            </div>
            <div
              style={{ position: "absolute", zIndex: "2", marginLeft: "39px" }}
            >
              <img src={eclips13} alt="eclips13" />
            </div>
            <div
              style={{ position: "absolute", zIndex: "1", marginLeft: "59px" }}
            >
              <img src={eclips15} alt="eclips15" />
            </div>
            <div className={classes.comments}>
              <img src={messageicon} alt="message" />
              <section>12 comments</section>
            </div>
            <div className={classes.todofiles}>
              <section>0 files</section>
            </div>
          </div>
        </div>
      </div>{" "}
      {""}
      <div className={classes.onProgress}>
        <div>
          <span className={classes.todosvg}>
            <FiberManualRecordIcon />
            <section>On Progress</section>
            <span>
              <p>3</p>
            </span>
          </span>
          <div className={classes.line2}></div>
        </div>

       
        {/* <div ref={drag} opacity={isDragging?0.5:1}  style={{opacity:`${isDragging}? 0.5 :`}}>
          <h1  >item1</h1>
        </div>
        <div  ref={drag2}>
          <h1  >item2</h1>
        </div>
        <div ref={drag}>
          <h1  >item3</h1>
        </div>
        <div>
          <h1  >item4</h1>
        </div> */}
          
           
          


       
      </div>{" "}
      {""}
      <div className={classes.done}>
        <div>
          <span className={classes.todosvg}>
            <FiberManualRecordIcon />
            <section>Done</section>
            <span>
              <p>2</p>
            </span>
          </span>

          <div className={classes.line3}></div>
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;

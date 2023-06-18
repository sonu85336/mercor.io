import React from "react";
import { useState } from "react";
import classes from "../css/Dashboard.module.css";
import column2img1 from '../assests/column2img1.png'
import column2img2 from '../assests/column2img2.png'
import column2img3 from '../assests/column2img3.png'
import column3img1 from '../assests/column3img1.png'

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import eclips12 from "../assests/img/Ellipse 12.png";
import eclips15 from "../assests/img/Ellipse15.png";
import eclips13 from "../assests/img/Ellipse13.png";
import pluscard from "../assests/icons/pluscard.png";

import messageicon from "../assests/icons/message.svg";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "../css/kanban.css";
const initialData = {
  columns: [
    {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    {
      id: "column-2",
      title: "On Progress",
      taskIds: ["task-4", "task-5"],
    },
    {
      id: "column-3",
      title: "Done",
      taskIds: ["task-6","task-7"],
    },
    // Add more columns as needed
  ],
  tasks: {
    "task-1": {
      id: "task-1",
      tag: "Low",
      title: "Brainstorming",
      p: "Brainstorming brings team members' diverse experience into play",
      eclips12: eclips12,
      eclips13: eclips13,
      eclips15: eclips15,
      comment: "12 comments",
      files: "0 files",
      messageicon: messageicon,
    },
    "task-2": {
      id: "task-2",
      tag: "High",
      title: "Research",
      p: "User research helps you to create an optimal product for users.",
      eclips12: eclips12,
      eclips13: eclips13,
      eclips15: eclips15,
      comment: "10 comments",
      files: "3 files",
      messageicon: messageicon,
    },
    "task-3": {
      id: "task-3",
      tag: "High",
      title: "Wireframes",
      p: "Low fidelity wireframes include the most basic content and visuals.",
      eclips12: eclips12,
      eclips13: eclips13,
      eclips15: eclips15,
      comment: "9 comments",
      files: "8 files",
      messageicon: messageicon,
    },
    "task-4": {
      id: "task-4",
      tag: "Low",
      title: "Onboarding Illustrations",
      p: "Brainstorming brings team members' diverse experience into play",
      column2img1:column2img1,
      eclips12: eclips12,
      eclips13: eclips13,
      eclips15: eclips15,
      comment: "14 comments",
      files: "15 files",
      messageicon: messageicon,
    },
    "task-5": {
      id: "task-5",
      tag: "Low",
      title: "Moodboard",
      p: "Brainstorming brings team members' diverse experience into play",
      column2img1:column2img2,
      column2img3:column2img3,
      
      eclips12: eclips12,
      eclips13: eclips13,
      eclips15: eclips15,
      comment: "9 comments",
      files: "10 files",
      messageicon: messageicon,
    },
    "task-6": {
      id: "task-6",
      tag: "Completed",
      title: "Mbile App Design",
      p: "Brainstorming brings team members' diverse experience into play",
      column3img1:column3img1,
      eclips12: eclips12,
      eclips13: eclips13,
      eclips15: eclips15,
      comment: "12 comments",
      files: "15 files",
      messageicon: messageicon,
    },
    "task-7": {
      id: "task-7",
      tag: "Completed",
      title: "Design System",
      p: "It just  needs to adapt the UI from what you did before",
      eclips12: eclips12,
      eclips13: eclips13,
      eclips15: eclips15,
      comment: "12 comments",
      files: "15 files",
      messageicon: messageicon,
    },
    // Add more tasks as needed
  },
};

function KanbanBoard() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // Check if the destination is valid
    if (!destination) return;

    // Check if the item was dropped in a different position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Get the dragged task
    const draggedTask = data.tasks[draggableId];

    // Update the source column's taskIds
    const sourceColumn = data.columns.find(
      (column) => column.id === source.droppableId
    );
    sourceColumn.taskIds.splice(source.index, 1);

    // Update the destination column's taskIds
    const destinationColumn = data.columns.find(
      (column) => column.id === destination.droppableId
    );
    destinationColumn.taskIds.splice(destination.index, 0, draggableId);

    // Update the state with the new column and task order
    setData({
      ...data,
      columns: [...data.columns],
    });
  };
 
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <div className={classes.todo}>
            <div>
              <span className={classes.todosvg}>
                <FiberManualRecordIcon />
                <section> {data.columns[0].title}</section>
                <span>
                  <p>4</p>
                </span>
                <small>...</small>
                <img src={pluscard} alt="plus" />
              </span>

              <div className={classes.line1}></div>
            </div>

            {/* header*/}
            <Droppable droppableId={data.columns[0].id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="task-list"
                >
                  {data.columns[0].taskIds.map((taskId, index) => {
                    const task = data.tasks[taskId];
                    return (
                      <Draggable
                        key={taskId}
                        draggableId={taskId}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="task" // Use the task's color as a class name
                            //  className={classes.card}
                          >
                            <div className={classes.cardtext}>
                              <div className={classes.cardheader}>
                                <section>{task.tag}</section>
                                <span>...</span>
                              </div>

                              <h6>{task.title}</h6>
                              <p>{task.p}</p>
                              <div className={classes.todoavatar}>
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "3",
                                    marginLeft: "20px",
                                  }}
                                >
                                  <img src={eclips12} alt="eclips12" />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "2",
                                    marginLeft: "39px",
                                  }}
                                >
                                  <img src={eclips13} alt="eclips13" />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "1",
                                    marginLeft: "59px",
                                  }}
                                >
                                  <img src={eclips15} alt="eclips15" />
                                </div>
                                <div className={classes.comments}>
                                  <img src={task.messageicon} alt="message" />
                                  <section>{task.comment}</section>
                                </div>
                                <div className={classes.todofiles}>
                                  <section>{task.files}</section>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          {/* ***************** */}

          <div className={classes.onProgress}>
            <div>
              <span className={classes.todosvg}>
                <FiberManualRecordIcon />
                <section>{data.columns[1].title}</section>
                <span>
                  <p>3</p>
                </span>
              </span>
              <div className={classes.line2}></div>
            </div>
            {/* header */}
            <Droppable droppableId={data.columns[1].id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="task-list"
                >
                  {data.columns[1].taskIds.map((taskId, index) => {
                    const task = data.tasks[taskId];
                    return (
                      <Draggable
                        key={taskId}
                        draggableId={taskId}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`task ${task.color}`} // Use the task's color as a class name
                            //className={classes.card}
                          >
                            <div className={classes.cardtext}>
                              <div className={classes.cardheader}>
                                <section>{task.tag}</section>
                                <span>...</span>
                              </div>

                              <h6>{task.title}</h6>
                               
                              <img src={task.column2img1} alt="column2img1" />
                              <div className={classes.todoavatar}>
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "3",
                                    marginLeft: "20px",
                                  }}
                                >
                                  <img src={task.eclips12} alt="eclips12" />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "2",
                                    marginLeft: "39px",
                                  }}
                                >
                                  <img src={task.eclips13} alt="eclips13" />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "1",
                                    marginLeft: "59px",
                                  }}
                                >
                                  <img src={task?.eclips15} alt="eclips15" />
                                </div>
                                <div className={classes.comments}>
                                  <img src={messageicon} alt="message" />
                                  <section>{task.comment}</section>
                                </div>
                                <div className={classes.todofiles}>
                                  <section>{task.files}</section>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          {/* **************** */}

          <div className={classes.done}>
            <div>
              <span className={classes.todosvg}>
                <FiberManualRecordIcon />
                <section>{data.columns[2].title}</section>
                <span>
                  <p>2</p>
                </span>
              </span>

              <div className={classes.line3}></div>
            </div>

            {/* header */}
            <Droppable droppableId={data.columns[2].id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  // className="task-list"
                >
                 {data.columns[2].taskIds.map((taskId, index) => {
                    const task = data.tasks[taskId];
                    return (
                      <Draggable
                        key={taskId}
                        draggableId={taskId}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`task ${task.color}`} // Use the task's color as a class name

                            //className={classes.card}
                          >
                         <div className={classes.cardtext}>
                              <div className={classes.cardheader}>
                                <section>{task.tag}</section>
                                <span>...</span>
                              </div>

                              <h6>{task.title}</h6>
                              <p>{task.p}</p>
                              <img src={task.column3img1}  alt='column3img1'/>
                              <div className={classes.todoavatar}>
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "3",
                                    marginLeft: "20px",
                                  }}
                                >
                                  <img src={eclips12} alt="eclips12" />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "2",
                                    marginLeft: "39px",
                                  }}
                                >
                                  <img src={eclips13} alt="eclips13" />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "1",
                                    marginLeft: "59px",
                                  }}
                                >
                                  <img src={eclips15} alt="eclips15" />
                                </div>
                                <div className={classes.comments}>
                                  <img src={task.messageicon} alt="message" />
                                  <section>{task.comment}</section>
                                </div>
                                <div className={classes.todofiles}>
                                  <section>{task.files}</section>
                                </div>
                              </div>
                            </div>
                          
                          </div>
                        )}
                      </Draggable>
                    );
                  })}  


 
                    
                     
                    
                 
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default KanbanBoard;

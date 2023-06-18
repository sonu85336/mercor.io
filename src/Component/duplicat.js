import classes from '../css/Dashboard.module.css'

 
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import eclips12 from "../assests/img/Ellipse 12.png";
import eclips15 from "../assests/img/Ellipse15.png";
import eclips13 from "../assests/img/Ellipse13.png";
import pluscard from "../assests/icons/pluscard.png";

import messageicon from "../assests/icons/message.svg";
import '../css/kanban.css'

<div className= {classes.todo}></div>

{index==0?<div className="task-tags">
<h1>ram</h1>
</div>:index=2?<div className="task-tags">
<img src={task.image}  alt='ram'/>
</div>:index=3?<div className="task-tags">
<p>suresh</p>
</div>:<div className="task-tags">
<span>radha</span>
</div>}


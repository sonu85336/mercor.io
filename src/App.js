 
import Header from "./Component/Header";
import Mainpage from "./Component/Mainpage";
import SidebarPage from "./Component/SidebarPage";
import Dashboard from "./Component/Dashboard";
import KanbanBoard from "./Component/KanbanBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RactDnd from  './Component/RactDnd'
function App() {
  return (
    
    <div>
    <Header/>
      <SidebarPage />
      <Mainpage/>
       
       <KanbanBoard/>
        {/* <Dashboard/>   */}
    </div>
    
  );
}

export default App;

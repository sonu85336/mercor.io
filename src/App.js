 
import Header from "./Component/Header";
import Mainpage from "./Component/Mainpage";
import SidebarPage from "./Component/SidebarPage";
import Dashboard from "./Component/Dashboard";
function App() {
  return (
    <div>
    <Header/>
      <SidebarPage />
      <Mainpage/>
      <Dashboard/>
    </div>
  );
}

export default App;

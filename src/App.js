import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
//import "./App.css"

function App() {
  return(
    <div>
      <Topbar/>
      <div className = "container">
        <Sidebar/>
        <div className= "others"></div>
        other pages
      </div>
  
  </div>
  ); 
}

export default App;

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/homepage/Home"
import "./App.css"

function App() {
  return(
    <div>
      <div className="container">
        <Sidebar/>
         <Home />
      </div>
  </div>
  ); 
}

export default App;

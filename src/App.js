import { Outlet } from "react-router-dom";
import './App.css';
import Navlinks from "./components/Navlinks";


function App() {
  
  return (
    <>
      <Navlinks />
      <Outlet />
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Login from "./pages/Login";
import CRM from "./pages/CRM";
import Campaigns from "./pages/Campaigns";
import WebReport from "./pages/WebReport";
import Navbar from "./components/Navbar";
function App() {
  

  return (
   <div>
   
   <Routes>
    <Route path="/login"  element={<div><IsAnon><Login /></IsAnon></div>}/>
    <Route path="/crm"  element={<div><Navbar/><IsPrivate><CRM /></IsPrivate></div>}   />
    <Route path="/campaigns"  element={<div><Navbar/><IsPrivate><Campaigns /></IsPrivate></div>}   />
    <Route path="/web-report"  element={<div><Navbar/><IsPrivate><WebReport /></IsPrivate></div>}   />


   </Routes>
   
   </div>
  )
}

export default App

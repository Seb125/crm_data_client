import { Routes, Route } from "react-router-dom";
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  

  return (
   <div>
   <Routes>
    <Route path="/login"  element={<IsAnon><Login /></IsAnon>}/>
    <Route path="/"  element={<IsPrivate><Dashboard /></IsPrivate>}   />
   </Routes>
   </div>
  )
}

export default App

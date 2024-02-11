import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function Dashboard() {
const { logOutUser } = useContext(AuthContext);


const handleLogout = () => {
    logOutUser();
}

  return (
    <div>
    <p>Dashboard</p>
    <button onClick={handleLogout}>Logout</button>
    
    </div>
  )
}

export default Dashboard
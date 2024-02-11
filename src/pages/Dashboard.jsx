import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function Dashboard() {
const { logOutUser } = useContext(AuthContext);


const handleLogout = () => {
    logOutUser();
}

const handleSomething = () => {
  console.log(process.env.VITE_API_URL)
}

  return (
    <div>
    <p>Dashboard</p>
    <button onClick={handleLogout}>Logout</button>
    <button onClick={handleSomething}>HandleSomething</button>
    </div>
  )
}

export default Dashboard
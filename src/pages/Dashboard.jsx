import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import dataService from "../services/data.service";

function Dashboard() {
const { logOutUser } = useContext(AuthContext);


const handleLogout = () => {
    logOutUser();
}

const handleSomething = async () => {
  try {
    const response = await dataService.data({dataToken: "1a48d68f0dbdfc648d07461efd32c363db876c7b"})
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  console.log(import.meta.env.VITE_API_URL)
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
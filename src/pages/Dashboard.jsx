import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import dataService from "../services/data.service";

function Dashboard() {
const { logOutUser } = useContext(AuthContext);
const requestBody = {dataToken: "abc"}

const handleLogout = () => {
    logOutUser();
}

const handleData = async () => {
    await dataService.data(requestBody)
}
  return (
    <div>
    <p>Dashboard</p>
    <button onClick={handleLogout}>Logout</button>
    <button onClick={handleData}>UpdateDatabase</button>
    </div>
  )
}

export default Dashboard
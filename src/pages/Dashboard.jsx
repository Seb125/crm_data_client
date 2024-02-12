import { AuthContext } from "../context/auth.context";
import { useContext, useState, useEffect } from "react";
import dataService from "../services/data.service";
import { LineChart } from 'react-chartkick';
import 'chartkick/chart.js'

function Dashboard() {
const { logOutUser } = useContext(AuthContext);
const [erpData, setErpData] = useState(null);
const [fiData, setFiData] = useState(null);
const [merged, setMerged] = useState(null)


useEffect(() => {
  const getData = async () => {
    const response = await dataService.getData();
    setErpData(response.data.erpData)
    setFiData(response.data.fiData)
    setMerged(response.data.mergedData)
  }

  getData();
}, [])

const handleLogout = () => {
    logOutUser();
}

const handleSomething = async () => {
  try {
    //const response = await dataService.data({dataToken: "1a48d68f0dbdfc648d07461efd32c363db876c7b"})
    console.log(merged)
  } catch (error) {
    console.log(error)
  }
  console.log(import.meta.env.VITE_API_URL)
}

  return (
    <div>
    <nav className="navigation"><button onClick={handleLogout} className="button">Logout</button></nav>
    <div className="dashboard">
    <h2>Erp und Fi Anbieter</h2>
    {/* <button onClick={handleSomething}>HandleSomething</button> */}
    {erpData ?  <LineChart  data={[{"name": "ERP", "data": erpData, "color": "#F39200"}, {"name": "FI", "data": fiData, "color": "#050c5a"}]}/>  : <p>...Loading</p>}
    </div>
    </div>
  )
}

export default Dashboard
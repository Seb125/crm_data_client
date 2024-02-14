import { AuthContext } from "../context/auth.context";
import { useContext, useState, useEffect } from "react";
import dataService from "../services/data.service";
import { LineChart } from 'react-chartkick';
import 'chartkick/chart.js';

import databaseService from "../services/database.service";

function Dashboard() {
const { logOutUser } = useContext(AuthContext);
const [all, setAll] = useState(null);
const [erp, setErp] = useState(null);
const [fi, setFi] = useState(null)
const [im, setIm] = useState(null);
const [anbErp, setAnbErp] = useState(null);
const [anbFiIm, setAnbFiIm] = useState(null);
const [berater, setBerater] = useState(null);
const [beraterErp, setBeraterErp] = useState(null);
const [beraterFiIm, setBeraterFiIm] = useState(null);
const [allData, setAllData] = useState(null);





useEffect(() => {
  const getData = async () => {
    const response = await databaseService.getData();
    setAll(response.data.data.map(el => {
      return {createdAt: el.createdAt, count: el.all}
    }));
    setErp(response.data.data.map(el => {
      return {createdAt: el.createdAt, count: el.erp}
    }));
    setFi(response.data.data.map(el => {
      return {createdAt: el.createdAt, count: el.fi}
    }));
    setIm(response.data.data.map(el => {
      return {createdAt: el.createdAt, count: el.im}
    }));
    setAnbErp(response.data.data.map(el => {
      return {createdAt: el.createdAt, count: el.anbErp}
    }));
    setAnbFiIm(response.data.data.map(el => {
      return {createdAt: el.createdAt, count: el.anbFiIm}
    }));
    setBerater(response.data.data.map(el => {
      return {createdAt: el.createdAt, count: el.berater}
    }));
    setBeraterErp(response.data.data.map(el => {
      return {createdAt: el.createdAt, count: el.beraterErp}
    }));
    setBeraterFiIm(response.data.data.map(el => {
      return {createdAt: el.createdAt, count: el.beraterFiIm}
    }));
  }

  getData();
}, []);

useEffect(() => {
  setAllData([all, erp, fi, im, anbErp, anbFiIm, berater, beraterErp, beraterFiIm])
}, [beraterFiIm]);

const handleLogout = () => {
    logOutUser();
}

const handleSomething = async () => {
  try {
    //const response = await dataService.data({dataToken: "1a48d68f0dbdfc648d07461efd32c363db876c7b"})
    console.log(erp[0])
  } catch (error) {
    console.log(error)
  }
  
}

  return (
    <div>
    <nav className="navigation"><button onClick={handleLogout} className="button">Logout</button></nav>
    <div className="page">
    <h1>Gito CRM Daten</h1>
    <div className="dashboard">
    
    {/* <button onClick={handleSomething}>HandleSomething</button> */}
   
    {all && <div className="table"> 
    
    <h2>Alle Personen</h2>
        <table className="tableContent">
          <thead>
            <tr>
              <th className="column">Datum</th>
              <th>Anzahl</th>
            </tr>
          </thead>
          <tbody>
            {all.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <td className="column">{item.createdAt.slice(0, 10)}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>}
    {erp && <div className="table"> 
    
      <h2>ERP</h2>
          <table className="tableContent">
            <thead>
              <tr>
                <th className="column">Datum</th>
                <th>Anzahl</th>
              </tr>
            </thead>
            <tbody>
              {erp.map((item, itemIndex) => (
                <tr key={itemIndex}>
                  <td className="column">{item.createdAt.slice(0, 10)}</td>
                  <td>{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>}
    {fi && <div className="table"> 
    
    <h2>Fabrik</h2>
        <table className="tableContent">
          <thead>
            <tr>
              <th className="column">Datum</th>
              <th>Anzahl</th>
            </tr>
          </thead>
          <tbody>
            {fi.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <td className="column"> {item.createdAt.slice(0, 10)}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>}
  {im && <div className="table"> 
    
    <h2>Industrie 4.0</h2>
        <table className="tableContent">
          <thead>
            <tr>
              <th className="column">Datum</th>
              <th>Anzahl</th>
            </tr>
          </thead>
          <tbody>
            {im.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <td className="column">{item.createdAt.slice(0, 10)}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>}
  {anbErp && <div className="table"> 
    
    <h2>Anbieter ERP</h2>
        <table className="tableContent">
          <thead>
            <tr>
              <th className="column">Datum</th>
              <th>Anzahl</th>
            </tr>
          </thead>
          <tbody>
            {anbErp.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <td className="column">{item.createdAt.slice(0, 10)}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>}
  {anbErp && <div className="table"> 
    
    <h2>Anbieter FI/IM</h2>
        <table className="tableContent">
          <thead>
            <tr>
              <th className="column">Datum</th>
              <th>Anzahl</th>
            </tr>
          </thead>
          <tbody>
            {anbFiIm.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <td className="column">{item.createdAt.slice(0, 10)}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>}
  {berater && <div className="table"> 
    
    <h2>Berater</h2>
        <table className="tableContent">
          <thead>
            <tr>
              <th className="column">Datum</th>
              <th>Anzahl</th>
            </tr>
          </thead>
          <tbody>
            {berater.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <td className="column">{item.createdAt.slice(0, 10)}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>}
  {beraterErp && <div className="table"> 
    
    <h2>Berater ERP</h2>
        <table className="tableContent">
          <thead>
            <tr>
              <th className="column">Datum</th>
              <th>Anzahl</th>
            </tr>
          </thead>
          <tbody>
            {beraterErp.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <td className="column">{item.createdAt.slice(0, 10)}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>}
  {beraterErp && <div className="table"> 
    
    <h2>Berater FI/IM</h2>
        <table className="tableContent">
          <thead>
            <tr>
              <th className="column">Datum</th>
              <th>Anzahl</th>
            </tr>
          </thead>
          <tbody>
            {beraterFiIm.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <td className="column">{item.createdAt.slice(0, 10)}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>}
    {/* {allData ? (<div> {allData.map((array, index) => (
         (<div key={index}> {array[0].createdAt}</div>)
      ))} </div>) : <p>...Loading</p>} */}
    {/* erpData ?  <LineChart  data={[{"name": "ERP", "data": erpData, 
    "color": "#F39200"}, {"name": "FI", "data": fiData, "color": "#050c5a"}]}/>  : <p>...Loading</p> */}
    </div>
    <h1>Gito Campaigns Daten</h1>
    <LineChart />
    </div>
    </div>
  )
}

export default Dashboard
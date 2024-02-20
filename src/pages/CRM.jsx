import { AuthContext } from "../context/auth.context";
import { useContext, useState, useEffect } from "react";
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



const handleLogout = () => {
    logOutUser();
}

const handleSomething = async () => {
  try {
    
    console.log(campaigns)
  } catch (error) {
    console.log(error)
  }
  
}

  return (
    <div>
    
    
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
    </div>
    
      
    
    </div>
    
  )
}

export default Dashboard
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
const [campaigns, setCampaigns] = useState(null);





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
    setCampaigns(response.data.campaigns)
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
    <nav className="navigation"><button onClick={handleLogout} className="button">Logout</button></nav>
    <div className="page">
    <h1>Gito CRM Daten</h1>
    <div className="dashboard">
    
    <button onClick={handleSomething}>HandleSomething</button>
   
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
    
      {campaigns && <div className="table"> 
    
      <h2>Gito Campaigns Daten</h2>
          <table className="tableContent">
            <thead>
              <tr>
                <th className="column">Name</th>
                <th>Preview</th>
                <th>Gesendet</th>
                <th>Geliefert</th>
                <th>Geliefert_Prozent</th>
                <th>Öffnungsrate</th>
                <th>Klickrate</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.campaign_key}>
                  <td className="column">{campaign.campaign_name}</td>
                  <td><a href={`//${campaign.campaign_preview}`} target="_blank">Vorschau</a></td>
                  <td>{campaign.details.count_sent}</td>
                  <td>{campaign.details.count_delivered}</td>
                  <td>{campaign.details.percent_delivered}</td>
                  <td>{campaign.details.percent_open}</td>
                  <td>{campaign.details.clicksperopenrate}</td>
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
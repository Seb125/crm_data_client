import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { logOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser();
  }
  return (
    
    <div>
        <nav className="navigation">
        <div>
        
        <span className="naviagtion-element"><Link to={"/"}>CRM</Link></span>
        <span className="naviagtion-element"><Link to={"/campaigns"}>Campaigns</Link></span>
        <span className="naviagtion-element"><Link to={"/web-report"}>Web-Report</Link></span>
        <button onClick={handleLogout} className="button naviagtion-element">Logout</button>
        </div>
    </nav>
  </div>
  )
}

export default Navbar
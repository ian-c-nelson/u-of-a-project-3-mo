import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
return (
<aside className="menu sidebar">
  {/* <p className="menu-label">
    General
  </p> */}
  <ul className="menu-list">
    <li><Link to="/">Dashboard</Link></li>
    <li><Link to="/profile">Profile</Link></li>
  </ul>
  <p className="menu-label">
    Vehicle Information
  </p>
  <ul className="menu-list">
    
    <li>
      <Link to="/vehicles/search" className="is-active">Search for Vehicles</Link>
      
    </li>
    <li><Link to="/vehicles/for-sale">Vehicles for Sale</Link></li>
    <li><Link to="/vehicles/how-to">How To</Link></li>
    <li><Link to="/vehicles/maintentance">Set Maintenance Reminders</Link></li>
  </ul>
</aside>
);

}

export default Sidebar;
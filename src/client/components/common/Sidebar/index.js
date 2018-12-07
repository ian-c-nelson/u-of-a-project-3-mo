import React from "react";

function Sidebar(props) {
return (
<aside className="menu sidebar">
  {/* <p className="menu-label">
    General
  </p> */}
  <ul className="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>My Account</a></li>
  </ul>
  <p className="menu-label">
    Vehicle Information
  </p>
  <ul className="menu-list">
    
    <li>
      <a className="is-active">Search for Vehicles</a>
      
    </li>
    <li><a>Vehicles for Sale</a></li>
    <li><a>How To</a></li>
    <li><a>Set Maintenance Reminders</a></li>
  </ul>
</aside>
);

}

export default Sidebar;
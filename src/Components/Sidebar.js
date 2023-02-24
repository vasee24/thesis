import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarlist">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon"> {val.icon}</div>{" "}
              <div id="thalaipu">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

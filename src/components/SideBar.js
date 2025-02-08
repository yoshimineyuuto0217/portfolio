import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="contain">
      <div className="mylogo">
        <img src="/svg/1.svg"/>
      </div>
      <div className="iner">
      <nav className="sidelink">
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="sns">
        <div className="instagram">
          <img src="/svg/instagram-2016-5 (1).svg" alt="instagram"></img>
        </div>
        <div className="x">
          <img src="/svg/x-2 (1).svg" alt="x"></img>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SideBar;

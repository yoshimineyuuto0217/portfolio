import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="contain">
      <div className="mylogo">
        <img src="/svg/x-2 (1).svg"></img>
      </div>
      <div className="iner">
      <nav className="sidelink">
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/works">works</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
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

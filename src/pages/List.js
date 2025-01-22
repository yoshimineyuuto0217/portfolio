import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <>
      <h2>Works</h2>
      <div className="works common">
        <div className="block">
          <img src="images/ryokann.png" alt="旅館"></img>
          <div className="detail">
            <p className="virtual">仮想</p>
            <p className="design">design|coding</p>
            <span>旅館 「嶺」のHP</span>
          </div>
        </div>
        <div className="block">
          <img src="images/ryokann.png" alt="旅館"></img>
          <div className="detail">
            <p className="virtual">仮想</p>
            <p className="design">design|coding</p>
            <span>旅館 「嶺」のHP</span>
          </div>
        </div>
        <div className="block">
          <img src="images/ryokann.png" alt="旅館"></img>
          <div className="detail">
            <p className="virtual">仮想</p>
            <p className="design">design|coding</p>
            <span>旅館 「嶺」のHP</span>
          </div>
        </div>
        <div className="block">
          <img src="images/ryokann.png" alt="旅館"></img>
          <div className="detail">
            <p className="virtual">仮想</p>
            <p className="design">design|coding</p>
            <span>旅館 「嶺」のHP</span>
          </div>
        </div>
      </div>
      <div className="btn">
        <button>
          <Link to="/works">View More</Link>
        </button>
      </div>
    </>
  );
};

export default List;

import React from "react";
import "./Comp.css";
function Header() {
  return (
    <div>
      <div className="nav">
        <div className="logo">
    <div className="edy">
    <h1 className="head">EDYODA</h1>
          <p className="storie">Stories</p>
    </div>
          <div style={{ marginLeft: "50px", cursor: "pointer" }}>
          <p style={{ color: "#000" }}>
            Explore Categories <span className="down">{">"}</span>
          </p>
        </div>
        </div>

        <div className="rightbar">
        <div className="para"><p>EdYoda is a learning and knowledge sharing platform for techies</p></div>
        <button>Go To Main Website</button>
      </div>
      </div>

    </div>
  );
}

export default Header;

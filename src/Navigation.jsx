import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-items">
        <h1>Application-Collection</h1>
        <div className="nav-link">
          <Link to="/" style={{color:'black', textDecoration:'none', width:'100% ', height:'100%', textAlign:'center'}}>Weather</Link>
          <Link to="/notes" style={{color:'black', textDecoration:'none', width:'100%', height:'100%', textAlign:'center'}}>Notes</Link>
          <Link to="/todo" style={{color:'black', textDecoration:'none', width:'100% ', height:'100%', textAlign:'center'}}>Todo</Link>
          <Link to="/Calculator" style={{color:'black', textDecoration:'none', width:'100% ', height:'100%', textAlign:'center'}}>Calculator</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

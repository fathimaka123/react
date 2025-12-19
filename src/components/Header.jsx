import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const[auth,setAuth] = useState("Login")
  useEffect(()=>{
    console.log("UseEffect called")
  },[auth])
  console.log("header rendered")
  return (
    <div className="header">
      <img
        className="logo"
        src={LOGO_URL}
      />
      <div className="nav-items">
        <ul className="nav">
        <Link to={"/"}>  <li>Home</li></Link>
          <Link to={"/about"}>  <li>About</li></Link>
          <Link to={"/contact"}>  <li>Contact</li></Link>
          <button className="btn-login" onClick={()=>{auth === "Login" ? setAuth("Log out"): setAuth("Login")}}>{auth}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
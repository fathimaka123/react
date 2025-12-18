import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <button className="btn-login" onClick={()=>{auth === "Login" ? setAuth("Log out"): setAuth("Login")}}>{auth}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
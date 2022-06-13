import React from "react";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom";


const Navbar = () => {
  const navigate =useNavigate();
  const onLogin=()=>{
     navigate("/login")
  }
  return (
   
    <div style={{display:"flex",
    gap:"50px",color:"white",
    fontSize:"30px",
    fontFamily:"italian",
   
    marginTop:"10px"
    
    }} data-cy="navbar">
      <br />

      <Link data-cy="navbar-home-link" to="/">Home</Link>
     


 
        <div style={{display:"flex"}} data-cy="navbar-cart-items-count">cart count: 0</div>
        <button style={{backgroundColor:"rgb(114, 110, 110)",color:"white",
        fontSize:"25px",  border:"none",cursor:"pointer"}} onClick={onLogin} data-cy="navbar-login-logout-button">
          Login
        </button>
      

    </div>
  );
};

export default Navbar;

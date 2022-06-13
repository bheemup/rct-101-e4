import React from "react";

const Login = () => {
  const onLogin=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <form style={{display:"flex" ,flexDirection:"column" , gap:"10px",margin:"auto",marginTop:"20px",maxWidth:"300px"}}>
        <input style={{ border: "3px solid #987",
        borderRadius:"5px",fontSize:"25px"}} data-cy="login-email" placeholder="Enter your email..." />
        <input  style={{ border: "3px solid #987",
        borderRadius:"5px",fontSize:"25px"}} data-cy="login-password"  type="password" placeholder="Enter your password"/>
        <button  style={{ border: "3px solid #987",borderRadius:"5px",fontSize:"25px"}} onClick={onLogin} data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import "./loginUser.css";

const LoginUser = () => {
  return (
    <div className="box-info">
      <div className="login-info">
        <div className="left">
          <div className="avatar-bg" />
          <img
            src="https://simomot.com/wp-content/uploads/2014/05/gambar-vektor-jokowi-10-simomot.jpg"
            alt=""
            className="login-avatar"
          />
        </div>
        <div className="right">
          <h2 className="login-name">Jokowi</h2>
          <span className="login-level">Grand Master</span>
          <span className="login-point">100 Points</span>
        </div>
      </div>
      <div className="line" />
      <span className="logout">logout</span>
    </div>
  );
};

export default LoginUser;

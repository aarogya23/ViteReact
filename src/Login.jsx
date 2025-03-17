import React, { useState } from "react";
import "./assets/Login.css"; // CSS for styling
import logo from './assets/art.png'

const Login = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <div className="google-logo" style={{ height: '80px', width: 'auto' }}>
  <img src={logo} alt="Google Logo" style={{ height: '100%', width: 'auto' }} />
</div>

        <h2>Log in</h2>
        <p>Use your Google Account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email or phone"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="Password"
              placeholder="Password"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <p className="forgot-email">Forgot email?</p>
          
          <div className="button-group">
            <button type="button" className="create-account">Create account</button>
            <button type="submit" className="next-button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
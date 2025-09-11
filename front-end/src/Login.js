import React from 'react';
import './Signup.css';

const Login = () => {
  return (
    <div className="signup-bg">
      <div className="signup-card">
        <h2>Login</h2>
        <form className="signup-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <p className="signin-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default Login;

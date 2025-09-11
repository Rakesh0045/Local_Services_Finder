import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-bg">
      <div className="signup-card">
        <h2>Create Account</h2>
        <form className="signup-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />

          <label>Select Role</label>
          <div className="role-buttons">
            <button type="button">Service Provider</button>
            <button type="button">Customer</button>
          </div>

          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <p className="signin-text">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  )
}

export default Signup;

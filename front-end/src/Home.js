import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <h1 className="hero-heading">Local Service Finder & Booking Platform</h1>
      <p className="hero-tagline">
        Discover and book trusted local services — fast, simple, and reliable.
      </p>

      <div className="button-group">
        <Link to="/signup">
          <button className="btn-primary">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn-secondary">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

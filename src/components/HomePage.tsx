// import "./HomePage.css";

import { Link } from "@tanstack/react-router";
import { useAuth } from "../signInWithOuth";

const HomePage = (props) => {
  const { user } = useAuth();
  const { handleSignOut } = props;
  return (
    <div className="main-container">
      <div className="container-item">
        <p>Welcome, </p>
        <button onClick={handleSignOut}>Sign Out</button>
        <Link to="/add-event">Add event</Link>
        <Link to="/view-events">View all event</Link>
      </div>
    </div>
  );
};

export default HomePage;

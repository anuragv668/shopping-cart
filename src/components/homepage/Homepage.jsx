import { Link } from "react-router";
import "./Homepage.css";


function Homepage () {
  return(
    <div className="homepage">
      <Link className="linktag" to="/products">
        <p className="homepage-text">Let's Go Shop </p>
      </Link>
    </div>
  );
}

export default Homepage 

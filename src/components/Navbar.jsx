import { Link } from "react-router-dom";
import HomeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav>
      <div
        style={{
          backgroundColor: "#3697b7",
          paddingLeft: "3rem",
        }}
      >
        <Link to="/">
          <img src={HomeIcon} alt="Home-Page" style={{ height: "3rem" }} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

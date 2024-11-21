import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountBox } from "react-icons/md";
import "./Nav.css";

const Nav = ({ Contract }: { Contract: () => void }) => {
  return (
    <nav className="navbar">
      {/* Hamburger Menu */}
      <button className="menu-btn" onClick={Contract} aria-label="Toggle Sidebar">
        <GiHamburgerMenu size={24} />
      </button>
      <div className="profile-section">
        <MdAccountBox size={30} />
        <span className="username">John Doe</span>
      </div>
    </nav>
  );
};

export default Nav;

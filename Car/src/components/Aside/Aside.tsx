import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { MdPriceChange } from "react-icons/md";
import "./Aside.css";
import { NavLink } from "react-router-dom";

const Aside = ({ Clicked }: { Clicked: boolean }) => {
  return (
    <>
      <ul>
        <NavLink
          to="/Dashboard"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <li>
            <FaHome size="30" />{" "}
            {Clicked ? (
              <span>Home</span>
            ) : (
              <span className="clicked">Home</span>
            )}
          </li>
        </NavLink>

        <NavLink
          to="/Staff_management"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <li>
            <MdAccountCircle size="30" />{" "}
            {Clicked ? (
              <span>Staff Management</span>
            ) : (
              <span className="clicked">Staff Management</span>
            )}
          </li>
        </NavLink>

        <NavLink
          to="/Vehicle"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <li>
            <FaCar size="30" />{" "}
            {Clicked ? (
              <span>Vehicle</span>
            ) : (
              <span className="clicked">Vehicle</span>
            )}
          </li>
        </NavLink>

        <NavLink
          to="/Driver"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <li>
            <PiSteeringWheelFill size="30" />{" "}
            {Clicked ? (
              <span>Driver</span>
            ) : (
              <span className="clicked">Driver</span>
            )}
          </li>
        </NavLink>

        <NavLink
          to="/Inspection"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <li>
            <HiMiniWrenchScrewdriver size="30" />{" "}
            {Clicked ? (
              <span>Inspection</span>
            ) : (
              <span className="clicked">Inspection</span>
            )}
          </li>
        </NavLink>

        <NavLink
          to="/Price"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <li>
            <MdPriceChange size="30" />{" "}
            {Clicked ? (
              <span>Price</span>
            ) : (
              <span className="clicked">Price</span>
            )}
          </li>
        </NavLink>
      </ul>
    </>
  );
};

export default Aside;

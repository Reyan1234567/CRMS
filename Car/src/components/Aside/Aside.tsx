import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { MdPriceChange } from "react-icons/md";
import "./Aside.css";
import { Link } from "react-router-dom";

const Aside = ({ Clicked }: { Clicked: boolean }) => {
  return (
    <>
      <ul>

        <Link to="/Dashboard">
        <li>
          <FaHome size="30" />{" "}
          {Clicked ? <span>Home</span> : <span className="clicked">Home</span>}
        </li>
        </Link>

        <Link to="/Staff_management">
          <li>
            <MdAccountCircle size="30" />{" "}
            {Clicked ? (
              <span>Staff Management</span>
            ) : (
              <span className="clicked">Staff Management</span>
            )}
          </li>
        </Link>

        <Link to="/Vehicle">
        <li>
          <FaCar size="30" />{" "}
          {Clicked ? (
            <span>Vehicle</span>
          ) : (
            <span className="clicked">Vehicle</span>
          )}
        </li>
        </Link>

        <Link to="/Driver">
        <li>
          <PiSteeringWheelFill size="30" />{" "}
          {Clicked ? (
            <span>Driver</span>
          ) : (
            <span className="clicked">Driver</span>
          )}
        </li>
        </Link>

        <Link to="/Inspection">
        <li>
          <HiMiniWrenchScrewdriver size="30" />{" "}
          {Clicked ? (
            <span>Inspection</span>
          ) : (
            <span className="clicked">Inspection</span>
          )}
        </li>
        </Link>

        <Link to="/Price">
        <li>
          <MdPriceChange size="30" />{" "}
          {Clicked ? (
            <span>Price</span>
          ) : (
            <span className="clicked">Price</span>
          )}
        </li>
        </Link>
      </ul>
    </>
  );
};

export default Aside;

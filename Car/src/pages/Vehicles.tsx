import { CiMenuFries } from "react-icons/ci";
import "./Dashboard.css";
import myImage from "../assets/Images/Polo.png";
import { MdAccountBox, MdAccountCircle } from "react-icons/md";
import { FaCar, FaHome } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const Vehicle = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!isClicked);
  };
  return (
    <>
      <div className="container bg-light">
        <div className="row">
          <div
            className={
              isClicked ? "col-2 px-4  py-4 logo" : "col-1 px-4  py-4 logo"
            }
          >
            <img
              src={myImage}
              alt=""
              style={{ width: isClicked ? "100px" : "75px" }}
              id="logo"
            />
          </div>
          <div className="col nav p-3">
            <>
              <div className="container">
                <div className="row">
                  <div className="col">
                    {" "}
                    <button onClick={handleClick} className="btn btn-secondary">
                      <CiMenuFries />
                    </button>
                  </div>
                  <div className="col text-end">
                    {" "}
                    <div className="sub text-start">
                      <MdAccountBox size={30} />
                      <p>Children</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
        <div className="row ">
          <div
            className={isClicked ? "col-2 aside-open" : "col-1 aside-closed"}
          >
            <ul>
              <Link to="/Dashboard">
                <li className="cont">
                  {" "}
                  {<FaHome size={isClicked ? "25" : "35"} />}{" "}
                  {isClicked ? " Home" : ""}
                </li>
              </Link>
              <li className="cont">
                {" "}
                {<MdAccountCircle size={isClicked ? "25" : "35"} />}{" "}
                {isClicked ? " Staff Management" : ""}
              </li>
              <li className="cont">
                {" "}
                {<FaCar size={isClicked ? "25" : "35"} />}{" "}
                {isClicked ? " Vehicle" : " "}
              </li>
              <li className="cont">
                {" "}
                {<FaScrewdriverWrench size={isClicked ? "25" : "35"} />}{" "}
                {isClicked ? " Inspection" : ""}
              </li>
            </ul>
          </div>
          <div className="col tonc">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          </div>
          <footer className="dashboard-footer">
            Copyright 2024 © Car Booking SaaS All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
};

export default Vehicle;

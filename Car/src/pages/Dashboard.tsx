import { CiMenuFries } from "react-icons/ci";
import "./Dashboard.css";
import myImage from "../assets/Images/Polo.png";
import { MdAccountBox, MdAccountCircle } from "react-icons/md";
import { FaCar, FaHome } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!isClicked);
  };
  return (
    <>
      <div className="container bg-light">
        <div className="row">
          <div className={isClicked?"col-2 px-4  py-4 logo":"col-1 px-4  py-4 logo"}>
            <img src={myImage} alt="" style={{width: isClicked?"100px":"75px"}} id="logo"/>
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
          <div className={isClicked?"col-2 aside-open":"col-1 aside-closed"}>
            <ul>
              <li className="cont"> {<FaHome size={isClicked?"25":"35" }/>} {isClicked?" Home":""}</li>
              <Link to="/Vehicle"><li className="cont"> {<MdAccountCircle size={isClicked?"25":"35" }/>} {isClicked?" Staff Management":""}</li></Link>
              <li className="cont"> {<FaCar size={isClicked?"25":"35" }/>} {isClicked?" Vehicle":" "}</li>
              <li className="cont"> {<FaScrewdriverWrench size={isClicked?"25":"35" }/>} {isClicked?" Inspection":""}</li>
            </ul>
          </div>
          <div className="col">
            <div className="grid-container">
              {/* First Row - 4 columns */}
              <div className="grid-item">
                <h3>Total Driver</h3>
                <p>0</p>
              </div>

              <div className="grid-item">
                <h3>Total Booking</h3>
                <p>0</p>
              </div>

              <div className="grid-item">
                <h3>Total Income</h3>
                <p>$0</p>
              </div>

              <div className="grid-item">
                <h3>Total Expense</h3>
                <p>$0</p>
              </div>

              {/* Second Row - Full width */}
              <div className="grid-item full-width">
                <h3>Income Vs Expense</h3>
                <div className="chart-content">{/* Chart will go here */}</div>
              </div>
            </div>
            <footer className="dashboard-footer">
              Copyright 2024 © Car Booking SaaS All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import Nav from "../components/Nav/Nav";
import Logo from "../assets/Images/Polo.png";
import Aside from "../components/Aside/Aside";
import { useState } from "react";
import "./Vehicle.css";
import { FaPlus } from "react-icons/fa";
import Action from "../components/Action";
import TableData from "../components/Aside/TableData";
import VehicleData from "../components/VehicleData";
import Popup2 from "../components/Popup2";

const Vehicle = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!isClicked);
  const [addDisplay, setAddDisplay] = useState(false);
  const handleAdd = () => setAddDisplay(!addDisplay);
  

  return (
    <>
    
    {addDisplay&&<span className="background"></span>}
      <div className="dashboard-body">
        {/* Sidebar */}
        <aside
          className={`aside-section ${
            isClicked ? "notcollapsed" : "collapsed"
          }`}
        >
          <div className="logo-container">
            <img src={Logo} alt="Company Logo" />
          </div>
          <Aside Clicked={isClicked} />
        </aside>

        {/* Main Content */}
        <div className="footer">
          <main className="main-section">
            <Nav Contract={handleClick} />
            <div className="dashboard-content">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Model</th>
                    <th scope="col">License Plate</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {VehicleData.map((data) => (
                    <tr key={data.ID}>
                      <td>{data.ID}</td>
                      <td>{data.Name}</td>
                      <td>{data.Model}</td>
                      <td>{data.LicensePlate}</td>
                      <td>{data.Status}</td>
                      <td><Action /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleAdd} className="btn btn-primary add">
                <FaPlus className="plus" /> Create Employee
              </button>
            </div>{" "}  
            
          </main>
        
          <footer className="dashboard-footer">
            &copy; Polo Car Management System. All rights reserved.
          </footer>
        </div>
        {addDisplay?<div className="form-container"><Popup2 handleButton={handleAdd}/></div>:<span></span>}
      </div>
      
    </>
  );
};

export default Vehicle;

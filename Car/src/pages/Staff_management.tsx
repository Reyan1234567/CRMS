import Nav from "../components/Nav/Nav";
import Logo from "../assets/Images/Polo.png";
import Aside from "../components/Aside/Aside";
import { useState } from "react";
import "./Staff_management.css";
import { FaPlus } from "react-icons/fa";
import Action from "../components/Action";
import TableData from "../components/Aside/TableData";
import Popup from "../components/Popup";

const Staff_management = () => {
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
                    <th scope="col">Driver</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">License Number</th>
                    <th scope="col">Issue Date</th>
                    <th scope="col">Expiration Date</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {TableData.map((data) => (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.driver}</td>
                      <td>{data.email}</td>
                      <td>{data.phoneNumber}</td>
                      <td>{data.licenseNumber}</td>
                      <td>{data.issueDate}</td>
                      <td>{data.expirationDate}</td>
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
        {addDisplay?<div className="form-container"><Popup handleButton={handleAdd}/></div>:<span></span>}
      </div>
      
    </>
  );
};

export default Staff_management;

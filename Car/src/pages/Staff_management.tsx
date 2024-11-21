import Nav from "../components/Nav/Nav";
import Logo from "../assets/Images/Polo.png";
import Aside from "../components/Aside/Aside";
import { useState } from "react";
import "./Staff_management.css";
import { FaPlus } from "react-icons/fa";
import Action from "../components/Action";
import TableData from "../components/Aside/TableData";

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
              <table className="table table-striped table-hover">
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
        {addDisplay? (
            <div className="form-container">
            <h2>Create Driver</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Enter Last Name" />
                </div>
              </div>
          
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" id="phoneNumber" placeholder="Enter Phone Number" />
                </div>
              </div>
          
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" id="age" placeholder="Enter Age" />
                </div>
              </div>
          
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="birthDate">Birth Date</label>
                  <input type="date" id="birthDate" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" placeholder="Enter Address" />
                </div>
              </div>
          
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="licenseNumber">License Number</label>
                  <input type="text" id="licenseNumber" placeholder="Enter License Number" />
                </div>
                <div className="form-group">
                  <label htmlFor="issueDate">Issue Date</label>
                  <input type="date" id="issueDate" />
                </div>
              </div>
          
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expirationDate">Expiration Date</label>
                  <input type="date" id="expirationDate" />
                </div>
                <div className="form-group">
                  <label htmlFor="document">Document</label>
                  <input type="file" id="document" />
                </div>
              </div>
          
              {/* <div className="form-row">
                <div className="form-group">
                  <label htmlFor="license">License</label>
                  <input type="file" id="license" />
                </div>
                <div className="form-group">
                  <label htmlFor="reference">Reference</label>
                  <input type="text" id="reference" placeholder="Enter Reference" />
                </div>
              </div>
          
              <div className="form-row">
                <div className="form-group full-width">
                  <label htmlFor="notes">Notes</label>
                  <textarea id="notes" placeholder="Enter Notes"></textarea>
                </div>
              </div> */}
          
              <div className="form-actions">
                <button onClick={handleAdd} type="reset" className="btn btn-reset">Cancel</button>
                <button type="submit" className="btn btn-submit">Save</button>
              </div>
            </form>
          </div>
          
          ):<span></span>}
      </div>
      
    </>
  );
};

export default Staff_management;

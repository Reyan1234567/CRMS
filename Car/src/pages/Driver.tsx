import Nav from "../components/Nav/Nav";
import Logo from "../assets/Images/Polo.png";
import Aside from "../components/Aside/Aside";
import { useState } from "react";
import "./Driver.css";
import { FaPlus } from 'react-icons/fa';

const Driver = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!isClicked);
  
  const [create,setCreate]=useState(false)
  const handleCreate=()=> setCreate(!create)
  return (
    <>
      <div className="body">
        <div id="container1">
          {" "}
          <div className={isClicked ? "conta1" : "conta2"}>
            <img src={Logo} alt="" />
          </div>
          <div className="cont2">
            <Nav Contract={handleClick} />
          </div>
        </div>

        <div id="container2">
          {" "}
          <div className="cont1">
            <Aside Clicked={isClicked} />
          </div>
          <div className="center">
            <div className="cont2" style={{ width: '100%', padding: '20px' }}>
              <table className="table table-striped w-100">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">License No.</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>mark@example.com</td>
                    <td>+1234567890</td>
                    <td>DL123456</td>
                    <td>Active</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>jacob@example.com</td>
                    <td>+0987654321</td>
                    <td>DL789012</td>
                    <td>Inactive</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>larry@example.com</td>
                    <td>+1122334455</td>
                    <td>DL345678</td>
                    <td>Active</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={handleCreate} className="btn btn-primary">
                Create Driver <FaPlus />
              </button>
              {create &&
              <div className="add-driver-form">
                <div className="card shadow">
                  <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Add New Driver</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" placeholder="Enter first name" />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" placeholder="Enter last name" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" placeholder="Enter phone number" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">License Number</label>
                          <input type="text" className="form-control" placeholder="Enter license number" />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Status</label>
                          <select className="form-select">
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>
                      </div>

                      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                        <button onClick={handleCreate} type="button" className="btn btn-secondary me-2">Cancel</button>
                        <button type="submit" className="btn btn-primary">Save Driver</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>}
            </div>
          </div>
        </div>
        <footer className="dashboard-footer">
          Copyright 2024 © Car Booking SaaS All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Driver;

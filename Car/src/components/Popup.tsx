const Popup = ({handleButton}:{handleButton:()=>void}) => {
  return (
    <>
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
              <div className="form-actions">
                <button onClick={handleButton} type="reset" className="btn btn-reset">Cancel</button>
                <button type="submit" className="btn btn-submit">Save</button>
              </div>
            </form>
          </div>
    </>
  )
}

export default Popup

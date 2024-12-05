import React from 'react'

const Popup2 = ({handleButton}:{handleButton:()=>void}) => {
  return (
    <>
      <div className="form-container">
  <h2>Create Vehicle</h2>
  <form>
    <div className="form-row">
      <div className="form-group">
        <label>Vehicle Name</label>
        <input type="text" placeholder="Enter vehicle name" />
      </div>
      <div className="form-group">
        <label>Type</label>
        <select>
          <option value="">Select Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
        </select>
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Model</label>
        <input type="text" placeholder="Enter model" />
      </div>
      <div className="form-group">
        <label>License Plate</label>
        <input type="text" placeholder="Enter license plate" />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Daily Rate</label>
        <input type="number" placeholder="Enter daily rate" />
      </div>
      <div className="form-group">
        <label>Fuel Type</label>
        <select>
          <option value="essence">Essence</option>
          <option value="diesel">Diesel</option>
        </select>
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Notes</label>
        <textarea placeholder="Enter notes"></textarea>
      </div>
    </div>

    <div className="form-actions">
      <button onClick={handleButton} type="button" className="btn btn-danger close-btn">Close</button>
      <button  type="submit" className="btn btn-success create-btn">Save</button>
    </div>
  </form>
</div>

    </>
  )
}

export default Popup2

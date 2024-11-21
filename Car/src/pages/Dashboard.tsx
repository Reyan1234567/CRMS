import Nav from "../components/Nav/Nav";
import Logo from "../assets/Images/Polo.png";
import Aside from "../components/Aside/Aside";
import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!isClicked);

  return (
    <>
      <div className="dashboard-body">
        {/* Sidebar */}
        <aside className={`aside-section ${isClicked ? "notcollapsed" : "collapsed"}`}>
          <div className="logo-container">
            <img className="" src={Logo} alt="Company Logo" />
          </div>
          <Aside Clicked={isClicked} />
        </aside>

        {/* Main Content */}
        <div className="footer">
        <main className="main-section">
          <Nav Contract={handleClick} />
          <div className="dashboard-content">
            {/* Statistics Section */}
            <section className="stats-section">
              {[
                "Total Drivers",
                "Total Bookings",
                "Total Income",
                "Total Expenses",
              ].map((title, index) => (
                <div className="stat-box" key={index}>
                  <h3>{title}</h3>
                  <p className="stat-value">{index < 2 ? 0 : "$0"}</p>
                </div>
              ))}
            </section>

            {/* Chart Section */}
            <section className="chart-section">
              <h3>Income vs Expenses</h3>
              <div className="chart-placeholder">Chart Placeholder</div>
            </section>
          </div>{" "}

        </main>         
         <footer className="dashboard-footer">
            &copy; Polo Car Management System. All rights reserved.
          </footer>
          </div>
      </div>
    </>
  );
};

export default Dashboard;

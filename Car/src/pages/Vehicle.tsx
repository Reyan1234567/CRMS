import Nav from "../components/Nav/Nav";
import Logo from "../assets/Images/Polo.png";
import Aside from "../components/Aside/Aside";
import { useState } from "react";

const Vehicle = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!isClicked);
  return (
    <>
      <div className="body">
        <div id="container1">
          {" "}
          <div className={isClicked?"conta1":"conta2"}>
            <img src={Logo} alt="" />
          </div>
          <div className="cont2">
            <Nav Contract={handleClick}/>
          </div>
        </div>

        <div id="container2">
          {" "}
          <div className="cont1">
            <Aside Clicked={isClicked}/>
          </div>
          <div className="center">
          <div className="cont2">
                {/* Top row with 4 equal columns */}
                
              </div></div>
            </div>
            <footer className="dashboard-footer">
              Copyright 2024 © Car Booking SaaS All rights reserved.
           </footer>
          </div>
    </>
  );
};

export default Vehicle;


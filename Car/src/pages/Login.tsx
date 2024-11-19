import { Link } from "react-router-dom";
import myImage from "../assets/Images/images.png";

import myImage1 from "../assets/Images/Polo.png";
import EyeToggle from "../components/EyeToggle";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="container text-center ">
        <div className="row">
          <div className="col bg-light Login">
            <img src={myImage1} alt="" />
            on
            <h2>Welcome to Polo car rent</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="owner@gmial.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                {<EyeToggle />}
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <div className="Remember">
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
              <Link to="/Dashboard">
                <button type="submit" className="btn btn-primary login">
                  Login
                </button>
              </Link>
            </form>
          </div>
          <div className="col Hero">
            <img className="Zero" src={myImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

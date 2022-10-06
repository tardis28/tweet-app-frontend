import classes from "./Welcome.module.css";
import hero from "../../assest/home-hero.png";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className={`d-flex w-100 h-100 bg-light${classes["welcome"]}`}>
      <div className="m-0 m-sm-auto row">
        <div className={`col-sm-6 d-flex my-2 `}>
          <img src={hero} className={`m-auto ${classes["image"]}`} alt="hero" />
        </div>
        <div className="col-sm-6 d-flex">
          <div className={`container text-dark m-auto`}>
            <h2 className="text-center align-items-center ">
              Welcome to Tweet App
            </h2>
            <p className="text-center align-items-center ">
              Lets see what is going around you!
            </p>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-outline-dark mx-1" to="/login">
                Sign In
              </Link>
              <Link className="btn btn-outline-dark mx-1" to="/register">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

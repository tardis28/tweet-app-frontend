import classes from "./Signin.module.css";
import logo from "../../assest/logo.svg";
import useInput from "../../hooks/use-input";
import { useAuth } from "../../store/auth-context";
import { useLocation, useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/user-service";
import { Link } from "react-router-dom";
const isNotEmpty = (val) => val.trim().length !== 0;
const Signin = () => {
  const [errorResponse, setErrorResponse] = useState(false);
  const {
    hasError: loginIdHasError,
    enteredValue: enteredLoginId,
    enteredValueIsValid: enteredLoginIdIsValid,
    OnChangeHandler: loginIdOnChangeHandler,
    OnBlurHandler: loginIdOnBlurHandler,
    reset: loginIdReset,
  } = useInput(isNotEmpty);
  const {
    hasError: passwordHasError,
    enteredValue: enteredPassword,
    enteredValueIsValid: enteredPasswordIsValid,
    OnChangeHandler: passwordOnChangeHandler,
    OnBlurHandler: passwordOnBlurHandler,
    reset: passwordReset,
  } = useInput(isNotEmpty);

  const [info, setInfo] = useState("");

  const isFormValid = enteredLoginIdIsValid && enteredPasswordIsValid;

  const auth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/home";

  if (auth.isLoggedIn) {
    return <Navigate to="/home" replace={true} />;
  }

  const onSubmitHadler = (event) => {
    event.preventDefault();
    loginIdOnBlurHandler();
    passwordOnBlurHandler();

    if (!isFormValid) {
      return;
    }
    login(
      {
        username: enteredLoginId,
        password: enteredPassword,
      },
      (data) => {
        if(data.token==null){
          throw Error("null token")
        }
        setErrorResponse(false);
        auth.login(data.token,  data.user,data.expiryTime);
        navigate(from, { replace: true });
        loginIdReset();
        passwordReset();
      },
      (response) => {
        setInfo(response.data);
        setErrorResponse(true);
      }
    );
  };

  return (
    <div className={classes["form-container"]}>
      <div className={`text-center ${classes["form-signin"]}`}>
        <form className="" onSubmit={onSubmitHadler}>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          {(loginIdHasError || passwordHasError || errorResponse) && (
            <p className="text-danger">
              Enter Valid LoginId or Password{" "}
              <i className="bi bi-info-circle-fill" title={info}></i>
            </p>
          )}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Login Id"
              value={enteredLoginId}
              onChange={loginIdOnChangeHandler}
              onBlur={loginIdOnBlurHandler}
              required
            />
            <label htmlFor="floatingInput">Login Id</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordOnChangeHandler}
              onBlur={passwordOnBlurHandler}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-dark" type="submit">
            Sign in
          </button>
          <p className="mt-5">
            <Link to="/forgot-password" className="link-dark">
              forgot password?
            </Link>
          </p>
          <p className="mb-3">
            Not a member?{" "}
            <Link to="/register" className="link-dark">
              sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;

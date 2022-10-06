import axios from "axios";
import { URI } from "../constants/constants";

export const login = (loginDetails, successCallBack, failureCallBack) => {
  console.log(loginDetails);
  axios
    .post(URI + "/api/v1.0/tweets/login", loginDetails)
    .then((res) => {
      console.log(res.data);
      successCallBack(res.data);
    })
    .catch((er) => {
      console.log(er.response);
      failureCallBack(er.response);
    });
};

export const register = (registerDetails, successCallBack, failureCallBack) => {
  axios
    .post(URI + "/api/v1.0/tweets/register", registerDetails)
    .then((res) => {
      console.log(res.data);
      successCallBack(res.data);
    })
    .catch((er) => {
      console.log(er.response);
      failureCallBack(er.response);
    });
};

export const forgotPassword = (
  forgotPasswordDetails,
  successCallBack,
  failureCallBack
) => {
  axios
    .post(
      URI + "/api/v1.0/tweets/reset",
      forgotPasswordDetails
    )
    .then((res) => {
      console.log(res.data);
      successCallBack(res.data);
    })
    .catch((er) => {
      console.log(er.response);
      failureCallBack(er.response);
    });
};

export const getAllUsers = (token, successCallBack, failureCallBack) => {
  axios
    .get(URI + "/api/v1.0/tweets/users/all", {
      headers: { Authorization: `Bearer ${token} ` },
    })
    .then((res) => {
      successCallBack(res.data);
    })
    .catch((er) => {
      failureCallBack(er.response);
    });
};

export const searchUsers = (
  token,
  loginId,
  successCallBack,
  failureCallBack
) => {
  axios
    .get(URI + "/api/v1.0/tweets/user/search/" + loginId, {
      headers: { Authorization: `Bearer ${token} ` },
    })
    .then((res) => {
      successCallBack(res.data);
    })
    .catch((er) => {
      failureCallBack(er.response);
    });
};

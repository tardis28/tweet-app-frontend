import axios from "axios";
import { URI } from "../constants/constants";

export const addTweet = (
  token,
  tweetDetails,
  successCallBack,
  failureCallBack
) => {
  axios
    .post(
      URI + "/api/v1.0/tweets/" + tweetDetails.loginId + "/add",
      tweetDetails,
      {
        headers: { Authorization: `Bearer ${token} `, 'Access-Control-Allow-Origin': '*' },
      }
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

export const postTweet = (
  token,
  username,
  tweetDetails,
  successCallBack,
  failureCallBack
) => {
  axios
    .post(URI + "/api/v1.0/tweets/" + username + "/add", tweetDetails, {
      headers: { Authorization: `Bearer ${token} `, 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => {
      console.log(res.data);
      successCallBack(res.data);
    })
    .catch((er) => {
      console.log(er.response);
      failureCallBack(er.response);
    });
};

export const deleteTweet = (
  token,
  loginId,
  tweetId,
  successCallBack,
  failureCallBack
) => {
  axios
    .delete(URI + "/api/v1.0/tweets/" + loginId + "/delete/" + tweetId, {
      headers: { Authorization: `Bearer ${token} `, 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => {
      console.log(res.data);
      successCallBack(res.data);
    })
    .catch((er) => {
      console.log(er.response);
      failureCallBack(er.response);
    });
};

export const updateTweet = (
  token,
  loginId,
  tweetId,
  updatedTweet,
  successCallBack,
  failureCallBack
) => {
  console.log(updatedTweet);
  axios
    .put(
      URI + "/api/v1.0/tweets/" + loginId + "/update/" + tweetId,
      updatedTweet,
      {
        headers: { Authorization: `Bearer ${token} `, 'Access-Control-Allow-Origin': '*' },
      }
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

export const likeTweet = (
  token,
  loginId,
  tweetId,
  successCallBack,
  failureCallBack
) => {
  axios
    .put(
      URI + "/api/v1.0/tweets/" + loginId + "/like/" + tweetId,
      {},
      {
        headers: { Authorization: `Bearer ${token} `, 'Access-Control-Allow-Origin': '*' },
      }
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

export const replyTweet = (
  token,
  loginId,
  tweetId,
  replyTweetDetails,
  successCallBack,
  failureCallBack
) => {
  axios
    .post(
      URI + "/api/v1.0/tweets/" + loginId + "/reply/" + tweetId,
      replyTweetDetails,
      {
        headers: { Authorization: `Bearer ${token} `, 'Access-Control-Allow-Origin': '*' },
      }
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

export const getAllTweets = (token, successCallBack, failureCallBack) => {
  axios
    .get(URI + "/api/v1.0/tweets/all", {
      headers: { Authorization: `Bearer ${token} `, 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => {
      console.log(res.data)
      successCallBack(res.data);
    })
    .catch((er) => {
      failureCallBack(er.response);
    });
};

export const getTweetsByLoginId = (
  token,
  loginId,
  successCallBack,
  failureCallBack
) => {
  axios
    .get(URI + "/api/v1.0/tweets/" + loginId, {
      headers: { Authorization: `Bearer ${token} `, 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => {
      successCallBack(res.data);
    })
    .catch((er) => {
      failureCallBack(er.response);
    });
};

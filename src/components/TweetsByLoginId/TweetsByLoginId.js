import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTweetsByLoginId } from "../../services/tweet-service";
import { useAuth } from "../../store/auth-context";

import ReactLoading from "react-loading";
import Tweets from "./Tweets/Tweets";

const TweetsByLoginId = () => {
  const param = useParams();
  const auth = useAuth();
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getTweetsByLoginId(
      auth.token,
      param.loginId,
      (data) => {
        console.log(data, "from tweets by login")
        setTweets(data);
        setIsLoading(false);
      },
      (err) => {
        setError(err.data);
        setIsLoading(false);
      }
    );
  }, [param.loginId, auth.token]);


  return !isLoading ? (
    <div className="mt-3">
      {error ? (
        error
      ) : auth.user.username === param.loginId ? (
        <Tweets tweets={tweets}/>
      ) : (
        <Tweets tweets={tweets}/>
      )}
    </div>
  ) : (
    <div className="d-flex w-100">
      <ReactLoading
        type="balls"
        color="rgba(33,37,41,1)"
        height="120px"
        width="120px"
        className="m-auto"
      />
    </div>
  );
};

export default TweetsByLoginId;

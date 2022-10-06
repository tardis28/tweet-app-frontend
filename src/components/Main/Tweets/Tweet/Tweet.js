import { useState } from "react";
import { Link } from "react-router-dom";
import { likeTweet} from "../../../../services/tweet-service";
import { useAuth } from "../../../../store/auth-context";
import classes from "./Tweet.module.css";
import ProfileImage from "../../../UI/ProfileImage/ProfileImage";

const Tweet = (props) => {
  const auth = useAuth();
  const {tweet} = props;
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);


  const onLikeToggleHandler = (event) => {
    event.preventDefault();
    if(!isLiked){
      likeTweet(
        auth.token,
        auth.user.username,
        tweet.id,
        (data) => {
          setLikes(data)
        },
        () => {}
        );
      }
      setIsLiked(true);
  };
  
  return (
    <>
      <div className="container pt-2 mb-3 card">
        <div className="d-flex gap-2">
          <ProfileImage
            key={tweet.user.username}
            seed={tweet.user.username}
            className="rounded-circle bg-dark bg-opacity-50"
          />
          <div className="w-100">
            <Link
              to={"/tweets/" + tweet.user.username}
              className={`text-capitalize fw-bold ${classes["name"]}`}
            >
              {tweet.user.firstName + " " + tweet.user.lastName}
            </Link>{" "}
            <span className="text-muted">
              @{tweet.user.username} &middot; {getTimeDiff(tweet.postDate)}
            </span>
            <div>{tweet.tweetName}</div>
             {tweet.tweetTag &&<p>
             <b>#{tweet.tweetTag}</b>
            </p>} 
            <div className="d-flex justify-content-between w-100">
              <form onSubmit={onLikeToggleHandler}>
                <button className="btn shadow-none">
                  {isLiked ? (
                    <>
                      <i className="bi bi-hand-thumbs-up-fill"></i> liked (
                      {likes})
                    </>
                  ) : (
                    <>
                      <i className="bi bi-hand-thumbs-up"></i> like 
                    </>
                  )}
                </button>
              </form>
              {/* <button className="btn shadow-none" onClick={showReplyHandler}>
                <>
                  <i className="bi bi-chat"></i> reply ({tweet.replies.length})
                </>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const getTimeDiff = (t) => {
  if (t == null) return "(--)";
  const timeDiffInMs = new Date() - new Date(t);
  const timeDiffInDays = timeDiffInMs / (1000 * 60 * 60 * 24);
  if (timeDiffInDays >= 1) return Math.round(timeDiffInDays) + "d";
  const timeDiffInHrs = timeDiffInDays * 24;
  if (timeDiffInHrs >= 1) return Math.round(timeDiffInHrs) + "h";
  const timeDiffInMins = timeDiffInHrs * 60;
  if (timeDiffInMins >= 1) return Math.round(timeDiffInMins) + "m";
  const timeDiffInSecs = timeDiffInMins * 60;
  return Math.round(timeDiffInSecs) + "s";
};

export default Tweet;

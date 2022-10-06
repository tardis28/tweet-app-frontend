
import Tweet from "./Tweet/Tweet";

const Tweets = ({tweets}) => {
  

  return <>

      {tweets.length === 0 ? (
        <p className="text-center fw-bold">No Tweets</p>
      ) : (
        tweets.map((tweet) => {
          return <Tweet tweet={tweet} key={tweet.id}/>;
        })
      )}
    </>
};

export default Tweets;

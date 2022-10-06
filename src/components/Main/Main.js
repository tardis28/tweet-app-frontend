import Tweets from "./Tweets/Tweets";

const Main = () => {
  return (
    <>
      <div className="container mt-3 flex-grow-1 flex-shrink-1">
        <div className="row">
          <div className="col-md-8">
            <Tweets />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

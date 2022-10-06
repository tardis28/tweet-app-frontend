import { Link } from "react-router-dom";
import ProfileImage from "../../../UI/ProfileImage/ProfileImage";

const User = (props) => {
  return (
    <div className="hstack gap-2 mb-3">
      <div className="avatar">
        <Link to={"../tweets/" + props.username}>
          <ProfileImage
            key={props.username}
            seed={props.username}
            className="rounded-circle bg-dark bg-opacity-50"
          />
        </Link>
      </div>
      <div className="overflow-hidden ms-1">
        <Link
          className="text-decoration-none text-capitalize text-dark fw-bold mb-0"
          to={"../tweets/" + props.username}
        >
          {props.firstName + " " + props.lastName}
        </Link>
        <p className="mb-0 small text-truncate">{"@" + props.username}</p>
      </div>
    </div>
  );
};

export default User;

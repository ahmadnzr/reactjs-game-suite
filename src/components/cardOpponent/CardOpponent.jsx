import moment from "moment";
import "./cardOpponent.css";

const CardOpponent = ({ opponent }) => {
  const { name, avatar, bio, createdAt, level } = opponent;
  return (
    <div className="opponent">
      <div className="card-header d-flex align-items-center justify-content-start">
        <div className="left">
          <div className="avatar-bg" />
          <img src={avatar} alt="" className="login-avatar" />
        </div>
        <div className="right">
          <h2 className="login-name">{name}</h2>
          <span className="login-level">{level}</span>
        </div>
      </div>
      <p>{bio}</p>
      <span className="date">Since {moment(createdAt).format("LL")}</span>
      <div className="fight d-flex align-items-center justify-content-center">
        fight
      </div>
    </div>
  );
};

export default CardOpponent;

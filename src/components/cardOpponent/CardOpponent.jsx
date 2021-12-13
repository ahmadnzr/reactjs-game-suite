import "./cardOpponent.css";

const CardOpponent = () => {
  return (
    <div className="opponent">
      <div className="card-header d-flex align-items-center justify-content-start">
        <div className="left">
          <div className="avatar-bg" />
          <img
            src="https://simomot.com/wp-content/uploads/2014/05/gambar-vektor-jokowi-10-simomot.jpg"
            alt=""
            className="login-avatar"
          />
        </div>
        <div className="right">
          <h2 className="login-name">Jokowi</h2>
          <span className="login-level">Grand Master</span>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
      <span className="date">Lorem, ipsum dolor.</span>
      <div className="fight d-flex align-items-center justify-content-center">
        fight
      </div>
    </div>
  );
};

export default CardOpponent;

import "./level.css";

const Level = ({ name }) => (
  <div className="col-md level-list d-flex align-items-center justify-content-center">
    {name}
  </div>
);

export default Level;

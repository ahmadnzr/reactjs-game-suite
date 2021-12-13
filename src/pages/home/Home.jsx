import CardOpponent from "../../components/cardOpponent/CardOpponent";
import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";
import "./home.css";

import levels from "../../data/level.json";
import opponents from "../../data/opponents.json";
import { useState } from "react";

const Home = () => {
  const [selectedOpponent, setSelectedOpponent] = useState(opponents);

  const changeOpponent = (level) => {
    setSelectedOpponent(opponents.filter((o) => o.level === level));
  };

  return (
    <>
      <Navbar />
      <div className="container dashboard">
        <h1>chooce your opponent</h1>
        <div className="container">
          <div className="row">
            {levels.map((level) => (
              <div
                className="col-md level-list d-flex align-items-center justify-content-center"
                onClick={() => changeOpponent(level.name)}
              >
                {level.name}
              </div>
            ))}
          </div>
        </div>
        <div className="contaner opponents d-flex justify-content-between flex-wrap">
          {selectedOpponent.map((opponent) => (
            <CardOpponent key={opponent.id} opponent={opponent} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

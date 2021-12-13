import CardOpponent from "../../components/cardOpponent/CardOpponent";
import Level from "../../components/level/Level";
import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container dashboard">
        <h1>chooce your opponent</h1>
        <div className="container">
          <div className="row">
            {[
              "novice",
              "class a",
              "class b",
              "class c",
              "class d",
              "candidate master",
              "grand master",
            ].map((name, i) => (
              <Level key={i} name={name} />
            ))}
          </div>
        </div>
        <div className="contaner opponents d-flex justify-content-between flex-wrap">
          {[1, 2, 3, 4, 5, 6, 2, 1, 23, 1, 2, 31, 2, 4, 2, 1, 2, 2, 2, 2].map(
            (a) => (
              <CardOpponent />
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

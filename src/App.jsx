import "./app.css";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./layouts/footer/Footer";
import Navbar from "./layouts/navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;

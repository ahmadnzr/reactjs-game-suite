import "./app.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;

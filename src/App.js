import "./App.css";
import Home from "./home/Home";
import Services from "./services/Services";
import TopBar from "./topBar/TopBar";

function App() {
  return (
    <div className="app">
      <TopBar />
      <Home />
      <Services />
    </div>
  );
}

export default App;

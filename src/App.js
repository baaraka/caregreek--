import "./App.css";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Services from "./services/Services";
import TopBar from "./topBar/TopBar";

function App() {
  return (
    <div className="app">
      <TopBar />
      <Home />
      <Services />
      <Footer />
    </div>
  );
}

export default App;

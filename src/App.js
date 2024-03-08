import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Destination from "./components/Destination";
import ExperienceSomethingNew from "./components/ExperienceSomethingNew";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className=" font-montserrat overflow-hidden">
      <Element name="header-section">
        <Header />
      </Element>
      <Slider />
      <Destination />
      <ExperienceSomethingNew />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;

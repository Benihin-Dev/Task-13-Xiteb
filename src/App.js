import "./App.css";
import HomePage from "./components/0.HomePage/HomePage";
import { CurrencyProvider } from "./components/CurrencyContext/js/CurrencyContext";

function App() {
  return (
    <div className=" font-poppins overflow-hidden ">
      <CurrencyProvider>
        <HomePage />
      </CurrencyProvider>
    </div>
  );
}

export default App;

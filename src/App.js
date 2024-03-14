import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesContainer from "./RoutesContainer";

function App() {
  return (
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  );
}

export default App;

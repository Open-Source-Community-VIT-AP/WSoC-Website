import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Snowfall from "react-snowfall";

function App() {
  return (
    <Router>
      <Snowfall color="rgba(0, 163, 255, 0.6)" snowflakeCount={250} />
      <Home/>
    </Router>
  );
}

export default App;

import "./App.css";
import "./mediaqueries.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home";
import DataFetch from "./components/data-fetch";

function App() {
  return (
    <div className="react-learning-container react-learning-app">
      <Router>
        <div className="side-nav-bar">
          <h1>React PWA Starter</h1>
          <ul>
            <li>
              <NavLink to="/" activeclassname="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/data-fetch" activeclassname="active-link">
                Data Fetch
              </NavLink>
              </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/data-fetch" element={<DataFetch />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

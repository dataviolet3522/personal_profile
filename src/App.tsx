import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Profile from "./components/Profile";
import Tableau from "./components/Tableau";
import UnderConstruction from "./components/UnderConstruction";
import PowerBIComponent from "./components/PowerBI";
import { PowerBIDetail } from "./components/PowerBIDetail";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Tableau" element={<Tableau />} />
            <Route path={"power-bi"} element={<PowerBIComponent />} />
            <Route path={"power-bi/:name"} element={<PowerBIDetail />} />
            <Route path="/section4" element={<UnderConstruction />} />
            <Route path="/section5" element={<UnderConstruction />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;

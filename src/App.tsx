import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Profile from "./components/Profile";
import Tableau from "./components/Tableau";
import UnderConstruction from "./components/UnderConstruction";
import PowerBIComponent from "./components/PowerBI";
import { PowerBIDetail } from "./components/PowerBIDetail";
import DomoComponent from "./components/DomoComponent";
import ApacheComponent from "./components/ApacheComponent";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/tableau" element={<Tableau />} />
            <Route path={"power-bi"} element={<PowerBIComponent />} />
            <Route path={"power-bi/:name"} element={<PowerBIDetail />} />
            <Route path="/domo" element={<DomoComponent />} />
            <Route path="/apache" element={<ApacheComponent />} />
            <Route path="/azure" element={<UnderConstruction />} />
            <Route path="/power-platform" element={<UnderConstruction />} />
            <Route path="/react-portfolio" element={<UnderConstruction />} />
            <Route path="/embedded" element={<UnderConstruction />} />
            <Route path="/skill" element={<UnderConstruction />} />
            <Route path="/others" element={<UnderConstruction />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;

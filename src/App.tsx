import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Profile from "./components/Profile";
import Tableau from "./components/Tableau";
import PowerBIComponent from "./components/PowerBI";
import { PowerBIDetail } from "./components/PowerBIDetail";
import DomoComponent from "./components/DomoComponent";
import ApacheComponent from "./components/ApacheComponent";
import Azure from "./components/Azure";
import PowerPlatform from "./components/PowerPlatform";
import ReactPortfolio from "./components/ReactPortfolio";
import EmbeddedAnalytics from "./components/EmbeddedAnalytics";
import SkillMatrix from "./components/SkillMatrix";
import OtherSkill from "./components/OtherSkill";

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
            <Route path="/azure" element={<Azure />} />
            <Route path="/power-platform" element={<PowerPlatform />} />
            <Route path="/react-portfolio" element={<ReactPortfolio />} />
            <Route path="/embedded" element={<EmbeddedAnalytics />} />
            <Route path="/skill" element={<SkillMatrix />} />
            <Route path="/others" element={<OtherSkill />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;

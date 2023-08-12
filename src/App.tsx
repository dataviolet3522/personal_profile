import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Profile from "./components/Profile";
import UnderConstruction from "./components/UnderConstruction";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Tableau" element={<UnderConstruction />} />
            <Route path="/section3" element={<UnderConstruction />} />
            <Route path="/section4" element={<UnderConstruction />} />
            <Route path="/section5" element={<UnderConstruction />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;

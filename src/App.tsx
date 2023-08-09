import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Tableau" element={<Profile />} />
            <Route path="/section3" element={<Profile />} />
            <Route path="/section4" element={<Profile />} />
            <Route path="/section5" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;

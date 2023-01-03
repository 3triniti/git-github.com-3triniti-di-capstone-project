import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home.js";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import History from "./Pages/History.js";
import Page from "./Page.js";
import SpecialEvents from "./Pages/SpecialEvents.js";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Page />} />
          <Route path="/" element={<Home />} />
          <Route path="/:specialEvents" element={<SpecialEvents />} />
          <Route path="/:history" element={<History />} />
          <Route path="/:serviceName" element={<Services />} />
          <Route path="/:products" element={<Products />} />
          <Route path="/:products/:productName" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

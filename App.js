import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home.js";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import History from "./Pages/History.js";
import Page from "./Page.js";
import Weddings from "./Pages/Weddings.js";
import SpecialEvents from "./Pages/SpecialEvents.js";
import Yukata from "./Pages/Yukata.js";
import Workshops from "./Pages/Workshops";
import CommunityOutreach from "./Pages/CommunityOutreach.js";
import Retreats from "./Pages/Retreats.js";
import Contact from "./Pages/Contact.js";
import CupsPlates from "./Pages/CupsPlates.js";
import PotsBowls from "./Pages/PotsBowls.js";
import Tea from "./Pages/Tea.js";
import PlaceMats from "./Pages/PlaceMats.js";
import Creators from "./Pages/Creators.js";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Page />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/special-events" element={<SpecialEvents />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/community-outreach" element={<CommunityOutreach />} />
          <Route path="/retreats" element={<Retreats />} />
          <Route path="/yukata-rental" element={<Yukata />} />
          <Route path="/history" element={<History />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/serviceName" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productName" element={<Products />} />
          <Route path="/cups-and-plates" element={<CupsPlates />} />
          <Route path="/pots-and-bowls" element={<PotsBowls />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/place-mats" element={<PlaceMats />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

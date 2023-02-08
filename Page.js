import { React } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { Carousel } from "react-responsive-carousel";

export default function Page() {
  return (
    <div>
      <Navbar />

      <Carousel />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

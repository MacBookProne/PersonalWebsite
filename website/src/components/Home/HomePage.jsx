import React from "react";
import Banner from "./Banner.jsx";
import Welcome from "./Welcome.jsx";
import "../../css/css-global/structure.css";
import "../../css/home-page/home-page.css";

/*

    The home page of samhulme.com

*/

function HomePage() {
  return (
    <div className="home-page">
      <Banner />
      <Welcome />
    </div>
  );
}

export default HomePage;

import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? "fade-out" : ""}`}>
        <div className="background-image"></div>
        <div
          className="content"
          style={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          <div className="landing_content" style={{ flex: 1 }}>
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <div className="aboutus_container" style={{ flex: 2 }}>
            <AboutUs />
          </div>
        </div>
      </div>
      <div
        className={`product-list-container ${showProductList ? "visible" : ""}`}
      >
        <ProductList />
      </div>
    </div>
  );
}

export default App;

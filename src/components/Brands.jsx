// Brands.js
import React from "react";

const brands = ["brand1.png", "brand2.png", "brand3.png", "brand4.png"];

function Brands() {
  return (
    <div className="container-fluid">
      <div className="art-section-title">
        <div className="art-title-frame">
          <h4>Brands</h4>
        </div>
      </div>
      <div className="art-brands">
        {brands.map((b, idx) => (
          <img key={idx} src={`img/brands/${b}`} alt={`Brand ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Brands;

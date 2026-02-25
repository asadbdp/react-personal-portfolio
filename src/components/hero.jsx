import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import BanProfile from "../assets/images/banner-profile-bg-new.png";

const Hero = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "Custom Web Solutions.",
        "WordPress Projects.",
        "Shopify eCommerce Sites.",
        "React-based Applications."
        
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="container-fluid">
      {/* row */}
      <div className="row p-60-0 p-lg-30-0 p-md-15-0">
        {/* col */}
        <div className="col-lg-12">
          {/* banner */}
          <div
            className="art-a art-banner"
            style={{ backgroundImage: "url('img/bg.jpg')" }}
          >
            {/* banner back */}
            <div className="art-banner-back"></div>
            {/* banner dec */}
            <div className="art-banner-dec"></div>
            {/* banner overlay */}
            <div className="art-banner-overlay">
              {/* main title */}
              <div className="art-banner-title">
                {/* title */}
                <h1 className="mb-15">
                  Design & Develop Modern <br />
                  Websites!
                </h1>

                {/* suptitle */}
                <div className="art-lg-text art-code mb-25">
                  &lt;<i>code</i>&gt; I build{" "}
                  <span ref={el} className="txt-rotate"></span>
                  &lt;/<i>code</i>&gt;
                </div>

                <div className="art-buttons-frame">
                  {/* button */}
                  <a href="#." className="art-btn art-btn-md">
                    <span>Explore now</span>
                  </a>
                  {/* button */}
                  <a href="#." className="art-link art-white-link art-w-chevron">
                    Hire me
                  </a>
                </div>
              </div>
              {/* main title end */}

              {/* photo */}
              <img
                src={BanProfile}
                className="art-banner-photo"
                alt="Your Name"
              />
            </div>
            {/* banner overlay end */}
          </div>
          {/* banner end */}
        </div>
        {/* col end */}
      </div>
      {/* row end */}
    </div>
  );
};

export default Hero;

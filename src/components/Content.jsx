import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import BgHero from "./bgHero";
import Hero from "./hero";
import Counters from "./counter";
import MyService from "./services";
import Portfolio from "./Portfolio";
import Education from "./education";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";



const Content = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      Scrollbar.init(scrollRef.current, {
        damping: 0.07,
        continuousScrolling: true,
        renderByPixel: true,
      });
    }
  }, []);

  return (
    <div className="art-content">
      <BgHero />
      
      {/* add other sections like Portfolio, Testimonials, Contact, etc. */}
      <div className="transition-fade" id="swup">
            {/* scroll frame */}
            <div id="scrollbar" ref={scrollRef} className="art-scroll-frame">
            <Hero />
            <Counters />
            <MyService />
            
            <Portfolio />
            <Education />
            <ContactInfo />
            <Footer />



            </div>
        </div>
    </div>
  );
};

export default Content;

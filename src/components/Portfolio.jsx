import React, { useEffect, useRef, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Isotope from "isotope-layout";

import Ecom from "../assets/images/ecommerce/bongo.jpg"; 
import EcomOne from "../assets/images/ecommerce/skymiss.jpg";
import EcomTwo from "../assets/images/ecommerce/smmarts.jpg";
import EcomThree from "../assets/images/ecommerce/megamoss.jpg";
import EcomFour from "../assets/images/ecommerce/exotic.jpg";
import EcomFive from "../assets/images/ecommerce/hatify.jpg";
import Busi from "../assets/images/business/c2c.jpg";
import BusiOne from "../assets/images/business/ajwa.jpg";
import BusiTwo from "../assets/images/business/ajwa-elegance.jpg";
import BusiThree from "../assets/images/business/ajwa-estate.jpg";
import Cusweb from "../assets/images/customweb/indigo.jpg";
import CuswebOne from "../assets/images/customweb/ramos.jpg";
import CuswebTwo from "../assets/images/customweb/faraz.jpg";
import CuswebThree from "../assets/images/customweb/anwara.jpg";
import CuswebFour from "../assets/images/customweb/superration.jpg";
import CuswebFive from "../assets/images/customweb/soisa.jpg";

const Portfolio = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  // initialize Isotope after component mounts
  useEffect(() => {
    isotope.current = new Isotope(".art-grid", {
      itemSelector: ".art-grid-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // update filter on state change
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterChange = (key) => {
    setFilterKey(key);
  };

  useEffect(() => {
  Fancybox.bind("[data-fancybox='gallery']", {
    Hash: false,
  });

  return () => {
    Fancybox.unbind("[data-fancybox='gallery']");
    Fancybox.close();
  };
}, []);

  return (
    <>
      {/* container */}
      <div className="container-fluid">
        {/* row */}
        <div className="row p-30-0">
          {/* col */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4>Works</h4>
              </div>
              {/* right frame */}
              <div className="art-right-frame">
                {/* filter */}
                <div className="art-filter">
                  <button
                    className={`art-link ${filterKey === "*" ? "art-current" : ""}`}
                    onClick={() => handleFilterChange("*")}
                  >
                    All Categories
                  </button>
                  <button
                    className={`art-link ${filterKey === "eCommerce" ? "art-current" : ""}`}
                    onClick={() => handleFilterChange("eCommerce")}
                  >
                    eCommerce
                  </button>
                  <button
                    className={`art-link ${filterKey === "BusinessWeb" ? "art-current" : ""}`}
                    onClick={() => handleFilterChange("BusinessWeb")}
                  >
                    Business Websites
                  </button>
                  
                  <button
                    className={`art-link ${filterKey === "customweb" ? "art-current" : ""}`}
                    onClick={() => handleFilterChange("customweb")}
                  >
                    Custom Website
                  </button>
                </div>
                {/* filter end */}
              </div>
              {/* right frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          {/* grid */}
          <div className="art-grid art-grid-3-col art-gallery">
            {/* grid item */}
            <div className="art-grid-item eCommerce">
              <a
                data-fancybox="gallery"
                href={Ecom}
                className="art-a art-portfolio-item-frame art-horizontal"
              >
                <img src={Ecom} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Bongo Piran eCommerce</h5>
                <a href="https://www.bongopiran.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            <div className="art-grid-item eCommerce">
              <a
                data-fancybox="gallery"
                href={EcomOne}
                className="art-a art-portfolio-item-frame art-horizontal"
              >
                <img src={EcomOne} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Sky Miss eCommerce</h5>
                <a href="https://www.skymissbd.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            <div className="art-grid-item eCommerce">
              <a
                data-fancybox="gallery"
                href={EcomTwo}
                className="art-a art-portfolio-item-frame art-horizontal"
              >
                <img src={EcomTwo} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">SM Marts eCommerce</h5>
                <a href="https://www.smmartsbd.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            <div className="art-grid-item eCommerce">
              <a
                data-fancybox="gallery"
                href={EcomThree}
                className="art-a art-portfolio-item-frame art-horizontal"
              >
                <img src={EcomThree} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Mega Moss eCommerce</h5>
                <a href="https://megamossboss.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            <div className="art-grid-item eCommerce">
              <a
                data-fancybox="gallery"
                href={EcomFour}
                className="art-a art-portfolio-item-frame art-horizontal"
              >
                <img src={EcomFour} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Exotic Crack Snacks eCommerce</h5>
                <a href="https://exoticcracksnacks.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            <div className="art-grid-item eCommerce">
              <a
                data-fancybox="gallery"
                href={EcomFive}
                className="art-a art-portfolio-item-frame art-horizontal"
              >
                <img src={EcomFive} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Hatify eCommerce</h5>
                <a href="https://hatifybd.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>



            {/* grid item */}
            <div className="art-grid-item BusinessWeb">
              <a
                data-fancybox="gallery"
                href={Busi}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={Busi} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">C2C Pharma Ltd</h5>              
                <a href="https://c2cpharma.com.bd" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

             <div className="art-grid-item BusinessWeb">
              <a
                data-fancybox="gallery"
                href={BusiOne}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={BusiOne} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Ajwa Group Ltd</h5>              
                <a href="https://ajwagroup.org" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

             <div className="art-grid-item BusinessWeb">
              <a
                data-fancybox="gallery"
                href={BusiTwo}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={BusiTwo} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Ajwa Elegance</h5>              
                <a href="https://ajwaelegance.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            <div className="art-grid-item BusinessWeb">
              <a
                data-fancybox="gallery"
                href={BusiThree}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={BusiThree} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Ajwa Estate</h5>              
                <a href="https://ajwaestatebd.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            {/* grid item */}
            <div className="art-grid-item customweb">
              <a
                data-fancybox="gallery"
                href={Cusweb}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={Cusweb} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Indigo Headware</h5>
                    <a href="https://indigoheadwear.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            {/* grid item */}
            <div className="art-grid-item customweb">
              <a
                data-fancybox="gallery"
                href={CuswebOne}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={CuswebOne} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Ramos Plumbing Service</h5>
                    <a href="https://ramosplumbingservice.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            {/* grid item */}
            <div className="art-grid-item customweb">
              <a
                data-fancybox="gallery"
                href={CuswebTwo}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={CuswebTwo} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Faraz Group Ltd</h5>
                    <a href="https://www.farazgroupbd.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            {/* grid item */}
            <div className="art-grid-item customweb">
              <a
                data-fancybox="gallery"
                href={CuswebThree}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={CuswebThree} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Anwara Islam Dakhil Madrasha</h5>
                    <a href="http://aidm.ac.bd/" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            {/* grid item */}
            <div className="art-grid-item customweb">
              <a
                data-fancybox="gallery"
                href={CuswebFour}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={CuswebFour} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Super Raton</h5>
                    <a href="https://superraton.dj" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

            {/* grid item */}
            <div className="art-grid-item customweb">
              <a
                data-fancybox="gallery"
                href={CuswebFive}
                className="art-a art-portfolio-item-frame art-vertical"
              >
                <img src={CuswebFive} alt="item" />
                <span className="art-item-hover">
                  <i className="fas fa-expand"></i>
                </span>
              </a>
              <div className="art-item-description">
                <h5 className="mb-15">Soi Saucetrap Doll</h5>
                    <a href="https://soisaucetrapdoll.com" target="_blank" className="art-link art-color-link art-w-chevron">
                  View Project
                </a>
              </div>
            </div>

           
          </div>
          {/* grid end */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

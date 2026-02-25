import React, { useEffect } from "react";
import Sidebar from "./components/sidebar";
import Content from "./components/Content";
import Preloader from "./components/Preloader";


  function App(){
    return(
        <>
    <div className="art-app art-app-onepage">
      <div className="art-mobile-top-bar"></div>
      <div className="art-app-wrapper">
        <div className="art-app-container">
          {/* Sidebar */}
          <Sidebar />
          {/* Content */}
          <Content />

          
        </div>
      </div>

      <Preloader />

      
    
    </div>

    <div id="swupMenu"></div>
        
        </>
    );
  }

export default App;

import React from "react";
function BgHero() {

    return (
    <>

      {/* top background */}
          <div className="art-top-bg" style={{backgroundImage: "url('img/bg.jpg')"}}>
            {/* overlay */}
            <div className="art-top-bg-overlay"></div>
            {/* overlay end */}
          </div>
          {/* top background end */}

      </>
  );
};

export default BgHero;




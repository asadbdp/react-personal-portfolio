import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from "../assets/images/profile.jpg";
import Cv from "../assets/cv/asaduzzaman-cv.pdf";

Scrollbar.use(OverscrollPlugin);
import CircleProgress from "./CircleProgress";
import LineProgress from "./LineProgress";



const Sidebar = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.07,
        continuousScrolling: true,
        plugins: {
          overscroll: { effect: "bounce", damping: 0.2, maxOverscroll: 150 },
        },
      });

      
    }
  }, []);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='avatar']", {
      Hash: false,
    });
  
    return () => {
      Fancybox.unbind("[data-fancybox='avatar']");
      Fancybox.close();
    };
  }, []);


  return (
    <div className="art-info-bar">

          
          <div className="art-info-bar-frame">

            
            <div className="art-info-bar-header">
             
              <a className="art-info-bar-btn" href="#.">
                
                <i className="fas fa-ellipsis-v"></i>
              </a>
              
            </div>
            

            
            <div className="art-header">
              
              <div className="art-avatar">
                <a data-fancybox="avatar" href={Profile} className="art-avatar-curtain">
                  <img src={Profile} alt="avatar" />
                  <i className="fas fa-expand"></i>
                </a>
                
                <div className="art-lamp-light">
                  
                  <div className="art-available-lamp"></div>
                </div>
              </div>
              
              <h5 className="art-name mb-10">Asaduzzaman</h5>
              
              <div className="art-sm-text">Web Developer <br/> React, Shopify, WordPres</div>
            </div>
            

            
            <div id="scrollbar2" ref={scrollRef} className="art-scroll-frame">

              
              <div className="art-table p-15-15">
                
                <ul>
                  
                  <li>
                    <h6>Current Residence:</h6><span>China</span>
                  </li>
                  
                  <li>
                    <h6>City:</h6><span>Mianyang</span>
                  </li>
                  
                  
                </ul>
              </div>
              
              <div className="art-ls-divider"></div>

              
              <div className="art-lang-skills p-30-15">
                                   
                      <CircleProgress value={90} label="Bangla"/>
                      
                  
                    <CircleProgress value={70} label="English"/>
                  

                  <CircleProgress value={20} label="Chinese"/>
                  
                  
       
                

              </div>
              
              <div className="art-ls-divider"></div>

              
              <div className="art-hard-skills p-30-15">

                
                <div className="art-hard-skills-item">
                  <div className="art-skill-heading">
                      <h6>WordPress</h6>
                    
                  </div>
                  
                  <div className="art-line-progress">
                    <LineProgress progress={90} />
                    <div id="lineprog1"></div>
                    
                  </div>
                  
                </div>
                
                <div className="art-hard-skills-item">
                  <div className="art-skill-heading">
                    
                    <h6>WooCommerce</h6>
                  </div>
                  
                  <div className="art-line-progress">
                    <LineProgress progress={85} />
                    <div id="lineprog2"></div>
                  </div>
                  
                </div>
                
                <div className="art-hard-skills-item">
                  <div className="art-skill-heading">
                    
                    <h6>HTML5</h6>
                  </div>
                  
                  <div className="art-line-progress">
                    <LineProgress progress={85} />
                    <div id="lineprog3"></div>
                  </div>
                 
                </div>
                
                <div className="art-hard-skills-item">
                  <div className="art-skill-heading">
                    
                    <h6>CSS3</h6>
                  </div>
                  
                  <div className="art-line-progress">
                    <LineProgress progress={80} />
                    <div id="lineprog4"></div>
                  </div>
                  
                </div>
                
                <div className="art-hard-skills-item">
                  <div className="art-skill-heading">
                    
                    <h6>JavaScript</h6>
                  </div>
                  
                  <div className="art-line-progress">
                    
                    <div id="lineprog5">
                      <LineProgress progress={75} />
                    </div>
                  </div>
                  
                </div>
                
                <div className="art-hard-skills-item">
                  <div className="art-skill-heading">
                    
                    <h6>PHP</h6>
                  </div>
                  
                  <div className="art-line-progress">
                    <LineProgress progress={75} />
                    <div id="lineprog4"></div>
                  </div>
                  
                </div>

                <div className="art-hard-skills-item">
                  <div className="art-skill-heading">
                    
                    <h6>Shopify</h6>
                  </div>
                  
                  <div className="art-line-progress">
                    <LineProgress progress={65} />
                    <div id="lineprog4"></div>
                  </div>
                  
                </div>

                <div className="art-hard-skills-item">
                  <div className="art-skill-heading">
                    
                    <h6>Liquid</h6>
                  </div>
                  
                  <div className="art-line-progress">
                    <LineProgress progress={60} />
                    <div id="lineprog4"></div>
                  </div>
                  
                </div>

                <div className="art-hard-skills-item">
                  <div className="art-skill-heading">
                    
                    <h6>React</h6>
                  </div>
                  
                  <div className="art-line-progress">
                    <LineProgress progress={60} />
                    <div id="lineprog4"></div>
                  </div>
                  
                </div>



              </div>
              
              <div className="art-ls-divider"></div>

              
              <ul className="art-knowledge-list p-15-0">
                
                <li>Bootstrap5</li>
                
                <li>Tailwind CSS</li>
               
                <li>Webpack</li>
                
                <li>GIT, GitHub</li>
              </ul>
              
              <div className="art-ls-divider"></div>

              
              <div className="art-links-frame p-15-15">

                
                <a href={Cv} className="art-link" download>Download cv <i className="fas fa-download"></i></a>

              </div>
              

            </div>
            
            <div className="art-ls-social">
            
              <a href="https://github.com/asadbdp" target="_blank"><i className="fa-brands fa-github"></i></a>
              
              <a href="https://linkedin.com/in/asaduzzaman-web-developer" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              
              <a href="https://facebook.com/asad.bdesh" target="_blank"><i className="fa-brands fa-facebook"></i></a>
              
              
              
            </div>
            {/* sidebar social end */}

          </div>
          {/* menu bar frame end */}

        </div>
  );
};

export default Sidebar;

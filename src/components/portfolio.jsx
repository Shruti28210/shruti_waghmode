import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image1.jpg";
import stock2 from "../img/image1.jpg";
import stock3 from "../img/image1.jpg";
import stock4 from "../img/image1.jpg";
import stock5 from "../img/image1.jpg";


import bowl from "../img/bowl/bowlh1.png";
import bowl1 from "../img/bowl/bowlh2.png";
import bowl2 from "../img/bowl/bowllogin.png";
import bowl3 from "../img/bowl/bowlmenu.png";
import bowl4 from "../img/bowl/bowlsearch.png";
import bowl5 from "../img/bowl/bowlcart.png";


import dot from "../img/dot&key/doth.png";
import dot1 from "../img/dot&key/dotfil.png";
import dot2 from "../img/dot&key/dotfil2.png";
import dot3 from "../img/dot&key/dotlog.png";
import dot4 from "../img/dot&key/dotsign.png";
import dot5 from "../img/dot&key/dotfooter.png";


import koovs from "../img/koovs/koovsh.png";
import koovs1 from "../img/koovs/koovs log.png";
import koovs2 from "../img/koovs/koovsnav.png";
import koovs3 from "../img/koovs/koovsabout.png";
import koovs4 from "../img/koovs/koovsreadmore.png";
import koovs5 from "../img/koovs/koovs footer.png";



class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here My some Projets.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={bowl} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={bowl} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Bowl Company</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS JS MongoDB NodeJs
                          </span>
                          <p>
                            Developed the Cart Page, Shipping Page,Payment Page.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div>
                  <a href="https://github.com/MadhanM282/the-bowl-company.git" target="blank"><img id ="githubrepo" width ={40} src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"></img></a>
                  <a href="https://the-bowl-company.vercel.app/" target="blank"><button id = "livebtn">Live</button></a>
                  </div>
                <a
                  href={bowl1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={bowl2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={bowl3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={bowl4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={bowl5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={dot} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={dot} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Dot and Key SkinCare</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Js(ES6)
                          </span>{" "}
                          <p>Build Payment page and Store Data to Backend</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={dot1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div>
                  <a href="https://github.com/MohdTazammul/Dot-and-Key-Skincare-clone.git" target="blank"><img id ="githubrepo" width ={40} src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"></img></a>
                  <a href="https://mohdtazammul.github.io/Dot-and-Key-Skincare-clone/" target="blank"><button id = "livebtn">Live</button></a>
                  </div>
                <a
                  href={dot2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dot3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dot4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dot5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={koovs} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={koovs} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Koovs.com</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS 
                          </span>
                          <p>Developed Men's page,Blog page,KOOV's page</p>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={koovs1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div>
                  <a href ="https://github.com/dimple06varshney/koovs.git" target="blank"><img id ="githubrepo" width ={40} src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"></img></a>
                  <a href ="https://dimple06varshney.github.io/koovs/" target="blank"><button id = "livebtn">Live</button></a>
                  </div>
                <a
                  href={koovs2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={koovs3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={koovs4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={koovs5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

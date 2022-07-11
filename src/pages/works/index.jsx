import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Works = () => {
  return (
    <section className="py-5" id="works">
      
      <div className="text-red text-center mt-5">some of my projects</div>
      <div className="">
        <h3 className="mt-2 mb-3 text-center mb-5">
          <strong>Recent Works</strong>
        </h3>
      </div>

      <div className="mt-5">
        <ul className="works-card-wrapper">
          <li className="works-card">
            <a href="https://quirky-shockley-38ea4a.netlify.app/">{" "}
            <img src="/images/batchbills.jpg" alt="" width="100%" height="100%"/>
            </a>
          </li>
          <li className="works-card">
            <a href="https://elegant-bohr-20a9b2.netlify.app/">{" "}
            <img src="/images/elibs.jpg" alt="" width="100%" height="100%"/>
            </a>
          </li> <li className="works-card">
            <a href="https://devtestap.herokuapp.com/">{" "}
            <img src="/images/devtest.jpg" alt="" width="100%" height="100%"/>
            </a>
          </li> <li className="works-card">
            <a href="https://boring-tereshkova-b92d8d.netlify.app/">{" "}
            <img src="/images/paza.jpg" alt="" width="100%" height="100%"/>
            </a>
          </li>
          <li className="works-card">
            <a href="https://adorable-longma-593246.netlify.app/">{" "}
            <img src="/images/exambuzz.jpg" alt="" width="100%" height="100%"/>
            </a>
          </li>
          <li className="works-card">
            <a href="https://effortless-kulfi-c6910c.netlify.app/">{" "}
            <img src="/images/xito.jpg" alt="" width="100%" height="100%"/>
            </a>
          </li>
        </ul>
      </div>

      <div className="d-flex justify-content-center mt-4 ">
        <a href="https://github.com/abjerry97" className="works-button">
          <span>View all works</span> <ArrowForwardIcon />
        </a>
      </div>

      <div className="w-100 black-line mt-5"></div>
    </section>
  );
};

export default Works;

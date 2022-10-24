import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-5">
      <div className="text-center text-red mt-5">Years Of Experience</div>

      <h2 className="text-center mt-3 mb-5">
        <strong>My Resume</strong>
      </h2>

      <div className="row">
        <div className="col-12 col-md-6 mt-4 px-3">
          <h5 className="mb-3">Job Experience</h5>
          <div >
            <ul className="experience-container">
              <div className="side-line"></div>


              <li className="experience-card">
                <div className="side-line-extended"></div>
                <h5 className="mb-2">Capture Solution, </h5>
                <h6> — Software Engineer</h6>
                <span className="fz-16-bld mb-3">July 2022 - Present</span>

                <p className="mt-3">
                  Built Software application for the company using flutter,
                  Maintain already existing application for the company in java,
                  Built software application for farmers.
                </p>
              </li>


              <li className="experience-card">
                <div className="side-line-extended"></div>
                <h5 className="mb-2">Xplore Multidynamics, Ile-Ife</h5>
                <h6> — Full Stack Developer</h6>
                <span className="fz-16-bld mb-3">April 2020 - May 2022</span>

                <p className="mt-3">
                  Built Software products for restaurants to connect with
                  customers online and deliver orders at customer’s doorstep.
                  Worked on building Frontend designs, editing and creating
                  templates, Converting figma designs to html, website
                  deployment.
                </p>
              </li>

              <li className="experience-card">
                <div className="side-line-extended"></div>
                <h5 className="mb-2">Freelancer</h5>
                <h6> - Fullstack Developer</h6>{" "}
                <span className="fz-16-bld mb-3"> November 2021 - May 2022</span>
                <p className="mt-3 ">
                  Working as a Freelancer, I Convert Figma designs to real
                  scalable websites, Developing frontend designs using React and
                  Redux,useContext, custom hooks Fixing Website and IndexedDB bugs,and performing web
                  scraping.
                </p>
              </li>

              <li className="experience-card">
                <div className="side-line-extended"></div>
                <h5 className="mb-2">Hamoye, US, Texas</h5>
                <h6> - Frontend Developer</h6>{" "}
                <span className="fz-16-bld mb-3"> January 2022 - June 2022</span>
                <p className="mt-3">
                refactored the code base using style component
                added more feaures to the application,
                wrote some test for the applicaion.
                </p>
              </li>

              <li className="experience-card">
                <div className="side-line-extended"></div>
                {/* <h5 className="mb-2">Freelancer</h5> */}
                <h6> - Mobile Developer, Flutter </h6>{" "}
                <span className="fz-16-bld mb-3"> January 2020 - March 2020</span>
                <p className="mt-3 ">
                • Built a mobile app with flutter that helps consumers engage in recreational activities within their locality
                • Bulit mobile app with flutter that helps consumers order food in few minutes. 
                • Built mobile app in flutter that helps in weather forecast and estimation
                </p>
              </li>




              <li className="experience-card">
                <div className="side-line-extended"></div>
                <h5 className="mb-2">Software Engineer Intern at Rectangular AI, lagos</h5>
                <h6> - Frontend Developer</h6>{" "}
                <span className="fz-16-bld mb-3">February 2019 — December 2019</span>
                <p className="mt-3 ">
                • Work with a dynamic team in building an obstacle avoiding software for robotic stimulation.<br />
                 • Built a bird eye view 2D-minimap app for basketball activity computation.
                </p>
              </li>

          
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4 px-3">
          <h5 className="mb-3"> Educational Qualities</h5>
          <div >
            <ul className="experience-container">
            <div className="side-line"></div>
              <li className="experience-card">
              <div className="side-line-extended"></div>
                <h5 className="mb-2">Ecodynamic Energy Research group, Ile-Ife</h5>
                <h6> — Design Engineer</h6>{" "}
                <span className="fz-16-bld mb-3">March 2016 - December 2019</span>
                <p className="mt-3">
                  Worked with a dynamic team on Renewable energy, we Implemented
                  an Energy saving solar tracking solution, We programed
                  microcontrollers and built modified sine wave and sine wave
                  inverters
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-100 black-line mt-5">
      </div>
    </section>
  );
};

export default Resume;

import React from "react";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import StorageIcon from '@mui/icons-material/Storage';
import StoreIcon from '@mui/icons-material/Store';
const Services = () => {
  return (
    <section className="py-5 " id="services">
      <div className="text-red text-center mt-5">My Services</div>

      <h2 className="text-center mb-5">
        <strong>What I Do</strong>
      </h2>
      <div className="service-section-card-wrapper mt-5">
        <div className="shadoww p-3">
          <div className="">
            {/* <img src="/images/icons8-backend-development-48.png" alt="" /> */}
            <DeveloperModeIcon/>
          </div>
          <p className="service-header my-3"> Frontend Development</p>
          <p>
            I develop excellent UI with React, Vue and other relevant frame
            works, I pay special attention to UI for better user experience and
            Web apps will be responsive to make it user friendly.
          </p>
        </div>
        <div className="shadoww p-3">
          <div className="">
            <img src="/images/icons8-backend-development-48.png" alt="" />
          </div>
          <p className="service-header my-3"> Backend Development</p>
          <p>I write scalable backend codes with efficient algorithms</p>
        </div>
        <div className="shadoww p-3">
          <div className="">
            <img src="/images/social-media.png" alt="" />
            {/* <StoreIcon/> */}
          </div>
          <p className="service-header my-3">Digital Marketing</p>
          <p>
            Diligent Marketing and experience in buiding a digital-first culture
            at a large. Implemented competetive analysis and customer trend
            report to increase in sales.
          </p>
        </div>
        <div className="shadoww p-3">
          <div className="">
            <img src="/images/icons8-table-properties-48.png" alt="" />
            {/* <StorageIcon/> */}
          </div>
          <p className="service-header my-3"> Database Administration</p>
          <p>
           I Analyze the database needs to developed a long-term strategy for data improvement
          </p>
        </div>

        <div className="shadoww p-3 mb-5">
          <div className="">
            <img src="/images/icons8-algorithm-64.png" alt="" />
          </div>
          <p className="service-header my-3"> Algorithm Development</p>
          <p>
            I take time to write clean,scalable and reusable codes
          </p>
        </div>
      </div>
      <div className="w-100 black-line mt-5"></div>
    </section>
  );
};

export default Services;

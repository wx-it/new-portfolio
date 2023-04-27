import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <section>
        <div>
          <h2>My Services</h2>
          <p>
            Check Out All Services below then Click the Get Started Button to
            Proceed.
          </p>
        </div>
        <button>Get Started</button>
      </section>

      <div className="services-cards">
        <div className="service">
          <h3>Responsive web design</h3>
          <p>
            Creating websites that can adapt to different screen sizes and
            devices, ensuring a seamless user experience on all layouts.
          </p>
        </div>
        <div className="service">
          <h3>Responsive web design</h3>
          <p>
            Creating websites that can adapt to different screen sizes and
            devices, ensuring a seamless user experience on all layouts.
          </p>
        </div>
        <div className="service">
          <h3>Responsive web design</h3>
          <p>
            Creating websites that can adapt to different screen sizes and
            devices, ensuring a seamless user experience on all layouts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

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
          <h3>User interface design</h3>
          <p>
            Designing the interface that users interact with when using a
            website, including the layout, typography, colors, and overall
            visual style.
          </p>
        </div>
        <div className="service">
          <h3>Front-end development</h3>
          <p>
            Writing the HTML, CSS, and JavaScript / Reactjs code that makes up
            the front end of a website, ensuring that it's functional, fast, and
            user-friendly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

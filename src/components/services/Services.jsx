import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <section>
        <div>
          <h2>My Services</h2>
          <p>Check Out some of my Services below and let's get started!</p>
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
          <h3>User experience (UX) design</h3>
          <p>
            Designing websites that provide an exceptional user experience,
            including intuitive navigation, clear calls-to-action, and fast
            loading times.
          </p>
        </div>

        <div className="service">
          <h3>Maintenance and updates</h3>
          <p>
            Provide ongoing maintenance and updates for websites, ensuring that
            they remain secure, up-to-date, and fully functional.
          </p>
        </div>

        <div className="service">
          <h3>Performance optimization</h3>
          <p>
            Optimize websites for speed and performance, ensuring that they load
            quickly and efficiently for users.
          </p>
        </div>

        <div className="service">
          <h3>Search engine optimization</h3>
          <p>
            Optimizing websites for search engines so that they appear higher in
            search results and drive more traffic to your sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

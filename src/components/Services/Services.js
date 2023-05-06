import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="services_container">
      <div className="divider"></div>
      <div className="services_cards">
        <div className="services_header">
          <p data-aos="fade-left" className="services_title">
            Our <br />
            servives
          </p>
          {/* main card */}
          <div className="card">
            <div className="service_logo DevTeam"></div>
            <p>Development Team</p>
          </div>
        </div>
        {/* other cards  */}
        <aside className="small_cards">
          {/* small cards in servives */}
          <div className="card_top">
            <div className="small" data-aos="fade-right">
              <div className="service_logo Web"></div>
              <p>Website Development</p>
            </div>
            <div className="small" data-aos="fade-left">
              <div className="service_logo Business"></div>
              <p>Business Automation</p>
            </div>
            <div className="small" data-aos="fade-right">
              <div className="service_logo Budget"></div>
              <p>Under Budget Price</p>
            </div>
            <div className="small" data-aos="fade-left">
              <div className="service_logo Cloud"></div>
              <p>Cloud Management</p>
            </div>
          </div>
          <div className="card_bottom">
            <div className="small" data-aos="fade-right">
              <div className="service_logo App"></div>
              <p>Mobile / App Development</p>
            </div>
            <div className="small" data-aos="fade-left">
              <div className="service_logo Ecommerce"></div>
              <p>Ecommerce Development</p>
            </div>
            <div className="small" data-aos="fade-right">
              <div className="service_logo Support"></div>
              <p>App Support & Maintenance</p>
            </div>
            <div className="small" data-aos="fade-left">
              <div className="service_logo Domain"></div>
              <p>Domain & Website Hosting</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

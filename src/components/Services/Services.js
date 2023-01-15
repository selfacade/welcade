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
          <div data-aos="fade-left" className="services_title">
            Our <br />
            servives
          </div>
          {/* main card */}
          <div className="card">
            <div className="service_logo DevTeam"></div>
            <span>Development Team</span>
          </div>
        </div>
        {/* other cards  */}
        <aside className="small_cards">
          {/* small cards in servives */}
          <div className="card_top">
            <div className="small" data-aos="fade-right">
              <div className="service_logo Web"></div>
              <span>Website Development</span>
            </div>
            <div className="small" data-aos="fade-left">
              <div className="service_logo Business"></div>
              <span>Business Automation</span>
            </div>
            <div className="small" data-aos="fade-right">
              <div className="service_logo Budget"></div>
              <span>Under Budget Price</span>
            </div>
            <div className="small" data-aos="fade-left">
              <div className="service_logo Cloud"></div>
              <span>Cloud Management</span>
            </div>
          </div>
          <div className="card_bottom">
            <div className="small" data-aos="fade-right">
              <div className="service_logo App"></div>
              <span>Mobile / App Development</span>
            </div>
            <div className="small" data-aos="fade-left">
              <div className="service_logo Ecommerce"></div>
              <span>Ecommerce Development</span>
            </div>
            <div className="small" data-aos="fade-right">
              <div className="service_logo Support"></div>
              <span>App Support & Maintenance</span>
            </div>
            <div className="small" data-aos="fade-left">
              <div className="service_logo Domain"></div>
              <span>Domain & Website Hosting</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

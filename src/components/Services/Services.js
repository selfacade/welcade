import React, {useEffect} from "react";
import "./Services.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, [])
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
          <div className="card">Development Team</div>
        </div>
        {/* other cards  */}
        <aside className="small_cards">
          {/* small cards in servives */}
          <div className="card_top">
            <div className="small" data-aos="fade-right">Website Development</div>
            <div className="small" data-aos="fade-left">Business Automation</div>
            <div className="small" data-aos="fade-right">Under Budget Price</div>
            <div className="small" data-aos="fade-left">Cloud Management</div>
          </div>
          <div className="card_bottom">
            <div className="small" data-aos="fade-right">Mobile / App Development</div>
            <div className="small" data-aos="fade-left">Ecommerce Development</div>
            <div className="small" data-aos="fade-right">App Support & Maintenance</div>
            <div className="small" data-aos="fade-left">Domain & Website Hosting</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

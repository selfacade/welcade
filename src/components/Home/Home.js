import React, {useEffect} from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="home_container">
      {/* Navigation of the Page */}
      <nav className="navigation">
        <p data-aos="fade-right" className="home_header">
          <p style={{ color: "rgb(32, 205, 141)" }}>|</p><br />
          <p> welcade</p>
        </p>
      </nav>
      <main className="home_main">
        <div className="home_title">
          Enter in
          <br />
          Digital World
          <p className="desc">Get your own website to grow your<br />  business online</p>
          <a href="#contact"><button className="btn_contact">Contact us</button></a>
          <a href="#pricing"><button className="btn_pricing">Pricing</button></a>
        </div>
        <aside className="home_video">
        
        </aside>
      </main>
    </div>
  );
}

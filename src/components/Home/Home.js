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
          <span style={{ color: "rgb(32, 205, 141)" }}>|</span>
          <span className="home_logo"></span>
          <span> welcade</span>
        </p>
      </nav>
      <main className="home_main">
        <div className="home_title">
          Enter in
          <br />
          Digital World
          <p className="desc">Welcome to the welcade</p>
        </div>
        <aside className="home_video">
        
        </aside>
      </main>
    </div>
  );
}

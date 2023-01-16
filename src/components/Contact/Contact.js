import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact_container">
       <div className="wrapper">
       <div className="contact_information">
        <div className="contact_title">
          Contact <br /> Information
        </div>
        <div className="information">
          <div className="info"><a href="tel:+9321577721">+91 932-157-7721</a></div>
          <div className="info"><a href="mailto:welcade.com@gmailcom">welcade.com@gmail.com</a></div>
          <div className="info"><a href="http://welcade.netlify.app/">http://welcade.netlify.app/</a></div>
        </div>
      </div>
      <aside className="ContactImage"> 
      </aside>
       </div>
    </main>
  );
}

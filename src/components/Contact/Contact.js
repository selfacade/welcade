import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const onSubmit = (e) => {
    debugger;
  };

  const validate = (e) => {
    debugger;
  };
  return (
    <main id="contact" className="contact_container">
      <div className="wrapper">
        <div className="contact_information">
          <div data-aos="fade-left" className="contact_title">
            Contact <br /> Information
          </div>
          <div className="information">
            <div className="info" data-aos="fade-up">
              <a href="tel:+9321577721">+91 932-157-7721</a>
            </div>
            <div className="info" data-aos="fade-right">
              <a href="mailto:welcade.com@gmailcom">welcade.com@gmail.com</a>
            </div>
            <div className="info" data-aos="fade-left">
              <a href="http://welcade.netlify.app/">
                http://welcade.netlify.app/
              </a>
            </div>
          </div>
        </div>
        <aside className="ContactImage"></aside>
        {/* <Form
          onSubmit={(formObj) => {
            console.log(formObj);
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="name">
                {({ input }) => (
                  <input placeholder="Name" type="text" {...input} />
                )}
              </Field>
              <Field name="email">
                {({ input }) => (
                  <input placeholder="Email" type="email" {...input} />
                )}
              </Field>
              <button type="submit">Submit</button>
            </form>
          )}
        </Form> */}
      </div>
    </main>
  );
}

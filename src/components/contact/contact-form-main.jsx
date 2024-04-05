import ContactForm from "@components/forms/contact-form";
import React from "react";

const ContactFormMain = () => {
  return (
    <section className="bd-contact-area pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-60">
            <div
              className="bd-contact-form wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h3 className="bd-contact-form-title mb-25">
                Contact Us Right Here
              </h3>
              <ContactForm />
            </div>
          </div>
          <div className="col-xl-6 mb-60">
            <div
              className="bd-contact-map wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.6938422091453!2d-60.219678800000004!3d46.1369281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b67fade94541a83%3A0x146ec4a2d02c2b62!2sHarbourview%20Montessori!5e0!3m2!1sen!2sjp!4v1712301400825!5m2!1sen!2sjp"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormMain;

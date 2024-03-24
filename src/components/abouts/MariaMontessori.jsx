import React from "react";
import Maria_Montessori from "@assets/img/drmaria/Maria_Montessori.jpeg";
import signature from "@assets/img/drmaria/signature.jpg";

import trippleLine from "@assets/img/shape/tripple-line.png";
import Image from "next/image";

const AboutMariaMontessori = () => {
  return (
    <>
      <section className="bd-faq-area pt-120 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="mb-60">
                <div
                  className="bd-section-title-wrapper mb-25 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <h2 className="pt-10 text-center mb-10">
                    Dr. Maria Montessori
                  </h2>
                </div>
                <div
                  className="bd-faq wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <div
                    className="bd-teacher-widget theme-bg-6 wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <div className="bd-teacher-widget-content">
                      <div
                        className="text-center mb-70 wow fadeInRight"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                      >
                        <div className="bd-faq-thumb ">
                          <div
                            className="p-relative wow fadeInRight"
                            data-wow-duration="1s"
                            data-wow-delay=".3s"
                          >
                            <Image
                              src={Maria_Montessori}
                              style={{ width: "100%", height: "80%" }}
                              alt="faq img"
                            />
                            <div className="panel-2 wow"></div>
                          </div>
                        </div>
                        <div className="bd-faq-shape d-none p-relative d-lg-block">
                          <Image
                            src={trippleLine}
                            style={{ width: "100%", height: "50%" }}
                            alt="shape not found"
                          />
                        </div>
                      </div>
                      <p>
                        Maria Montessori lived from 1870 until 1952. She was the
                        first female doctor of medicine in Italy. Through her
                        work, she developed a philosophy and method of education
                        based on what she observed to be universal principles of
                        development. Montessori was an educational innovator
                        whose ideas have greatly influenced modern views of
                        education and parenting.
                      </p>
                      <p>
                        Scientific observation then has established that
                        education is not what the teacher gives; education is a
                        natural process spontaneously carried out by the human
                        individual and is acquired not by listening to words but
                        by experiences upon the environment.
                      </p>

                      <div
                        className="bd-faq-thumb-wrapper text-center mb-20 wow fadeInRight"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                      >
                        <div className="bd-faq-thumb ">
                          <div
                            className="p-relative wow fadeInRight"
                            data-wow-duration="1s"
                            data-wow-delay=".3s"
                          >
                            <Image
                              src={signature}
                              style={{ width: "100%", height: "100%" }}
                              alt="faq img"
                            />
                          </div>
                        </div>
                        <div className="bd-faq-shape d-none p-relative d-lg-block">
                          <Image
                            src={trippleLine}
                            style={{ width: "100%", height: "100%" }}
                            alt="shape not found"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMariaMontessori;

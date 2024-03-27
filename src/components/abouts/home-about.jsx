import React from "react";
import faqImg from "@assets/img/school/V-Day.png";
import trippleLine from "@assets/img/shape/tripple-line.png";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <>
      <section className="bd-faq-area pt-120 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="bd-faq-content mb-60">
                <div
                  className="bd-section-title-wrapper mb-25 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <h2 className="bd-section-title mb-0">
                    Know More
                    <br />
                    About Harbourview Montessori
                  </h2>
                </div>
                <div
                  className="bd-faq wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What ages does your school serve?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The starting age is 2 ½ years. We serve children to
                            grade 5.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How many students are typically in a Montessori
                          Classroom?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The maximum number per class is 20. Our Children’s
                            House rooms are regulated by Department of Education
                            Early Years; therefore, we maintain the proper ratio
                            of teachers to children. The ratio is 1:8.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What is the process for registration?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The first step is to contact our school via phone or
                            email in order to scheduled a tour. During your
                            tour, a teacher will give you an overview of the
                            daily schedule and will answer any questions that
                            you may have. You will then be added to our wait
                            list. You will receive our annual contract, health
                            questionnaire and parent handbook to review.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div
                className="bd-faq-thumb-wrapper mb-70 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-faq-thumb">
                  <div
                    className="bd-faq-thumb-mask p-relative wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <Image
                      src={faqImg}
                      style={{ width: "100%", height: "100%" }}
                      alt="faq img"
                    />
                    <div className="panel-2 wow"></div>
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
      </section>
    </>
  );
};

export default HomeAbout;

import React from "react";

const FaqPageMain = () => {
  return (
    <section className="bd-faq-area pt-120 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="bd-section-title-wrapper text-center mb-55 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h2 className="bd-section-title mb-0">
                Freequently Asked Questions
              </h2>
              <p>{""}</p>
              {/* <p>View classes by age, program, or subject. Check out upcoming camps and<br /> special events too!
                            </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-faq-content bd-faq-content-4 mb-25 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-faq">
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
                        Is Montessori Education inclusive?
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
                          Montessori Education has inclusion at its roots!.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Are your Children’s House rooms subsidized?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Because we are regulated by the provincial government,
                          all spaces for children up to the age of 5 are
                          subsidized at the rate of $18.25/day. This amount is
                          subtracted from the annual tuition fee. As the
                          Canada-wide Childcare Agreement evolves, the
                          subsidized amount will increase. Parents will be
                          notified of this increase (i.e. decrease in tuition
                          fee).
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
              className="bd-faq-content bd-faq-content-4 mb-25 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-faq">
                <div className="accordion" id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingTwoo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseOne"
                        aria-expanded="false"
                        aria-controls="faqCollapseOne"
                      >
                        What is the process for registration?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingTwoo"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          The first step is to contact our school via phone or
                          email in order to scheduled a tour. During your tour,
                          a teacher will give you an overview of the daily
                          schedule and will answer any questions that you may
                          have. You will then be added to our wait list. You
                          will receive our annual contract, health questionnaire
                          and parent handbook to review.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseTwo"
                        aria-expanded="false"
                        aria-controls="faqCollapseTwo"
                      >
                        Do you offer programs through the summer?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingTwo"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          We offer two programs through the summer. One is for
                          children ages 3-5; the other is for children ages 6-8.
                          The summer program is 6 weeks long and runs from
                          Monday to Friday, 9am-3pm (with early drop-off at
                          8:30am).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseThree"
                        aria-expanded="false"
                        aria-controls="faqCollapseThree"
                      >
                        Do Montessori schools follow a curriculum?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingThree"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          At Harbourview Montessori School, we integrate the
                          Montessori Curriculum with the Nova Scotia Department
                          of Education Curriculum. The Montessori Curriculum is
                          an international one; therefore, the transition from a
                          Montessori school in another country is an easy
                          transition.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseFour"
                        aria-expanded="false"
                        aria-controls="faqCollapseFour"
                      >
                        Is my child eligible to join Harbourview Montessori
                        School if they have previously attended a public school?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingFour"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          While it is ideal for children to begin with us at age
                          3 or 4, children are certainly welcome to join our
                          school community at any age!
                        </p>
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
  );
};

export default FaqPageMain;

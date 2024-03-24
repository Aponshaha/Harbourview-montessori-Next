import React from "react";
import Image from "next/image";
import promotion from "@assets/img/promotion/1.png";
import line from "@assets/img/shape/tripple-line.png";

const AboutPromotion = () => {
  return (
    <section className="bd-promotion-area-2 pt-120 pb-60 fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12">
            <div
              className="bd-promotion bd-promotion-2 mb-60 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div
                className="bd-section-title-wrapper mb-25 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h2 className=" text-center mb-80">Why we are unique</h2>
              </div>
              <div className="bd-promotion-list mb-50">
                <ul>
                  <li>
                    We work from a deep concern for his or her social and
                    emotional development because there is far more to education
                    than mastering facts.
                  </li>
                  <li>
                    We ensure a warm and supportive community of students,
                    teachers and parents.
                  </li>
                  <li>
                    We consciously teach our students to be kind, generous and
                    peaceful.
                  </li>
                  <li>
                    We provide comfortable and exciting environments for
                    learning about the world.
                  </li>
                  <li>
                    Students learn actively through hands-on experience,
                    investigation, and research, promoting engagement in studies
                    rather than passive acceptance.
                  </li>
                  <li>
                    Our students learn through hands-on experience,
                    investigation and research. They become actively engaged in
                    their studies, rather than passively accepting what is given
                    to them.
                  </li>
                  <li>
                    We challenge and set high expectations for all of our
                    students.
                  </li>
                  <li>
                    Harbourview Montessori School is an international school.
                    Both our curriculum and student body reflect a global
                    perspective.
                  </li>
                  {/* <li>
                    We instil in our students a love for the natural world.
                    Ecological studies and outdoor education are an essential
                    part of every student’s life at our school. We achieve this
                    through daily nature experiences, composting, recycling and
                    a litter-free lunch policy.
                  </li> */}
                  <li>
                    Our students learn to work together in daily activities and
                    on larger projects. They strive for their personal best,
                    rather than compete against one another for the highest
                    grade in their class.
                  </li>
                </ul>
              </div>
              {/* <div className="bd-section-title-wrapper mb-35">
                <h2 className="bd-section-title mb-10 text-center">
                  What makes us unique?
                </h2>
                <span className="mb-10 d-inline-block">
                  We begin with a deep respect for the child as a unique
                  individual. We work from a deep concern for his or her social
                  and emotional development because there is far more to
                  education than mastering facts.
                </span>
                <span className="mb-10 d-inline-block">
                  Harbourview Montessori School is a warm and supportive
                  community of students, teachers and parents. You will not get
                  lost in the crowd here!
                </span>
                <span className="mb-10 d-inline-block">
                  We consciously teach our students to be kind, generous and
                  peaceful. We include this in our daily routines.
                </span>
                <span className="mb-10 d-inline-block">
                  Our classrooms are warm and inviting. They are comfortable and
                  exciting environments for learning about the world.
                </span>
                <span className="mb-10 d-inline-block">
                  Here, learning is not focused on rote drill and memorization.
                  Instead, our goal is to help children to develop a true
                  understanding of their work as well as to learn proper
                  research skills in order to find things out for themselves.
                </span>
              </div> */}
              {/* <div className="bd-promotion-list-2">
                <ul>
                  <li>
                    <div className="bd-promotion-icon">
                      <i className="flaticon-exclusive theme-bg-2"></i>
                    </div>
                    <span>Full Day Sessions</span>
                  </li>
                  <li>
                    <div className="bd-promotion-icon">
                      <i className="flaticon-whiteboard theme-bg"></i>
                    </div>
                    <span>Varied Classes</span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPromotion;

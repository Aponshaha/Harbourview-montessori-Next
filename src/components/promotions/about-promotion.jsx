import React from "react";
import Image from "next/image";
import promotion from "@assets/img/promotion/1.png";
import line from "@assets/img/shape/tripple-line.png";

const AboutPromotion = () => {
  return (
    <section className="bd-promotion-area-2 pt-120 pb-60 fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-promotion bd-promotion-2 mb-60 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-section-title-wrapper mb-35">
                <h2 className="bd-section-title mb-10">
                  Friendly atmosphere for all kids
                </h2>
                <span className="mb-10 d-inline-block">
                  Harbourview Montessori School is a warm and supportive
                  community of students, teachers and parents. You will not get
                  lost in the crowd here!
                </span>
                <p>
                  We begin with a deep respect for the child as a unique
                  individual. We work from a deep concern for his or her social
                  and emotional development because there is far more to
                  education than mastering facts.
                </p>
                <p>
                  We consciously teach our students to be kind, generous and
                  peaceful. We include this in our daily routines.
                </p>
              </div>
              <div className="bd-promotion-list-2">
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
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-promotion-thumb-wrapper mb-60 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-promotion-thumb">
                <div className="bd-promotion-thumb-mask p-relative">
                  <Image
                    src={promotion}
                    style={{ width: "100%", height: "100%" }}
                    alt="img not found"
                  />
                  <div className="panel-2 wow"></div>
                </div>
              </div>
              <div className="bd-promotion-shape d-none d-lg-block">
                <Image
                  src={line}
                  style={{ width: "100%", height: "100%" }}
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPromotion;

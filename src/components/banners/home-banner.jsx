import Link from "next/link";
import React from "react";
import joiningBg from "@assets/img/school/homepage_slider_torn_2.jpg";
import line from "@assets/img/shape/white-curved-line.png";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <section className="bd-joining-area pt-100 pb-100">
      <div
        className="bd-joining-bg"
        style={{ backgroundImage: `url(${joiningBg.src})` }}
      ></div>
      <div className="bd-joining-bg-overlay"></div>
      <div className="container">
        <div className="bd-joining">
          <div className="bd-joining-shape-wrapper d-none d-md-block">
            <div className="bd-joining-shape-1 p-absolute">
              <Image
                src={line}
                style={{ width: "100%", height: "100%" }}
                alt="img not found"
              />
            </div>
            <div className="bd-joining-shape-2 p-absolute">
              <Image
                src={line}
                style={{ width: "100%", height: "100%" }}
                alt="img not found"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div
                className="bd-joining-content text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-section-title-wrapper is-white mb-45">
                  <h2 className="bd-section-title mb-0">
                    Join Our New Session
                  </h2>
                  <p>
                    Harbourview Montessori School admits students of any
                    economic and social group, racial and ethnic heritage,
                    religious beliefs and family structure. Parents, teachers
                    and students are most at peace when the time has been taken
                    to ensure a good match between family and school. With that
                    in mind, the goal of our admissions process is to ensure
                    that parents become informed of our mission, principles and
                    practices while we learn about each family’s values and
                    reasons for choosing our school.
                  </p>
                </div>
                <Link href="/admission" className="bd-btn btn-white">
                  <span className="bd-btn-inner">
                    <span className="bd-btn-normal">Apply now</span>
                    <span className="bd-btn-hover">Apply now</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-joining-line"></div>
      <div className="bd-joining-line-2"></div>
    </section>
  );
};

export default HomeBanner;

import React from "react";
import Image from "next/image";
import program_img from "@assets/img/program/details-2.jpg";

const ClassDetailsWidgetTwo = ({ item }) => {
  return (
    <section className="bd-class-details-widget pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6  mb-50">
            <div
              className="bd-class-details-thumb p-relative wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <Image
                src={program_img}
                style={{ width: "100%", height: "100%" }}
                alt="img not found"
              />
              <div className="panel wow"></div>
            </div>
          </div>
          <div className="col-lg-6 mb-50">
            <div
              className="bd-class-details-widget-content theme-bg-6 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h3 className="bd-class-details-widget-title mb-20">
                More Information
              </h3>
              <p className="mb-25">{item.info}</p>
              <div className="bd-class-details-list">
                <ul>
                  <li>Sensorial</li>
                  <li>Practical life</li>
                  <li>Language</li>
                  <li>Mathematics</li>
                  <li>Geography</li>
                  <li>Physical and biological sciences</li>
                  <li>cultural subjects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassDetailsWidgetTwo;

import Link from "next/link";
import React from "react";
import Image from "next/image";
import program_img from "@assets/img/program/details-1.jpg";

const ClassDetailsBasic = ({ item }) => {
  if (item.isKeyArea) {
    return (
      <section className="bd-program-details-widget pb-70">
        <div className="container">
          {/* Key area*/}
          <div className="row">
            <div className="col-lg-6 mb-50">
              <div
                className="bd-class-details-widget-content theme-bg-6 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h3 className="bd-class-details-widget-title mb-20">
                  {item.keyAreaTitle}
                </h3>
                <p className="mb-25">{item.info}</p>
                <div className="bd-class-details-list">
                  <ul>
                    {item.keyArea.map((item) => (
                      <li key={item.id}>{item.value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6  mb-50">
              <div
                className="bd-class-details-thumb p-relative wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <Image
                  src={item.img2}
                  style={{ width: "100%", height: "520px" }}
                  alt="img not found"
                />
                <div className="panel wow"></div>
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className="row">
            <div className="col-lg-12 mb-50">
              <div
                className="bd-program-details-widget-content theme-bg-6 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h3 className="bd-program-details-widget-title mb-20">
                  {item.title}
                </h3>

                {item.details.map((item) => (
                  <p key={item.id} className="mb-25">
                    {item.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="bd-program-details-widget pb-70">
        <div className="container">
          {/* row 2 */}
          <div className="row">
            <div className="col-lg-12 mb-50">
              <div
                className="bd-program-details-widget-content theme-bg-6 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h3 className="bd-program-details-widget-title mb-20">
                  {item.title}
                </h3>
                <p className="mb-25">{item.description1}</p>
                <p className="mb-25">{item.description2}</p>
                <p className="mb-25">{item.description3}</p>

                {/* {item.details.map((item) => (
                  <p key={item.id} className="mb-25">
                    {item.description}
                  </p>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ClassDetailsBasic;

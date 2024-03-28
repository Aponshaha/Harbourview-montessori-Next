import React from "react";
import blog_data from "@data/blog-data";

import Link from "next/link";
import Image from "next/image";
import Pagination_Data from "@components/common/pagination";
// import dresscode_data from "@data/school-details-data";
// images
import img_1 from "@assets/img/school/food_prep.jpg";
import HMSchool from "@assets/img/school/student-amy.jpeg";

const dresscode_data = {
  id: 1,
  title: "Dress Code",
  header: "Our school has adopted a school dress code. ",
  schoolImg: img_1,
  descriptionOne:
    "The decision was based on the results of a community-wide school survey. Thank you to the many families who participated in this democratic process. This is going to help us to continue to create a feeling of belonging and pride in our school (not to mention ease the morning home routine!). Parents will be required to purchase the “top” portion of the school clothing from the school directly. The choices are as follows:",
  descriptionTwo:
    "Children must wear comfortable running shoes (or comparable shoes that allow children freedom of movement outdoors). Children may wear sandals in warm weather. No characters on shoes, bags or clothing, please. We are aiming to create an advertisement-free school. One day each month will be designated as a “dress down” day where children may choose to wear clothing other than school clothing. On these days, clothing may not have advertisements or characters. This will be marked on the children’s monthly calendars. Indoor shoes must be snug-fitting, comfortable and display no characters or advertising. Children will practice fire drills throughout the year and will wear indoor shoes outdoors during these drills.",
};

const DresscodeDetails = () => {
  return (
    <>
      <div className="container pt-120 pb-60">
        <div className="row">
          <div className="col-lg-12">
            <div className="bd-blog-details-wrapper mb-60">
              <div className="row">
                <div className="col-12">
                  <div
                    className="bd-blog-details mb-50 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <div className="bd-blog-details-thumb pb-180">
                      {dresscode_data.schoolImg && (
                        <Image
                          src={dresscode_data.schoolImg}
                          style={{ width: "100%", height: "600px" }}
                          alt="img not found"
                        />
                      )}
                    </div>
                    <div
                      className="bd-blog-details-meta wow fadeInUp pt-180"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    ></div>
                    <div
                      className="bd-blog-details-content wow fadeInUp pt-100"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="bd-blog-details-quote wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                      >
                        <h4 className=" mt-5 mb-15 pb-20">
                          {dresscode_data.header}
                        </h4>
                      </div>
                      {/* <h4 className="pb-20">Interview Process:</h4> */}
                      <p className="pb-20">{dresscode_data.descriptionOne}</p>
                      <div className="bd-promotion-list mb-50">
                        <ul>
                          <li>Polo shirt (short sleeve with collar)</li>
                          <li>T-shirt</li>
                          <li>Long sleeve cotton shirt (crew neck)</li>
                          <li>Sweatshirt (crew neck)</li>
                          <li>Fitness Fleece or Hooded Fleece</li>
                        </ul>
                      </div>
                      <p>{dresscode_data.descriptionTwo}</p>
                    </div>

                    {/* <NewsTopics /> */}
                    <div
                      className="bd-blog-topic wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <p>{dresscode_data.descriptionThree}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DresscodeDetails;

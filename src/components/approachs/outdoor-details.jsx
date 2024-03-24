import React from "react";
import blog_data from "@data/blog-data";

import Link from "next/link";
import Image from "next/image";
import Pagination_Data from "@components/common/pagination";
// import approach_data from "@data/school-details-data";
// images
import img_1 from "@assets/img/shop/1.1.png";
import HMSchool from "@assets/img/school/student-amy.jpeg";

const approach_data = {
  id: 1,
  title: "Nature-based and Nature-inspired Education",
  header: "We aim to instill in your children a love for the natural world.",
  schoolImg: img_1,
  descriptionOne:
    "Ecological studies and outdoor education are an essential part of every student’s life at our school. We achieve this through daily nature experiences and a nature-rich curriculum. Our beautiful grounds provide endless opportunities for connecting your children to the natural world. We allow plenty of time for unstructured outdoor play. Does your child love running through the woods, building forts, digging in the dirt or searching for bugs? We have over an acre of wild, wooded forest behind our school, enclosed by a 6′ fence to ensure safety as your children get in touch with their innate sense of adventure and exploration!",
  descriptionTwo:
    "For our youngest children, we have created a beautiful Peace Garden, surrounded by a 4′ fence for safety. We planted beautiful trees around the perimeter and it is lovingly landscaped for the children’s pleasure. They are free to climb the play structure, glide down the slide, dig in the gravel, run on the grass, play soccer or tag, or sit under a tree and have a conversation with a friend. Our Peace Pole is planted in the middle of a circular garden, representing the compass that is our school symbol.",
  descriptionThree:
    "Our Elementary students also use the nearby provincial park, Petersfield Park, as an extension of our school grounds. We regularly walk to the park for nature studies, creative writing or just to breathe in the fresh air and enjoy the natural surroundings.",
  descriptionFour:
    "At Harbourview Montessori School, we are committed to getting (and staying) in touch with the natural world. The children play and explore outside every day. We take advantage of the beauty of all seasons!",
  descriptionFive: "",
  descriptionSix: "",
};

const OutdoorApproachDetails = () => {
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
                      {approach_data.schoolImg && (
                        <Image
                          src={approach_data.schoolImg}
                          style={{ width: "100%", height: "400px" }}
                          alt="img not found"
                        />
                      )}
                    </div>
                    <div
                      className="bd-blog-details-meta wow fadeInUp pt-120"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    ></div>
                    <div
                      className="bd-blog-details-content wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="bd-blog-details-quote wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                      >
                        <h4 className=" mt-5 mb-15 pb-20">
                          {approach_data.header}
                        </h4>
                      </div>
                      {/* <h4 className="pb-20">Interview Process:</h4> */}
                      <p>{approach_data.descriptionOne}</p>
                      <p>{approach_data.descriptionTwo}</p>
                      <p>{approach_data.descriptionThree}</p>
                      <p>{approach_data.descriptionFour}</p>
                      <p>{approach_data.descriptionFive}</p>
                      <p>{approach_data.descriptionSix}</p>
                    </div>

                    {/* <NewsTopics /> */}
                    <div
                      className="bd-blog-topic wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <p>{approach_data.descriptionThree}</p>
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

export default OutdoorApproachDetails;

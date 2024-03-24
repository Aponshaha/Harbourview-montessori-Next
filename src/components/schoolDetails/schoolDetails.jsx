import React from "react";
import blog_data from "@data/blog-data";

import Link from "next/link";
import Image from "next/image";
import Pagination_Data from "@components/common/pagination";
// import school_data from "@data/school-details-data";
// images
import img_1 from "@assets/img/shop/1.1.png";
import HMSchool from "@assets/img/school/HMSchool.jpeg";

const school_data = {
  id: 1,
  title: "Our School",
  header:
    "Harbourview Montessori is a school that grew from a place of great love and respect for children. It was the brainchild of the founder, teacher and mom, Michelle Morrison. Here is how she describes the evolution of the school.",
  schoolImg: HMSchool,
  descriptionOne:
    "Harbourview Montessori School was born from a dream. This dream was to create the most beautiful, calm and enriching environment for young children. It was to create a place in which children would be supported in their development, learn according to their individual learning styles and temperaments, and come to know that they have unique gifts to be developed and realized. Maintaining a cheerful, accepting and loving environment would be the atmosphere essential to the development of each child’s unique gifts. For too long, the happiness factor had been left out of the education equation; it was time to make this a priority. Almost two decades ago, Harbourview Montessori School began as Harbourview Montessori Children’s House with six 3-year old children. The following year, the school expanded to 20 children; the third year, 24. We had reached our capacity.",
  descriptionTwo:
    "Elementary and, eventually, Middle School. Today, we have 4 beautiful classrooms, over 2 acres of wild and landscaped grounds, and a staff that is dedicated to our goal of nurturing, inspiring and supporting the social, emotional, physical and intellectual development of the children in our care. As founder, I feel a deep sense of satisfaction when I walk down our hallway, hearing and seeing signs of joyful learning. I feel a real sense of contentment when we hear, over and over again, parents praising us for our peaceful atmosphere, our open and professional communication, and the rich and varied curriculum we offer to our students. Finally, I feel a sense of humility when I realize that, together, we are helping to raise children to be kind, loving, generous and self-actualized individuals who will see and create beauty in our world. I am happy to say that, after almost 20 years, we are as strong in our core beliefs as we were in the beginning. Thank you to the incredible support from our staff, parents and, most importantly, our students.",
  descriptionThree:
    "We do hope that you enjoy the information contained on this website. For further information or to book a tour, phone our office (902) 539-8884 and we will be happy to help you!",
};

const SchoolDetails = () => {
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
                    <div className="bd-blog-details-thumb pb-60">
                      {school_data.schoolImg && (
                        <Image
                          src={school_data.schoolImg}
                          style={{ width: "100%", height: "100%" }}
                          alt="img not found"
                        />
                      )}
                    </div>
                    <div
                      className="bd-blog-details-meta wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    ></div>
                    <div
                      className="bd-blog-details-content wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <h3 className="bd-blog-details-title mt-5 mb-15 pb-20">
                        {school_data.header}
                      </h3>
                      <p>{school_data.descriptionOne}</p>
                      <p>{school_data.descriptionTwo}</p>
                    </div>
                    <div
                      className="bd-blog-details-quote wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <blockquote className="bd-blog-quote">
                        <div className="bd-blog-quote-icon">
                          <i className="flaticon-quote"></i>
                        </div>
                        <div className="bd-blog-quote-content">
                          <p>
                            Always keep a positive mindset, it will improve your
                            outlook on the world.
                          </p>
                          <span>Roald Dahl</span>
                        </div>
                      </blockquote>
                    </div>

                    {/* <NewsTopics /> */}
                    <div
                      className="bd-blog-topic wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <p>{school_data.descriptionThree}</p>
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

export default SchoolDetails;

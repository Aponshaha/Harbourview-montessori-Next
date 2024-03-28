import React from "react";
import blog_data from "@data/blog-data";

import Link from "next/link";
import Image from "next/image";
import Pagination_Data from "@components/common/pagination";
// import approach_data from "@data/school-details-data";
// images
import img_1 from "@assets/img/school/homepage_slider_torn_2.jpg";
import HMSchool from "@assets/img/school/student-amy.jpeg";

const approach_data = {
  id: 1,
  title: "The Montessori Approach",
  header:
    "To grasp the essence of Montessori education, just step inside a classroom",
  schoolImg: img_1,
  descriptionOne:
    "Beautiful, inviting, and thoughtfully arranged, the room embodies each element of Maria Montessori’s revolutionary approach. Natural lighting, soft colors, and uncluttered spaces set the stage for activity that is focused and calm. Learning materials are displayed on accessible shelves, fostering independence as students go about their work. Everything is where it is supposed to be, conveying a sense of harmony and order that both comforts and inspires. In this safe and empowering environment, students find joy in learning.",
  descriptionTwo:
    "The design and flow of the Montessori classroom create a learning environment that accommodates choice. There are spaces suited to group activity, and areas where a student can settle in alone. Parts of the room are open and spacious, allowing a preschooler to lay out strands of beads for counting, or an elementary student to ponder a 10-foot-long Timeline of Life. You won’t find the customary rows of school desks; children work at tables or on the floor, rolling out mats on which to work and define their work space. Nor are you likely to find walls papered with brightly colored images of cartoons and syndicated characters. Rather, you might see posters from a local museum, or framed photographs or paintings created by the students themselves.",
  descriptionThree:
    "There are well-defined spaces for each part of the curriculum, such as Language Arts, Math, and Culture. Each of these areas features shelves or display tables with a variety of inviting materials from which students can choose. Many classrooms have an area devoted to peace and reflection: a quiet corner or table with well-chosen items—a vase of daisies; a goldfish bowl—to lead a child to meditative thought. And always there are places to curl up with books, where a student can read or be read to. Each classroom is uniquely suited to the needs of its students.",
  descriptionFour:
    "Preschool rooms feature low sinks, chairs, and tables; a reading corner with a small couch (or comfy floor cushions); reachable shelves; and child-sized kitchen tools—elements that allow independence and help develop small motor skills. In upper-level classrooms you’re likely to see large tables for group work, computers, interactive whiteboards, and areas for science labs. Above all, each classroom is warm, well-organized, and inviting, with couches, rugs, and flowers to help children and youth feel calm and at home.",
  descriptionFive:
    "A hallmark of Montessori education is its hands-on approach to learning. Students work with specially designed materials, manipulating and investigating until they master the lesson inside. Beautifully crafted and begging to be touched, Montessori’s distinctive learning materials are displayed on open, easily accessible shelves. They are arranged (left to right, as we read in Western languages) in order of their sequence in the curriculum, from the simplest to the most complex. Each material teaches a single skill or concept at a time—for example, the various “dressing frames” help toddlers learn to button, zip, and tie; 3-dimensional grammar symbols help elementary students analyze sentence structure and style. And, built into many of the materials is a mechanism (“control of error”) for providing the student with some way of assessing her progress and correcting her mistakes, independent of the teacher.",
  descriptionSix:
    "The concrete materials provide passages to abstraction, and introduce concepts that become increasingly complex. As students progress, the teacher replaces some materials with others, ensuring that the level of challenge continues to meets their needs. The Montessori teacher, child, and environment may be seen as a learning triangle, with each element inextricably linked, and a vital part of the whole. The teacher thoughtfully prepares a classroom environment with materials and activities that entice her students to learn. She may guide her students to new lessons and challenges, but it is the child’s interaction with what the environment has to offer that enables learning to occur.",
};

const ApproachDetails = () => {
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
                          style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "contain",
                          }}
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

export default ApproachDetails;

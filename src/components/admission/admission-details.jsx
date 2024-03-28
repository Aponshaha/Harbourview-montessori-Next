import React from "react";
import blog_data from "@data/blog-data";

import Link from "next/link";
import Image from "next/image";
import Pagination_Data from "@components/common/pagination";
// import admission_data from "@data/school-details-data";
// images
import img_1 from "@assets/img/school/camping.jpg";
import HMSchool from "@assets/img/school/student-amy.jpeg";

const admission_data = {
  id: 1,
  title: "Harbourview Montessori School",
  header:
    "Harbourview Montessori School admits students of any economic and social group, racial and ethnic heritage, religious beliefs and family structure. Parents, teachers and students are most at peace when the time has been taken to ensure a good match between family and school. With that in mind, the goal of our admissions process is to ensure that parents become informed of our mission, principles and practices while we learn about each family’s values and reasons for choosing our school.",
  schoolImg: img_1,
  descriptionOne:
    "We ask interested parents to schedule an initial tour and brief informational meeting. Call for an appointment (539-8884). A teacher and/or Admissions staff will be present during the meeting to answer your questions. If parents are interested after the initial meeting, a classroom observation will typically be scheduled (this depends on the time of year). Parents are asked to observe in the appropriate classroom for a period of 30-40 minutes. A second meeting will be scheduled after the observation.The second meeting will be to determine if our school is a good match for the family.",
  descriptionTwo:
    "If you have applied for a Children’s House position, your child will be invited to spend some time (usually 20-30 min) in the classroom with one of our Children’s House teachers. This short interaction will help to determine your child’s readiness. If you have applied for the Elementary program, your child may be invited to spend a day in the appropriate elementary classroom. The parent is not expected to attend on this day as the child will remain for the entire school day.",
  descriptionThree:
    "Parents of each Elementary level candidate will be required to sign a record release form. This authorizes your child’s present school to send us a copy of school records. Admissions decisions are made by administration and teaching staff. These decisions are based on an evaluation of the child’s school visit, school records and the needs of the existing classroom with regard to balance of age, gender and ethnic diversity.",
  descriptionFour:
    "If a position is offered to your child, a non-refundable registration fee of $200 will be due at the time of acceptance. This holding fee is to ensure that parents have carefully considered their responsibility in committing to attend after acceptance has been granted. Upon receipt of the registration fee, parents will be contractually obligated for the year’s tuition fee. If a place is not immediately available, you may wish to be placed on our waiting list. You will receive notification of waiting list status by the end of June prior to school commencement. If it is our judgment that your child would have a difficult time in a Montessori environment, we will inform you immediately after the interview. We will endeavour to accept families who are committing to a minimum of three years, noting that we follow a three-year curriculum at each level.",
  descriptionFive:
    "Harbourview Montessori School offers a full and complete education beginning at age three and continuing to age twelve. If a family is not committed to enrolling for the complete program, they will be offered a space only after spaces have been offered to all long-term families that have applied. As well, it is noted that children who do not attend for the full program will not get the full advantage of a Montessori education. Please do not hesitate to contact us if you have any questions about the admissions procedure. We are here to help you in the journey.",
};

const AdmissionDetails = () => {
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
                      {admission_data.schoolImg && (
                        <Image
                          src={admission_data.schoolImg}
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
                          {admission_data.header}
                        </h4>
                      </div>
                      <h4 className="pb-20">Interview Process:</h4>
                      <p>{admission_data.descriptionOne}</p>
                      <p>{admission_data.descriptionTwo}</p>
                      <p>{admission_data.descriptionThree}</p>
                      <p>{admission_data.descriptionFour}</p>
                      <p>{admission_data.descriptionFive}</p>
                    </div>

                    {/* <NewsTopics /> */}
                    <div
                      className="bd-blog-topic wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <p>{admission_data.descriptionThree}</p>
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

export default AdmissionDetails;

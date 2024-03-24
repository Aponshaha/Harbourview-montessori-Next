import React from "react";
import Maria_Montessori from "@assets/img/drmaria/Maria_Montessori.jpeg";
import signature from "@assets/img/drmaria/signature.jpg";

import trippleLine from "@assets/img/shape/tripple-line.png";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="bd-faq-area pt-120 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="mb-60">
                <div className="col-lg-12">
                  <div
                    className="bd-section-title-wrapper text-center mb-55 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".2s"
                  >
                    <h2 className="bd-section-title mb-0">About Us</h2>
                  </div>
                </div>

                <div
                  className="bd-faq wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <div
                    className="bd-teacher-widget theme-bg-6 wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <div className="bd-teacher-widget-content">
                      <p>
                        <h4 className="text-center">
                          Harbourview Montessori was born from a dream.
                        </h4>
                        This dream was to create the most beautiful, calm and
                        enriching environment for young children. It was to
                        create a place in which children would be supported in
                        their development, learn according to their individual
                        learning styles and temperaments, and come to know that
                        they have unique gifts to be developed and realized.
                        Maintaining a cheerful, accepting and loving environment
                        would be the atmosphere essential to the development of
                        each child’s unique gifts. For too long, the happiness
                        factor had been left out of the education equation; it
                        was time to make this a priority.
                      </p>

                      <p>
                        It was the brainchild of the founder, teacher and mom,
                        Michelle Morrison. Here is how she describes the
                        evolution of the school.
                      </p>

                      <p>
                        Almost two decades ago, Harbourview Montessori School
                        began as Harbourview Montessori Children’s House with
                        six 3-year old children. The following year, the school
                        expanded to 20 children; the third year, 24. We had
                        reached our capacity. After our 6th year, we purchased
                        the old Westmount School, fully renovated it and
                        expanded to include Elementary and, eventually, Middle
                        School. Today, we have 4 beautiful classrooms, over 2
                        acres of wild and landscaped grounds, and a staff that
                        is dedicated to our goal of nurturing, inspiring and
                        supporting the social, emotional, physical and
                        intellectual development of the children in our care.
                      </p>
                      <h5 className=" bd-section-title-wrapper text-center">
                        Harbourview Montessori is a school that grew from a
                        place of great love and respect for children.
                      </h5>
                      <p>
                        As teachers, we feel a deep sense of satisfaction when
                        we walk down the hallway, hearing and seeing signs of
                        joyful learning. We feel a real sense of contentment
                        when we hear, over and over again, parents praising us
                        for our peaceful atmosphere, our open and professional
                        communication, and the rich and varied curriculum we
                        offer to our students. Finally, we feel a sense of
                        humility when we realize that, together, we are helping
                        to raise children to be kind, loving, intelligent and
                        self-actualized individuals who will see and create
                        beauty in our world. We are happy to say that, after
                        almost 20 years, we are as strong in our core beliefs as
                        we were in the beginning.
                      </p>

                      <div className="bd-feedback-content text-center">
                        <p className="mb-25">
                          “The education of a child is not for preparing him/her
                          for school but for life!”
                        </p>
                        <h5 className="bd-feedback-author">
                          -Maria Montessori
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;

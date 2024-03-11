import React from "react";
import SidebarNews from "../sidebar-news";
import BlogReplyForm from "@components/forms/blog-reply-form";
import NewsComments from "./news-comments";
import NewsTopics from "./news-topics";
import Link from "next/link";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import Image from "next/image";

const SingleNewsArea = ({ item }) => {
  return (
    <>
      <section className="bd-blog-details-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="bd-blog-details-wrapper mb-60">
              <div className="row">
                <div className="col-12">
                  <div
                    className="bd-blog-details mb-50 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="bd-blog-details-content wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <h3 className="bd-blog-details-title mt-5 mb-15">
                        {item.title}
                      </h3>
                      <p>
                        Harbourview Montessori was born from a dream. This dream
                        was to create the most beautiful, calm and enriching
                        environment for young children. It was to create a place
                        in which children would be supported in their
                        development, learn according to their individual
                        learning styles and temperaments, and come to know that
                        they have unique gifts to be developed and realized.
                      </p>
                      <p>
                        Maintaining a cheerful, accepting and loving environment
                        would be the atmosphere essential to the development of
                        each child’s unique gifts. For too long, the happiness
                        factor had been left out of the education equation; it
                        was time to make this a priority. More than two decades
                        ago, Harbourview Montessori School began as Harbourview
                        Montessori Children’s House with six 3-year old
                        children. The following year, the school expanded to 20
                        children; the third year, 24. We had reached our
                        capacity.
                      </p>
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
                            The education of a child is not for preparing
                            him/her for school but for life!
                          </p>
                          <span>Maria Montessori</span>
                        </div>
                      </blockquote>
                    </div>
                    <p>
                      After our 6th year, we purchased the old Westmount School,
                      fully renovated it and expanded to include Elementary and,
                      eventually, Middle School. Today, we have 4 beautiful
                      classrooms, over 2 acres of wild and landscaped grounds,
                      and a staff that is dedicated to our goal of nurturing,
                      inspiring and supporting the social, emotional, physical
                      and intellectual development of the children in our care.
                      As founder, I feel a deep sense of satisfaction when I
                      walk down our hallway, hearing and seeing signs of joyful
                      learning in our little school. I feel a real sense of
                      contentment when we hear, over and over again, parents
                      praising us for our peaceful atmosphere, our open and
                      professional communication, and the rich and varied
                      curriculum we offer to our students. Finally, I feel a
                      sense of humility when I realize that, together, we are
                      helping to raise children to be kind, loving, generous and
                      self-actualized individuals who will see and create beauty
                      in our world. I am happy to say that, after over 20 years,
                      we are as strong in our core beliefs as we were in the
                      beginning. Thank you to the incredible support from our
                      staff, parents and, most importantly, our students.{" "}
                    </p>
                    {/* <NewsTopics /> */}
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

export default SingleNewsArea;

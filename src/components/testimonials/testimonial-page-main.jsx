import React from "react";
import Image from "next/image";
import img1 from "@assets/img/testimonials/1.png";
import img2 from "@assets/img/testimonials/2.png";
import img3 from "@assets/img/testimonials/3.png";
import img4 from "@assets/img/testimonials/4.png";
import img5 from "@assets/img/testimonials/5.png";
import img6 from "@assets/img/testimonials/6.png";

const testimonial_data = [
  {
    id: 1,
    review:
      "We couldn’t ask for a better early childhood education for our daughter. She started when she was three and we have been consistently impressed with the facilities, curriculum and teacher. So much thought goes into structuring the day, activities, and year. We know she is never just passing time while there. Couldn’t recommend more highly.",
    author: "Norma J. Johnston",
    authorImg: img1,
    delay: ".4s",
    ratings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "fas fa-star" },
    ],
  },
  {
    id: 2,
    review:
      "We are thrilled that we chose this program for our child beginning at 3 years old. The Montessori philosophy that supports a child’s self-direction and intrinsic motivation to learn has been a very positive experience for our child and family. Our child LOVES going to school everyday. The teachers are incredibly knowledgeable, skilled and attentive to each child’s individual needs. We appreciate the cultural diversity that is evident and respected in the Harbourview community.",
    author: "Hillary H. Morse",
    authorImg: img2,
    delay: ".5s",
    ratings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "fas fa-star" },
    ],
  },
  {
    id: 3,
    review:
      "We love Harbourview Montessori. Both of our children started at three and it has been an all-around wonderful experience. The teachers and administrators are incredibly thoughtful in all that they do and we know that even from preschool age our children have been getting a peace-centered, intentional, open, curiosity-provoking education. Everything about this school feels different than traditional schools in the very best way - you can tell that all of the staff always see the inherent goodness and worth in all of the children.",
    author: "Robert M. Allen",
    authorImg: img3,
    delay: ".6s",
    ratings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "far fa-star" },
    ],
  },
  {
    id: 4,
    review:
      "My son is eight years old and in his first year at Harbourview Montessori. Our son has never been happier in school. Like many children within our community the local public schooling was failing to provide adequate education, security and additional help when needed. With the environment, teaching staff, professionalism and overall positive life style at Harbourview Montessori our son is finally receiving the education he deserves. The staff at Harbourview Montessori is absolutely incredible and are easily accessible when needed. Thank you all for your amazing work!",
    author: "John N. McGee",
    authorImg: img4,
    delay: ".7s",
    ratings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "fas fa-star" },
    ],
  },
  {
    id: 5,
    review:
      "This is the first year that we have enrolled one of our sons at Harbourview Montessori. He would have been a grade five student this year in public school, but there was much difficulty dealing with the school district due to school closures, curriculum, and general day-to-day communication. We needed to look for another option for his education. We visited the school in the Spring a number of times - meeting with the Principal, teachers, and office staff. Our son participated in the classroom setting numerous times so that we could all understand how the Montessori model works.",
    author: "Ines R. Duong",
    authorImg: img5,
    delay: ".8s",
    ratings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "far fa-star" },
    ],
  },
  {
    id: 6,
    review:
      "Our son participated in the classroom setting numerous times so that we could all understand how the Montessori model works. We were welcomed with open arms (literally). Were we skeptical at first of this system? Sure. But that's because we weren't used to this new model of education. Were we pleasantly surprised how this was the perfect fit for our child and how he learns? Absolutely! Our oldest son attends public school and it is the appropriate learning environment for him. Montessori is the perfect learning environment for our youngest and we all couldn't be HAPPIER that he is EXCITED to learn. He is ENGAGED in experiencing new things. He is more RESPONSIBLE for his actions.",
    author: "Lenora C. Rivera",
    authorImg: img6,
    delay: ".9s",
    ratings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "fas fa-star" },
    ],
  },
];

const TestimonialPageMain = () => {
  return (
    <section className="bd-testimonial-area pt-120 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="bd-section-title-wrapper z-index-1 p-relative text-center mb-55 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <h2 className="bd-section-title mb-0">Parents Says</h2>
              <p>
                With the help of teachers and the environment as the third
                teacher, students
                <br /> have opportunities to confidently take risks.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {testimonial_data.map((item) => (
            <div className="col-xl-4 col-md-6" key={item.id}>
              <div
                className="bd-testimonial-3 mb-40 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay={item.delay}
              >
                <div className="bd-testimonial-rating mb-30">
                  {item.ratings.map((rating) => (
                    <a href="#" key={rating.id}>
                      <i className={rating.icon}></i>
                    </a>
                  ))}
                </div>
                <div className="bd-testimonial-content-2 mb-35">
                  <p>{item.review}</p>
                </div>
                <div className="bd-testimonial-avatar d-flex align-items-center">
                  <div className="bd-testimonial-avatar-thumb">
                    <Image
                      src={item.authorImg}
                      style={{ width: "100%", height: "100%" }}
                      alt="img not found"
                    />
                  </div>
                  <h6 className="bd-testimonial-avatar-title-2 mb-0">
                    {item.author}
                  </h6>
                  <div className="bd-testimonial-quote d-none d-sm-block clr-2">
                    <i className="flaticon-quote"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialPageMain;

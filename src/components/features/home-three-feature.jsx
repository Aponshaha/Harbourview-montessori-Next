import React from "react";
import Image from "next/image";
import shape from "@assets/img/shape/wave-section-break.png";

const features = [
  {
    id: 1,
    title: "Exclusive",
    teaser: "When it comes to success in the classroom.",
    iconStyle: "icon-1",
    icon: "flaticon-exclusive",
  },
  {
    id: 2,
    title: "Harbourview community",
    teaser:
      "Harbourview Montessori School is a warm and supportive community of students, teachers and parents.  You will not get lost in the crowd here",
    iconStyle: "icon-2",
    icon: "flaticon-humanitarian-help",
  },
  {
    id: 3,
    title: "Confortable environment",
    teaser:
      "Our classrooms are warm and inviting.  They are comfortable and exciting environments for learning about the world.",
    iconStyle: "icon-3",
    icon: "flaticon-like-1",
  },
  {
    id: 4,
    title: "Independent Learning",
    teaser:
      "Here, learning is not focused on rote drill and memorization.  Instead, our goal is to help children to develop a true understanding of their work as well as to learn proper research skills in order to find things out for themselves.",
    iconStyle: "icon-4",
    icon: "flaticon-delivery",
  },
];

const HomeThreeFeature = ({ wave }) => {
  return (
    <div className="bd-feature-area p-relative theme-bg pt-120 pb-120">
      {wave && (
        <div className="bd-feature-bottom-shape">
          <Image
            src={shape}
            style={{ width: "100%", height: "100%" }}
            alt="img not found"
          />
        </div>
      )}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div
              className="bd-section-title-wrapper is-white text-center mb-55 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h2 className="bd-section-title mb-0">Why Harbourview </h2>
              <p>
                View classes by age, program, or subject. Check out upcoming
                camps
                <br /> and special events too!
              </p>
            </div>
          </div>
        </div>
        <div
          className="bd-feature-wrapper wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".4s"
        >
          <div className="row bd-section-title-wrapper is-white text-center mb-55 wow fadeInUps">
            {/* <ul className="feature">
                {features.map((item) => (
                  <li className="feature-item" key={item.id}>
                    <div className="bd-feature">
                      <div className="bd-feature-content">
                        <div className={`bd-feature-icon ${item.iconStyle}`}>
                          <i className={item.icon}></i>
                        </div>
                        <h4 className="bd-feature-title">{item.title}</h4>
                        <p>{item.teaser}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul> */}
            <p className="bd-section-title-wrapper is-white text-center mb-55 wow fadeInUp">
              In January 2007, Montessori schools worldwide celebrated 100 years
              of Montessori education: an education of the heart and mind. How
              will your child benefit from this proven method of education? What
              will your child gain from being a member of our school community?
              At Harbourview Montessori School, we recognize the innate
              potentialities of the human mind. When we see your child, we see a
              world of possibilities. Children are radiant beings who have a
              deep love of learning. As parents and educators, we believe that
              it is our duty to nurture this love of learning in a supportive
              and intellectually stimulating environment. A great part of the
              beauty of daily life at our school is the fact that children are
              able to take life at a slower pace. For many parents, life is a
              series of races from one responsibility to the next. Time is
              precious and often lacking. At our school, we aim to create an
              oasis for our children where they do not feel the rush of modern
              life. Every child deserves to slow down and create the wonderful
              memories of these early years. Step into our classrooms and you
              will instantly feel an atmosphere of warmth and respect. Observe
              our children at work and you will see happy, self-directed
              learners. Talk to our children and you will hear about their
              experiences of collaboration, understanding and cultural
              awareness. We gently stress the importance of generosity, respect,
              kindness and a strong work ethic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThreeFeature;

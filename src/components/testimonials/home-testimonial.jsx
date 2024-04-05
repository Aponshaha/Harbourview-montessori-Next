import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";
import React from "react";
import Image from "next/image";
import { Scrollbar, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import shape from "@assets/img/bg/bg-shape.jpg";
import bg from "@assets/img/school/jaden.jpg";
import img1 from "@assets/img/testimonials/1.png";
import img2 from "@assets/img/testimonials/3.png";
import img3 from "@assets/img/testimonials/2.png";

const testimonial_data = [
  {
    id: 1,
    review:
      "My oldest daughter was in the very first class when Harbourview Montessori School opened, and, 17 years later, I still find myself making the drive every morning to drop off my 9 year old to this amazing school. The experiences my 3 children have had through Harbourview Montessori  are ones that have had lasting effects on their lives and careers. Children are told they can do and be anything and are encouraged to follow their dreams with guidance from staff and fellow students. The education my children have received at this school has helped them become independent, confident people who are as comfortable in a room full of UN delegates as they are reading stories aloud to the Children’s House students. Harbourview Montessori offers an education like no other and I am forever grateful for the time we have spent there!",
    author: "Elaine (Proud mom of 2 HarbourviewMontessori School graduates)",
    authorImg: img1,
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
      "My son finished grade nine and I must say, without a doubt, this is the best school, with the best teachers anyone could ever hope to have for their child. We discovered their after-school reading program part way through his primary year at public school and after a wonderful, up-lifting experience, I immediately enrolled him for the upcoming year. He spent nine years at Harbourview Montessori. It was the best environment imaginable. What a way to learn! The peaceful, respectful environment combined with the caring, professional teachers are second-to-none! I attribute much of who my son turned out to be to be a direct result of this school and his teachers.",
    author: "Paula (proud mom of a Harbourview Montessori School graduate)",
    authorImg: img2,
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
      "I can best describe my experience with this school as restoring my faith in humanity and education! We transferred our son to Harbourview Montessori in grade 1 because he was bored. We felt he was being held behind. After a few months in his new school, his love of learning returned full force! Seeing him come out of school at the end of the day with a big grin made us very happy parents. The classrooms are so well designed and the teachers are kind, knowledgeable and attentive. We couldn’t be happier!",
    author: "Allison and John",
    authorImg: img3,
    ratings: [
      { id: 1, icon: "fas fa-star" },
      { id: 2, icon: "fas fa-star" },
      { id: 3, icon: "fas fa-star" },
      { id: 4, icon: "fas fa-star" },
      { id: 5, icon: "far fa-star" },
    ],
  },
];

const HomeTestimonial = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <section className="bd-testimonial-area theme-bg">
        <div
          className="bd-testimonial-video"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className="bd-testimonial-video-btn bd-pulse-btn">
            <button
              type="button"
              className="popup-video"
              onClick={() => setIsVideoOpen(true)}
            >
              <i className="flaticon-play-button"></i>
            </button>
          </div>
        </div>
        <div
          className="bd-testimonial-bg d-none d-lg-block"
          style={{ backgroundImage: `url(${shape.src})` }}
        ></div>
        <div className="container">
          <div className="row justify-content-end align-items-center">
            <div className="col-lg-6">
              <div className="bd-testimonial-wrapper pt-120 pb-120">
                <div
                  className="bd-section-title-wrapper is-white mb-20 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <h2 className="bd-section-title mb-0">Parent's Say</h2>
                </div>
                <div
                  className="bd-testimonial-active wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                >
                  <div>
                    <Swiper
                      modules={[Scrollbar, A11y, Autoplay, Pagination]}
                      spaceBetween={30}
                      autoplaydisableoninteraction={"false"}
                      loop={false}
                      observeParents={true}
                      observer={true}
                      speed={1000}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                      }}
                      pagination={{
                        clickable: true,
                        el: ".bd-testimonial-pagination",
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                      }}
                    >
                      {testimonial_data.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="bd-testimonial">
                              <div className="bd-testimonial-rating mb-30">
                                {item.ratings.map((rating) => (
                                  <a href="#" key={rating.id}>
                                    <i className={rating.icon}></i>
                                  </a>
                                ))}
                              </div>
                              <div className="bd-testimonial-content mb-55">
                                <p>{item.review}</p>
                              </div>
                              <div className="bd-testimonial-avatar d-flex align-items-center">
                                {/* <div className="bd-testimonial-avatar-thumb">
                                  <Image
                                    src={item.authorImg}
                                    style={{ width: "100%", height: "100%" }}
                                    alt="img not found"
                                  />
                                </div> */}
                                <h6 className="bd-testimonial-avatar-title mb-0">
                                  {item.author}
                                </h6>
                                <div className="bd-testimonial-quote">
                                  <i className="flaticon-quote"></i>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
                <div
                  className="bd-testimonial-pagination bd-dots-pagination justify-content-start wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"go7QYaQR494"}
      />
      {/* video modal end */}
    </>
  );
};

export default HomeTestimonial;

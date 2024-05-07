import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import React from "react";
import Image from "next/image";
import program_2 from "@assets/img/school/programs/crazy_hair_day.jpg";
import program_3 from "@assets/img/school/programs/drawing.jpg";
import { Scrollbar, A11y, Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ProgramCat from "./program-cat";
import ClassDetailsWidget from "@components/classes/class-details-page/class-details-widget";
import ClassDetailsWidgetTwo from "@components/classes/class-details-page/class-details-widget-two";
import LearningSchedule from "./learning-schedule";
import ClassDetailsBasic from "@components/classes/class-details-page/class-details-basic";

const programheader =
  "In Montessori Schools, children are grouped according to developmental stages rather than being separated on the basis of age/grade. In this way, we create little communities of learners who help one another to learn and grow. We operate an after school program for working parents and for parents who need a little extra time to get things done.";

const ProgramDetailsArea = ({ item }) => {
  return (
    <>
      <Breadcrumb title="Program Details" subTitle="Program Details" />
      <section className="bd-program-details-widget pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 mb-50">
              <div
                className="bd-program-details-slider p-relative wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-program-details-active">
                  <div className="bd-h-full">
                    <Swiper
                      modules={[
                        Scrollbar,
                        A11y,
                        Autoplay,
                        EffectFade,
                        Navigation,
                      ]}
                      effect="fade"
                      spaceBetween={0}
                      autoplaydisableoninteraction={"false"}
                      loop={false}
                      observeParents={true}
                      observer={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                      }}
                      navigation={{
                        clickable: true,
                        nextEl: ".bd-program-details-next",
                        prevEl: ".bd-program-details-prev",
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="bd-program-details-slider-thumb">
                          {item.img && (
                            <Image
                              src={item.img}
                              style={{ width: "100%", height: "550px" }}
                              alt="img not found"
                            />
                          )}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="bd-program-details-slider-thumb">
                          <Image
                            src={program_2}
                            style={{ width: "100%", height: "550px" }}
                            alt="img not found"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="bd-program-details-slider-thumb">
                          <Image
                            src={program_3}
                            style={{ width: "100%", height: "550px" }}
                            alt="img not found"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="bd-program-details-navigation mb-15 d-none d-sm-flex">
                  <button className="bd-program-details-next">
                    <i className="fa-regular fa-angle-right"></i>
                  </button>
                  <button className="bd-program-details-prev">
                    <i className="fa-regular fa-angle-left"></i>
                  </button>
                </div>
                <div className="panel wow"></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 mb-50">
              <div
                className="bd-program-details-widget-content theme-bg-6 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-program-details-cat mb-50">
                  <h5>{item.title}</h5>
                  <p>{item.subTitle}</p>
                  <button
                    type="button"
                    disabled
                    class="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="This top tooltip is themed via CSS variables."
                  >
                    {item.days}
                  </button>
                  <p></p>
                  <button
                    type="button"
                    disabled
                    class="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="This top tooltip is themed via CSS variables."
                  >
                    {item.age}
                  </button>
                </div>

                <h4 className="mb-25">{item.description}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ClassDetailsWidget item={item} /> */}
      <ClassDetailsBasic item={item} />
      {/* <ClassDetailsWidgetTwo item={item} /> */}
      {/* <LearningSchedule /> */}
      <ProgramCat item={item} />
    </>
  );
};

export default ProgramDetailsArea;

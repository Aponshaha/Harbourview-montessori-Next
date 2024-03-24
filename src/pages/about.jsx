import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HomePromotion from "@components/promotions/home-promotion";
import promoImgTwo from "@assets/img/promotion/2.png";
import HomeThreeFeature from "@components/features/home-three-feature";

import AboutPromotion from "@components/promotions/about-promotion";
import AboutTestimonial from "@components/testimonials/about-testimonial";
import HomeTeacher from "@components/teachers/home-teacher";
import AboutFact from "@components/facts/about-fact";

import NewsDetailsArea from "@components/blogs/news-details-page/news-details-area";
import blog_data from "@data/blog-data";
import SingleNewsArea from "@components/blogs/news-details-page/single-news-post";
import AboutStory from "@components/abouts/story";
import HomeThreeAbout from "@components/abouts/home-three-about";

export default function About() {
  const item = blog_data[0];
  return (
    <Wrapper>
      <SEO pageTitle={"About"} />
      <Header />
      <Breadcrumb title="About" subTitle="About" />
      {/* About Us */}
      {/* <HomeThreeAbout /> */}
      <AboutStory />
      <AboutPromotion />
      {/* Facts banner */}
      <AboutFact />
      {/*  */}

      {/* <HomeTeacher /> */}
      {/* <HomeNewsletter /> */}
      <Footer />
    </Wrapper>
  );
}

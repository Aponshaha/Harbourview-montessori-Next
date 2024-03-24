import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import ApproachDetails from "@components/approachs/approach-details";

export default function School() {
  return (
    <Wrapper>
      <SEO pageTitle={"Our Approach"} />
      <HeaderFour />
      <Breadcrumb title="Our Approach" subTitle="The Montessori Approach" />
      {/* <ShopPageMain /> */}
      <ApproachDetails />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}

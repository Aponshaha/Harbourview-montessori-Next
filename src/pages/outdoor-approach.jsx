import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import OutdoorApproachDetails from "@components/approachs/outdoor-details";

export default function School() {
  return (
    <Wrapper>
      <SEO pageTitle={" Our Outdoor classroom"} />
      <HeaderFour />
      <Breadcrumb title="Outdoor classroom" subTitle="Outdoor Approach" />
      <OutdoorApproachDetails />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}

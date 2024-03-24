import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ShopPageMain from "@components/shop/shop-page-main";
import HeaderFour from "@layout/headers/headerFour";
import SchoolDetails from "@components/schoolDetails/schoolDetails";
import school_data from "@data/school-details-data";
import StudentDetails from "@components/schoolDetails/studentDetails";

export default function School() {
  return (
    <Wrapper>
      <SEO pageTitle={"Our School"} />
      <HeaderFour />
      <Breadcrumb title="Our School" subTitle="Our School" />
      {/* <ShopPageMain /> */}
      <StudentDetails />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
